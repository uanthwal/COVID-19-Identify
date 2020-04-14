from db import *


def login_user(mobile_number):
    sql_select_query = "SELECT * FROM USER_INFO WHERE MOBILE_NUMBER = '{0}'".format(mobile_number)
    cursor.execute(sql_select_query)
    result_set = cursor.fetchall()
    return len(result_set)


def login_authenticate(mobile_number,password):
    sql_select_query = "SELECT * FROM USER_INFO WHERE MOBILE_NUMBER = '{0}' AND PASSWORD = '{1}'".format(
      mobile_number, password)
    cursor.execute(sql_select_query)
    result_set = cursor.fetchall()
    return len(result_set)


def signup_insert(name, date_of_birth, address, postal_code, mobile_number, gender, email, password):
    try:
        sql_insert_query = """INSERT INTO USER_INFO (NAME, DATE_OF_BIRTH, ADDRESS, POSTAL_CODE, MOBILE_NUMBER,
        GENDER, EMAIL, PASSWORD) VALUES (%s, %s, %s, %s, %s, %s, %s, %s) """
        record_tuple = (name, date_of_birth, address, postal_code, mobile_number, gender, email, password)
        cursor.execute(sql_insert_query, record_tuple)
        connection.commit()
        return True
    except mysql.connector.Error as error:
        print("Failed while inserting new user info {}".format(error))
        return False


def get_questions_by_day(day):
    sql_select_query = "SELECT * FROM FIXED_QUESTIONS WHERE DAY = '{0}'".format(day)
    cursor.execute(sql_select_query)
    result_set = cursor.fetchall()
    questions_list = []
    for row in result_set:
        questions_dict = {'question_id': row[0], 'day': row[1], 'question': row[2], 'q_type': row[3], 'options': row[4]}
        questions_list.append(questions_dict)
    return questions_list
