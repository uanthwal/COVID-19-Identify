from flask import render_template,request,jsonify
from flask import Flask

from db import *
from query import *

app = Flask(__name__)


@app.route('/login',methods = ['POST'])
def login():
    if request.method == 'POST':
        data = request.json
        ph = data['phone_no']
        pas = data['password']
        if login_user(ph) == 1:
            if login_authenticate(ph,pas) == 1:
                return jsonify({"code":"200","message":"True"})
            else:
                return jsonify({"code":"200","message":"wrong password"})
        else:
            return jsonify({"code":"200","message":"user not found"})

@app.route('/signup',methods = ['POST'])
def signup():
    if request.method == 'POST':
        data = request.json
        ph = data['phone_no']
        pas = data['password']
        email = data['email_id']

        if login_user(ph) == 0:
            if signup_insert(ph,pas,email):
                return jsonify({"code":"200","message":"True"})
            else:
                return jsonify({"code":"500"})
        else:
            return jsonify({"code":"200","message":"user already exist"})

@app.route('/get_questions',methods = ['POST'])
def get_questions():
    if request.method == 'POST':
        data = request.json
        day = data['day']
        que_list = day_question(day)
        return jsonify(que_list)

if __name__ == '__main__':
    record = cursor.fetchone()
    print("connected to database: ", record)
    app.run(debug = True)