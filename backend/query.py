import mysql

import db as db
from db import *


def login_user(mobile_number):
  connection = db.open_connection()
  cursor = connection.cursor()
  sql_select_query = "SELECT * FROM USER_INFO WHERE MOBILE_NUMBER = '{0}'".format(mobile_number)
  cursor.execute(sql_select_query)
  result_set = cursor.fetchall()
  db.close_connection()
  return len(result_set)


def login_authenticate(mobile_number, password):
  connection = db.open_connection()
  cursor = connection.cursor()
  sql_select_query = "SELECT USER_ID, USER_TYPE FROM USER_INFO WHERE MOBILE_NUMBER = '{0}' AND PASSWORD = '{1}'".format(
    mobile_number, password)
  cursor.execute(sql_select_query)
  result_set = cursor.fetchall()
  db.close_connection()
  if len(result_set) == 1:
    data = {
      'user_id': result_set[0][0],
      'user_type': result_set[0][1]
    }
    return data
  return -1


def insert_user_session(session_id, user_id):
  try:
    connection = db.open_connection()
    cursor = connection.cursor()
    sql_insert_query = """INSERT INTO USER_SESSION (SESSION_ID, USER_ID) VALUES (%s, %s) """
    record_tuple = (session_id, user_id)
    cursor.execute(sql_insert_query, record_tuple)
    connection.commit()
    db.close_connection()
    return True
  except mysql.connector.Error as error:
    print("Failed in signup_insert {}".format(error))
    db.close_connection()
    return False


def signup_insert(name, date_of_birth, address, postal_code, mobile_number, gender, email, password):
  try:
    connection = db.open_connection()
    cursor = connection.cursor()
    sql_insert_query = """INSERT INTO USER_INFO (NAME, DATE_OF_BIRTH, ADDRESS, POSTAL_CODE, MOBILE_NUMBER,
        GENDER, EMAIL, PASSWORD) VALUES (%s, %s, %s, %s, %s, %s, %s, %s) """
    record_tuple = (name, date_of_birth, address, postal_code, mobile_number, gender, email, password)
    cursor.execute(sql_insert_query, record_tuple)
    connection.commit()
    db.close_connection()
    return True
  except mysql.connector.Error as error:
    print("Failed in signup_insert {}".format(error))
    db.close_connection()
    return False


def are_questions_answered_for_day(day, user_id):
  connection = db.open_connection()
  cursor = connection.cursor()
  sql_select_query = "SELECT * FROM ANSWER_HISTORY WHERE DAY = '{0}' AND TRACKER_ID = (SELECT TRACKER_ID FROM " \
                     "HEALTH_TRACKER WHERE USER_ID = '{1}')".format(day, user_id)
  cursor.execute(sql_select_query)
  result_set = cursor.fetchall()
  db.close_connection()
  if len(result_set) > 0:
    return True
  else:
    return False


def get_questions_by_day(day):
  connection = db.open_connection()
  cursor = connection.cursor()
  sql_select_query = "SELECT * FROM FIXED_QUESTIONS WHERE DAY = '{0}'".format(day)
  cursor.execute(sql_select_query)
  result_set = cursor.fetchall()
  db.close_connection()
  questions_list = []
  for row in result_set:
    questions_dict = {'question_id': row[0], 'day': row[1], 'question': row[2], 'q_type': row[3], 'options': row[4]}
    questions_list.append(questions_dict)
  return questions_list


def create_new_tracker(user_id, created_date):
  try:
    connection = db.open_connection()
    cursor = connection.cursor()
    sql_insert_query = """INSERT INTO HEALTH_TRACKER (USER_ID, CREATED_DATE, TRACKER_STATUS) VALUES (%s, %s, %s) """
    record_tuple = (user_id, created_date, '1')
    cursor.execute(sql_insert_query, record_tuple)
    connection.commit()
    db.close_connection()
    return True
  except mysql.connector.Error as error:
    print("Failed in create_new_tracker {}".format(error))
    db.close_connection()
    return False


def deactivate_health_tracker():
  try:
    connection = db.open_connection()
    cursor = connection.cursor()
    sql_update_query = """UPDATE tblHEALTH_TRACKER SET TRACKER_STATUS=%s """
    record_tuple = ('0')
    cursor.execute(sql_update_query, record_tuple)
    connection.commit()
    db.close_connection()
    return True
  except mysql.connector.Error as error:
    print("Failed in deactivate_health_tracker {}".format(error))
    db.close_connection()
    return False


def get_tracker_id_by_user_id(user_id):
  connection = db.open_connection()
  cursor = connection.cursor()
  sql_select_query = "SELECT TRACKER_ID FROM HEALTH_TRACKER WHERE USER_ID = '{0}' AND TRACKER_STATUS = '1'".format(
    user_id)
  cursor.execute(sql_select_query)
  result_set = cursor.fetchall()
  db.close_connection()
  if len(result_set) > 0:
    return result_set[0][0]
  else:
    return None


