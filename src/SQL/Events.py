import psycopg2
from decouple import config

# Cargar variables del archivo .env
DB_NAME = config('DB_NAME')
DB_USER = config('DB_USER')
DB_PASSWORD = config('DB_PASSWORD')
DB_HOST = config('DB_HOST')
DB_PORT = config('DB_PORT')

# Crear tabla para eventos con modelos como un arreglo de texto
create_table_query= ("""
    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        date DATE NOT NULL,
        location VARCHAR(100) NOT NULL,
        models TEXT[] NOT NULL,
        image VARCHAR(255) NOT NULL
    );
""")

# Datos de los eventos
events = [
    {
        "id": 1,
        "date": '2024-09-20',
        "location": 'New York, USA',
        "models": ['Adriana', 'Sara'],
        "image": 'https://mbmarcobeteta.com/wp-content/uploads/2021/02/shutterstock_248799484-scaled.jpg',
    },
    {
        "id": 2,
        "date": '2024-10-05',
        "location": 'Paris, France',
        "models": ['Sindy', 'Gisele'],
        "image": 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
    }
]
insert_query = """
    INSERT INTO events (date, location, models, image)
    VALUES (%s, %s, %s, %s);
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
    for event in events:
        cursor.execute(insert_query, (event['date'], event['location'], event['models'], event['image']))
        connection.commit()
    cursor.close()
    connection.close()
    print("Event table created successfully")
except Exception as e:
    print("Error creating event table")
    print(e)
finally:
    cursor.close()
    connection.close()