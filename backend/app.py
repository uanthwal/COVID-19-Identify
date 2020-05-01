import uuid
from datetime import datetime
import datetime as dt
import time
import smtplib

from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

import password_util as pu
import query as q

app = Flask(__name__)
CORS(app)


def filter_request(request):
  req_headers = request.headers
  print(req_headers)
  session_id = req_headers['Session-Token']
  user_id = req_headers['User-Id']
  print("In Filter request: {0}, {1}".format(session_id, user_id))
  if q.check_user_session(session_id, user_id):
    return True
  return False

def send_email():
    print("1 sms")

def send_email_at(send_time):
    time.sleep(send_time.timestamp() - time.time())
    send_email()
    print('next sms')

def start_routine_sms():
    print("routine started")
    n = datetime.today() + dt.timedelta(seconds=5)
    # first_email_time = dt.datetime(2018,8,26,3,0,0) # set your sending time in UTC
    interval = dt.timedelta(seconds=5) # set the interval for sending the email

    send_time = n

    while True:
        send_email_at(send_time)
        send_time = send_time + interval


@app.route('/login', methods=['POST'])
def login():
  if request.method == 'POST':
    data = request.json
    print("Login request data: ", data)
    mobile_number = data['mobile_number']
    password = data['password']
    if q.login_user(mobile_number) == 1:
      encrypted_password = pu.get_encrypted_val(password)
      print("encrypted_password: ", encrypted_password)
      data = q.login_authenticate(mobile_number, encrypted_password)
      if data != -1:
        if q.check_active_session(data['user_id']):
          print('User {0} had active session'.format(data['user_id']))
          q.logout_user(data['user_id'])
        session_id = uuid.uuid1()
        q.insert_user_session(str(session_id), data['user_id'])
        data['session_id'] = str(session_id)
        return jsonify({"code": "200", "message": "Login Successful", "data" : data})
      else:
        return jsonify({"code": "201", "message": "Invalid credentials"})
    else:
      return jsonify({"code": "202", "message": "User not found"})


@app.route('/signup', methods=['POST'])
def signup():
  if request.method == 'POST':
    data = request.json
    print("Signup request data: ", data)
    name = data['name']
    date_of_birth = 'NA'
    address = 'NA'
    postal_code = data['postal_code']
    mobile_number = data['mobile_number']
    gender = 'NA'
    email = data['email']
    password = data['password']
    encrypted_password = pu.get_encrypted_val(password)
    print("encrypted_password: ", encrypted_password)
    if q.login_user(mobile_number) == 0:
      if q.signup_insert(name, date_of_birth, address, postal_code, mobile_number, gender, email, encrypted_password):
        return jsonify({"code": "200", "message": "User registered successfully"})
      else:
        return jsonify({"code": "500", "message": "Internal Server error"})
    else:
      return jsonify({"code": "203", "message": "User already exists"})


@app.route('/get-questions-by-day', methods=['POST'])
def get_questions_by_day():
  if request.method == 'POST':
    if not filter_request(request):
      return jsonify({"code": "403", "message": "You are not Authorized to access this resource."})
    data = request.json
    print("Get question by day request data: ", data)
    day = data['day']
    user_id = data['userId']
    if q.are_questions_answered_for_day(day, user_id):
      return jsonify({"code": "209", "message": "Your response has already been recorded for Day " + str(day)})
    questions_list = q.get_questions_by_day(day)
    for q_object in questions_list:
      options = q_object['options']
      split_options = []
      if options is not None:
        split_options = options.split(',')
      options_list = []
      for i in split_options:
        options_list.append({'name': i, 'id': i, 'selected': False})

      q_object['options'] = options_list
    return jsonify({"code": "200", "data": questions_list})


def add_tracker_data(user_id, data):
  tracker_id = q.get_tracker_id_by_user_id(user_id)
  print("Tracker Id: ", tracker_id)
  questions_ans_info = data['questionAndAnswersInfo']
  values_list = []
  for obj in questions_ans_info:
    values_list.append((tracker_id, obj['day'], obj['question_id'], obj['answer']))
  if q.add_answer_for_day(values_list):
    return True
  return False