def add_answer_for_day(values):
  try:
    connection = db.open_connection()
    cursor = connection.cursor()
    sql_insert_query = """INSERT INTO ANSWER_HISTORY (TRACKER_ID, DAY, QUESTION_ID, ANSWER) VALUES (%s, %s, %s,
        %s) """
    cursor.executemany(sql_insert_query, values)
    connection.commit()
    db.close_connection()
    return True
  except mysql.connector.Error as error:
    print("Failed in add_answer_for_day {}".format(error))
    db.close_connection()
    return False


def get_health_tracker_data(user_id):
  connection = db.open_connection()
  cursor = connection.cursor()
  sql_select_query = "SELECT ah.DAY, ui.NAME, ht.CREATED_DATE, ht.TRACKER_ID, datediff(CURDATE(), " \
                     "DATE(ht.CREATED_DATE)) AS TRACKER_DAYS FROM ANSWER_HISTORY ah, HEALTH_TRACKER ht, " \
                     "USER_INFO ui WHERE ht.USER_ID = ui.USER_ID AND ui.USER_ID = '{0}' AND ah.TRACKER_ID = " \
                     "ht.TRACKER_ID GROUP BY ah.DAY, ht.CREATED_DATE, ht.TRACKER_ID".format(user_id)
  cursor.execute(sql_select_query)
  result_set = cursor.fetchall()
  days = []
  name = ""
  tracker_id = ""
  created_dt = ""
  tracker_days = ""
  for row in result_set:
    days.append(row[0])
    name = "Health tracker for " + str(row[1])
    created_dt = str(row[2])
    tracker_id = str(row[3])
    tracker_days = str(row[4])

  return {'tracker_name': name, 'days': days, 'tracker_id': tracker_id, 'created_dt': created_dt, 'tracker_days':
    tracker_days}


def check_user_session(session_id, user_id):
  connection = db.open_connection()
  cursor = connection.cursor()
  sql_select_query = "SELECT * FROM USER_SESSION WHERE USER_ID = '{0}' AND SESSION_ID = '{1}'".format(
    user_id, session_id)
  cursor.execute(sql_select_query)
  result_set = cursor.fetchall()
  db.close_connection()
  if len(result_set) == 1:
    return True
  else:
    return False


def get_user_info(user_id):
  connection = db.open_connection()
  cursor = connection.cursor()
  sql_select_query = "SELECT NAME, DATE_OF_BIRTH, GENDER, POSTAL_CODE, MOBILE_NUMBER, EMAIL, ADDRESS FROM USER_INFO " \
                     "WHERE USER_ID = '{0}'".format(user_id)
  cursor.execute(sql_select_query)
  result_set = cursor.fetchall()
  db.close_connection()
  data = []
  for row in result_set:
    data = row

  return {"name": data[0], "date_of_birth": row[1], "gender": row[2], "postal_code": row[3], "mobile_number": row[4],
          "email": row[5], "address": row[6]}


def logout_user(user_id):
  try:
    connection = db.open_connection()
    cursor = connection.cursor()
    sql_query = "DELETE FROM USER_SESSION WHERE USER_ID = '{0}'".format(user_id)
    cursor.execute(sql_query)
    connection.commit()
    return True
  except mysql.connector.Error as error:
    print("Failed in logout_user {}".format(error))
    return False


def check_active_session(user_id):
  try:
    connection = db.open_connection()
    cursor = connection.cursor()
    sql_query = "SELECT * FROM USER_SESSION WHERE USER_ID = '{0}'".format(user_id)
    cursor.execute(sql_query)
    result_set = cursor.fetchall()
    if len(result_set) > 0:
      return True
    return False
  except mysql.connector.Error as error:
    print("Failed in logout_user {}".format(error))
    return False

def fetch_symptoms():
    connection = db.open_connection()
    cursor = connection.cursor()
    sql_select_query = "SELECT OPTIONS FROM FIXED_QUESTIONS WHERE Q_TYPE = '{0}'".format("M")
    cursor.execute(sql_select_query)
    result_set = cursor.fetchall()
    db.close_connection()
    symptoms = set()

    for each in result_set:
        for s in each:
            for e in s.split(","):
                symptoms.add(e)

    return [i for i in iter(symptoms)]

def fetch_active_trackers():
    connection = db.open_connection()
    cursor = connection.cursor()
    sql_select_query = "SELECT * FROM HEALTH_TRACKER left join USER_INFO ON HEALTH_TRACKER.USER_ID = USER_INFO.USER_ID"
    cursor.execute(sql_select_query)
    result_set = cursor.fetchall()
    db.close_connection()
    details = []

    for row in result_set:
        temp = {}
        temp['date_time'] = row[2]
        temp['name'] = row[5]
        temp['postal_code'] = row[8]
        temp['mobile_number'] = row[9]
        temp['email'] = row[11]
        details.append(temp)

    return details
