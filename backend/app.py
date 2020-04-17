from datetime import datetime

from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

import query as q

app = Flask(__name__)
CORS(app)


@app.route('/login', methods=['POST'])
def login():
  if request.method == 'POST':
    data = request.json
    print("Login request data: ", data)
    mobile_number = data['mobile_number']
    password = data['password']
    if q.login_user(mobile_number) == 1:
      if q.login_authenticate(mobile_number, password) == 1:
        return jsonify({"code": "200", "message": "Login Successful"})
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
    date_of_birth = data['date_of_birth']
    address = data['address']
    postal_code = data['postal_code']
    mobile_number = data['mobile_number']
    gender = data['gender']
    email = data['email']
    password = data['password']
    if q.login_user(mobile_number) == 0:
      if q.signup_insert(name, date_of_birth, address, postal_code, mobile_number, gender, email, password):
        return jsonify({"code": "200", "message": "User registered successfully"})
      else:
        return jsonify({"code": "500", "message": "Internal Server error"})
    else:
      return jsonify({"code": "203", "message": "User already exists"})


@app.route('/get-questions-by-day', methods=['POST'])
def get_questions_by_day():
  if request.method == 'POST':
    data = request.json
    day = data['day']
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


if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0', port='5000')
