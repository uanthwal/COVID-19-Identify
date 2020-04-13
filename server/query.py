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


