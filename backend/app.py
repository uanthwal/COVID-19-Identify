from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

import query as q
from db import *

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
      split_options = options.split(',')
      options_list = []
      for i in split_options:
        options_list.append({'name':i, 'id':i, 'selected': False})
        
      q_object['options'] = options_list
    return jsonify({"code": "200", "data": questions_list})


if __name__ == '__main__':
  record = cursor.fetchone()
  print("Connected to database: ", record)
  app.run(debug=True, host='0.0.0.0', port='5000')
