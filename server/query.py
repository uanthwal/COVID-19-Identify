from db import *

def login_user(ph):
    sql_select_query = "select * from users where phone_number = {0}".format(ph)
    cursor.execute(sql_select_query)
    record = cursor.fetchall()

    return len(record)

def login_authenticate(ph,pas):
    sql_select_query = "select * from users where phone_number = {0} and password = {1}".format(ph,pas)
    cursor.execute(sql_select_query)
    record = cursor.fetchall()

    return len(record)

def signup_insert(ph,pas,email):
    try:
        mySql_insert_query = """INSERT INTO users (email_id, phone_number, password) 
                                    VALUES (%s, %s, %s) """

        recordTuple = (email, ph, pas)
        cursor.execute(mySql_insert_query, recordTuple)
        connection.commit()
        return True
    except mysql.connector.Error as error:
        print("Failed to insert into MySQL table {}".format(error))
        return False

def day_question(day):
    sql_select_query = "select * from fixed_questions where day = {0}".format(day)
    cursor.execute(sql_select_query)
    records = cursor.fetchall()
    que_list = []

    for row in records:
        que_dict = {}
        que_dict['day'] = row[0]
        que_dict['que'] = row[1]
        que_dict['type'] = row[2]
        que_dict['options'] = row[3]
        que_list.append(que_dict)

    return que_list