@app.route('/create-new-tracker', methods=['POST'])
def create_new_tracker():
  if request.method == 'POST':
    if not filter_request(request):
      return jsonify({"code": "403", "message": "You are not Authorized to access this resource."})

    data = request.json
    print("Create new tracker request data: ", data)
    user_id = data['userId']
    tracker_id = q.get_tracker_id_by_user_id(user_id)
    if tracker_id is not None:
      return jsonify({"code": "205", "message": "User already has an active health tracker"})

    now = datetime.now()
    created_date = now.strftime('%Y-%m-%d %H:%M:%S')
    if q.create_new_tracker(user_id, created_date):
      if add_tracker_data(user_id, data):
        return jsonify({"code": "200", "message": "Health tracker created successfully and your data has been "
                                                  "recorded successfully!"})
      else:
        q.deactivate_health_tracker(user_id)

    return jsonify({"code": "206", "message": "Internal Server Error"})


@app.route('/get-health-tracker', methods=['POST'])
def get_health_tracker():
  if request.method == 'POST':
    if not filter_request(request):
      return jsonify({"code": "403", "message": "You are not Authorized to access this resource."})

    data = request.json
    print("Get health tracker request data: ", data)
    user_id = data['userId']
    tracker_id = q.get_tracker_id_by_user_id(user_id)
    if tracker_id is None:
      return jsonify({"code": "207", "message": "No active health trackers for user"})

    ht_data = q.get_health_tracker_data(user_id)
    if ht_data is not None:
      return jsonify({"code": "200", "data": ht_data})

    return jsonify({"code": "208", "message": "Internal Server Error"})


@app.route('/save-data-for-day', methods=['POST'])
def save_data_for_day():
  if not filter_request(request):
    return jsonify({"code": "403", "message": "You are not Authorized to access this resource."})

  if request.method == 'POST':
    data = request.json
    print("Save health tracker request data: ", data)
    user_id = data['userId']
    if add_tracker_data(user_id, data):
      return jsonify({"code": "200", "message": "Your data has been recorded successfully!"})

    return jsonify({"code": "210", "message": "Internal Server Error"})


@app.route('/get-user-info', methods=['POST'])
def get_user_info():
  if not filter_request(request):
    return jsonify({"code": "403", "message": "You are not Authorized to access this resource."})

  if request.method == 'POST':
    req_headers = request.headers
    user_id = req_headers['User-Id']

    data = q.get_user_info(user_id)
    if not data:
      return jsonify({"code": "211", "message": "Internal Server Error"})

    return jsonify({"code": "200", "data": data})

@app.route('/get-summary', methods=['POST'])
def get_summary():
  # if not filter_request(request):
  #   return jsonify({"code": "403", "message": "You are not Authorized to access this resource."})

  if request.method == 'POST':
    data = request.json
    mobile_number = data['mobile_number']

    data = q.get_summary(mobile_number)

    return jsonify({"code": "200", "data": data})

@app.route('/logout', methods=['POST'])
def logout():
  if not filter_request(request):
    return jsonify({"code": "403", "message": "You are not Authorized to access this resource."})

  if request.method == 'POST':
    req_headers = request.headers
    user_id = req_headers['User-Id']

    if q.logout_user(user_id):
      return jsonify({"code": "200", "message": "User logged out successfully"})

    return jsonify({"code": "212", "message": "Internal Server Error"})


#------------------Dashbord API--------------------------

@app.route('/get-symptoms', methods=['POST'])
def get_symptoms():
    if request.method == 'POST':
        data = q.fetch_symptoms()
        return jsonify({"code": "200", "data": data})


@app.route('/get-active-trackers', methods=['POST'])
def get_active_trackers():
    if request.method == 'POST':
        data = q.fetch_active_trackers()

        return jsonify({"code": "200", "data": data})

@app.route('/positive-cases-graph', methods=['POST'])
def get_potive_graph():
    if request.method == 'POST':
        data = q.get_potive_graph()

        return jsonify({"code": "200", "data": data})

@app.route('/get_prediction_five', methods=['POST'])
def get_prediction_five():
    if request.method == 'POST':
        data = q.get_prediction_five()

        return jsonify({"code": "200", "data": data})

    
# @app.before_first_request
# def startup():
#     start_routine_sms()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5000')
    
