import mysql.connector
from mysql.connector import Error


def open_connection():
  global _connection
  try:
    _connection = mysql.connector.connect(host='localhost',
                                          port=3306,
                                          database='identify',
                                          user='root',
                                          password='vish591996')
    # print("MySQL connection is opened")
    return _connection
  except Error as e:
    print("Error while connecting to MySQL", e)


def close_connection():
  if _connection.is_connected():
    _connection.close()
    # print("MySQL connection is closed")


#message = client.messages \ 
   # ...:     .create( 
   # ...:          body="Join Earth's mightiest heroes. Like Kevin Bacon.", 
   # ...:          to='+19027186591', 
   # ...:          from_='+19029122586' 
   # ...:      )  