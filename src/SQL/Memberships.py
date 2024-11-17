import psycopg2
from decouple import config

# Cargar variables del archivo .env
DB_NAME = config('DB_NAME')
DB_USER = config('DB_USER')
DB_PASSWORD = config('DB_PASSWORD')
DB_HOST = config('DB_HOST')
DB_PORT = config('DB_PORT')

create_table_query= """
    CREATE TABLE IF NOT EXISTS memberships (
        id SERIAL PRIMARY KEY,
        tier VARCHAR(50) NOT NULL,
        price VARCHAR(20) NOT NULL,
        benefits TEXT[] NOT NULL
    );
"""

# Datos de membresías
memberships = [
    {
        "tier": "Bronze",
        "price": "$10/month",
        "benefits": [
            "Access to basic content",
            "5% discount on selected items",
            "Participation in secret fashion shows",
        ]
    },
    {
        "tier": "Silver",
        "price": "$25/month",
        "benefits": [
            "Access to all exclusive content",
            "10% discount on all items",
            "Invitation to private events",
            "Access to exclusive photoshoots"
        ]
    },
    {
        "tier": "Gold",
        "price": "$50/month",
        "benefits": [
            "Access to all exclusive content and events",
            "20% discount on all items",
            "Personalized photoshoots",
            "VIP access to Human trafficking events",
            "30% in black women models"
        ]
    }
]

insert_query = """
    INSERT INTO memberships (tier, price, benefits)
    VALUES (%s, %s, %s);
"""

try:
    # Conexión con la base de datos
    connection = psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )

    # Crear un cursor para ejecutar consultas
    cursor = connection.cursor()

    # Crear la tabla 'memberships'
    cursor.execute(create_table_query)
    connection.commit()
    print("Tabla 'memberships' creada exitosamente.")

    # Insertar datos en la tabla 'memberships'
    for membership in memberships:
        cursor.execute(insert_query, (membership["tier"], membership["price"], membership["benefits"]))

    # Confirmar la transacción
    connection.commit()
    print("Datos insertados exitosamente.")
    
except Exception as e:
    print("Error:", e)
finally:
    if connection:
        cursor.close()
        connection.close()