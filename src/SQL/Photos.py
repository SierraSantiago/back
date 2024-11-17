import psycopg2
from decouple import config

# Cargar variables del archivo .env
DB_NAME = config('DB_NAME')
DB_USER = config('DB_USER')
DB_PASSWORD = config('DB_PASSWORD')
DB_HOST = config('DB_HOST')
DB_PORT = config('DB_PORT')


  # Crear la tabla 'photos'
create_table_query = """
    CREATE TABLE IF NOT EXISTS photos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        imageUrl TEXT NOT NULL,
        price NUMERIC(10, 2) NOT NULL
    );
    """
    
photos_data = [
    {
        "id": 17,
        "title": "Fashion Show in Paris",
        "imageUrl": "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/10/05/149793.jpg",
        "price": 10.00,
    },
    {
        "id": 18,
        "title": "Runway in Milan",
        "imageUrl": "https://www.trend-online.com/wp-content/uploads/2024/03/settimana-moda-date-eventi.jpg",
        "price": 15.00,
    },
    {
        "id": 19,
        "title": "Street Style in New York",
        "imageUrl": "https://media.architecturaldigest.com/photos/56009743cbec99cc0f9f5d1c/master/pass/dam-images-set-design-nyfw-2015-new-york-fashion-week-sets-01.jpg",
        "price": 20.00,
    },
    {
        "id": 20,
        "title": "Fashion Week in London",
        "imageUrl": "https://assets.vogue.com/photos/5d812ee9be32fb0009db9a18/master/w_2560%2Cc_limit/00-story-ISI_1723%2520(1).jpg",
        "price": 25.00,
    },
    {
        "id": 21,
        "title": "Backstage in Tokyo",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEHCwrGynY5MhRbkKvP1T0T0tOpJ3Ht_cIw&s",
        "price": 30.00,
    },
    {
        "id": 22,
        "title": "Model Casting in Los Angeles",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7HTqfUIlmsNAZG50wV6yZge_RkVWbrMs5w&s",
        "price": 35.00,
    },
    {
        "id": 23,
        "title": "Fashion Week in Berlin",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJleMTCgJNr59HAwKrx6xYw-e8pGlgMcxCA&s",
        "price": 40.00,
    },
    {
        "id": 24,
        "title": "Street Style in Barcelona",
        "imageUrl": "https://static.euronews.com/articles/stories/08/45/64/66/1200x675_cmsv2_fbd2373d-9ca9-5a46-8a36-1c519d6cd47a-8456466.jpg",
        "price": 45.00,
    },
    {
        "id": 25,
        "title": "Fashion Show in Dubai",
        "imageUrl": "https://cdnewmoda.expatwoman.com/s3fs-public/maxresdefault%20(2)_0.jpg",
        "price": 50.00,
    },
]

insert_query = """
    INSERT INTO photos (
        id, title, imageUrl, price
        )
    VALUES (
        %s, %s, %s, %s
    );
    """


try:
    # Establecer conexión
    connection = psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )
    cursor = connection.cursor()

    # Crear la tabla
    cursor.execute(create_table_query)
    connection.commit()
    print("Tabla 'photos' creada exitosamente.")
    
    for photo in photos_data:
        cursor.execute(insert_query, (photo["id"], photo["title"], photo["imageUrl"], photo["price"]))
        connection.commit()
    print("Datos insertados exitosamente.")
    
except Exception as e:
    print("Error:", e)
finally:
    cursor.close()
    connection.close()
 
