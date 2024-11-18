import psycopg2
from decouple import config

# Cargar variables del archivo .env
DB_NAME = config('DB_NAME')
DB_USER = config('DB_USER')
DB_PASSWORD = config('DB_PASSWORD')
DB_HOST = config('DB_HOST')
DB_PORT = config('DB_PORT')

create_table_query = """
    CREATE TABLE IF NOT EXISTS contactus (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        comment TEXT NOT NULL
    );
"""

try:
    connection = psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )
    cursor = connection.cursor()
    cursor.execute(create_table_query)
    connection.commit()
    cursor.close()
    connection.close()
    print("ContactUs table created successfully")
except Exception as e:
    print("Error creating contactus table:", e)
finally:
    cursor.close()
    connection.close()
    print("Connection closed")