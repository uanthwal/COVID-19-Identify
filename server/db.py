import mysql.connector
from mysql.connector import Error

try:
    connection = mysql.connector.connect(host='localhost',
                                         database='identify',
                                         user='root',
                                         password='vish591996')
   
    db_Info = connection.get_server_info()
    # print("Connected to MySQL Server version ", db_Info)
    cursor = connection.cursor()
    # cursor.execute("select database();")
    # record = cursor.fetchone()
    # print("connected to database: ", record)


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


    #----------insert operation code ----------------

    # mySql_insert_query = """INSERT INTO users (email_id, phone_number, password) 
    #                             VALUES (%s, %s, %s) """

    # cursor = connection.cursor()
    # recordTuple = ("abc@xyz.com", "+1265985459", "1234")

    # cursor.execute(mySql_insert_query, recordTuple)
    # connection.commit()
    # print(cursor.rowcount, "Record inserted successfully into Laptop table")
    # cursor.close()




except Error as e:
    print("Error while connecting to MySQL", e)
# finally:
#     if (connection.is_connected()):
#         cursor.close()
#         connection.close()
#         print("MySQL connection is closed")