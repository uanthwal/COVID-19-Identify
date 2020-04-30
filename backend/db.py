import mysql.connector
from mysql.connector import Error


def open_connection():
  global _connection
  try:
    _connection = mysql.connector.connect(host='localhost',
                                          port=3306,
                                          database='identify',
                                          user='root',
                                          password='root@123')
    # print("MySQL connection is opened")
    return _connection
  except Error as e:
    print("Error while connecting to MySQL", e)


def close_connection():
  if _connection.is_connected():
    _connection.close()
    # print("MySQL connection is closed")
