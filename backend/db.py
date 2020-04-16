import mysql.connector
from mysql.connector import Error


def open_conn():
    try:
        connection = mysql.connector.connect(host='localhost',
                                             database='identify',
                                             user='root',
                                             password='vish591996')
       
        db_Info = connection.get_server_info()
        # print("Connected to MySQL Server version ", db_Info)
        cursor = connection.cursor()
        cursor.execute("select database();")
        # record = cursor.fetchone()
        # print("connected to database: ", record)

    except Error as e:
        print("Error while connecting to MySQL", e)

def close_conn():
    if (connection.is_connected()):
        cursor.close()
        connection.close()
        print("MySQL connection is closed")



 #--------------create tables-----------------

    # mySql_Create_users_table = """CREATE TABLE users ( 
    #                          id int AUTO_INCREMENT NOT NULL,
    #                          email_id varchar(50),
    #                          phone_number varchar(20) NOT NULL,
    #                          password varchar(256) NOT NULL,
    #                          PRIMARY KEY (Id)) """

    # cursor = connection.cursor()
    # result = cursor.execute(mySql_Create_users_table)
    # print("users Table created successfully ")


    # fixed_questions = """CREATE TABLE fixed_questions ( 
    #                          day int NOT NULL,
    #                          que varchar(1000),
    #                          type varchar(20) NOT NULL,
    #                          options varchar(1000) NOT NULL
    #                          )"""

    # cursor = connection.cursor()
    # result = cursor.execute(fixed_questions)
    # print("fixed_questions Table created successfully ")




    #----------insert operation code ----------------

    # mySql_insert_query = """INSERT INTO users (email_id, phone_number, password) 
    #                             VALUES (%s, %s, %s) """

    # cursor = connection.cursor()
    # recordTuple = ("abc@xyz.com", "+1265985459", "1234")

    # cursor.execute(mySql_insert_query, recordTuple)
    # connection.commit()
    # print(cursor.rowcount, "Record inserted successfully into Laptop table")
    # cursor.close()


    # insert_que = """INSERT INTO fixed_questions (day, que, type, options) 
    #                             VALUES (%s, %s, %s, %s) """

    # cursor = connection.cursor()
    # recordTuple_list = [
    # ("1", "Which of the following symptoms are you currently experiencing? Select all that apply.", 
    #     "multiple",
    #     "Fever,Chills,Shortness of breath,Diarrhea,Runny nose"),
    # ("1", "Have you had close contact with someone who is coughing, has a fever, or is otherwise sick and has been outside\
    #     of Canada in the last 14 days or has been diagnosed with COVID-19?",
    #     "single",
    #     "Yes,No")
    # ]

    # for recordTuple in recordTuple_list:
    #     cursor.execute(insert_que, recordTuple)
    #     connection.commit()
    #     print(cursor.rowcount, "Record inserted successfully into Laptop table")

    # cursor.close()
