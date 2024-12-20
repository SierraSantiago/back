import psycopg2
from decouple import config

# Cargar variables del archivo .env
DB_NAME = config('DB_NAME')
DB_USER = config('DB_USER')
DB_PASSWORD = config('DB_PASSWORD')
DB_HOST = config('DB_HOST')
DB_PORT = config('DB_PORT')

create_table_query = """
CREATE TABLE IF NOT EXISTS makeup (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image_url TEXT,
    slug VARCHAR(255) UNIQUE NOT NULL
);
"""

makeup = [
    {
        "id": 1,
        "name": "Lipstick",
        "price": 10.99,
        "description": "A lipstick that gives you a bold look.",
        "image": "https://sdcdn.io/mac/us/mac_sku_M3EW10_1x1_0.png?width=1080&height=1080",
        "slug": "lipstick"
    },
    {
        "id": 2,
        "name": "Eyeliner",
        "price": 5.99,
        "description": "An eyeliner that gives you a sharp look.",
        "image": "https://lurellacosmetics.com/cdn/shop/products/FXCM4454-3.png?v=1606155119",
        "slug": "eyeliner"
    },
    {
        "id": 3,
        "name": "Blush",
        "price": 15.99,
        "description": "A blush that gives you a rosy look.",
        "image": "https://sdcdn.io/mac/qa/mac_sku_M39H15_1x1_0.png?width=1080&height=1080",
        "slug": "blush"
    },
    {
        "id": 4,
        "name": "Foundation",
        "price": 20.99,
        "description": None,
        "image": "https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/products/makeup/face/foundation-makeup/infallible-24-hour-fresh-wear-foundation-lightweight/435-rose-vanilla/22-05-24/071249382189-t1.png",
        "slug": "foundation"
    },
    {
        "id": 5,
        "name": "Mascara",
        "price": 7.99,
        "description": None,
        "image": "https://blkcosmetics.com.ph/cdn/shop/files/VolumeBoostWaterproofMascara.png?v=1691672297",
        "slug": "mascara"
    },
    {
        "id": 6,
        "name": "Eyeshadow",
        "price": 12.99,
        "description": None,
        "image": "https://naomisade.com/cdn/shop/products/A49A6960v2_edited_4.png?v=1642143576",
        "slug": "eyeshadow"
    },
    {
        "id": 7,
        "name": "Concealer",
        "price": 9.99,
        "description": None,
        "image": "https://sdcdn.io/mac/ca/mac_sku_SF4X09_1x1_0.png?width=1440&height=1440",
        "slug": "concealer"
    },
    {
        "id": 8,
        "name": "Highlighter",
        "price": 8.99,
        "description": None,
        "image": "https://cdn.azure.revlon.com/-/media/revlon/content/products/hero-images-9x16/revlon-eye-colorstay-endless-glow-liquid-highlighter-citrine-309970075019-hero-9x16.ashx",
        "slug": "highlighter"
    },
    {
        "id": 9,
        "name": "Bronzer",
        "price": 11.99,
        "description": None,
        "image": "https://www.milanicosmetics.com.co/wp-content/uploads/2020/10/Baked_Bronzer_4_PDP_1.png",
        "slug": "bronzer"
    },
    {
        "id": 10,
        "name": "Setting Powder",
        "price": 14.99,
        "description": None,
        "image": "https://sdcdn.io/mac/us/mac_sku_NX6404_1x1_0.png?width=1080&height=1080",
        "slug": "setting-powder"
    },
    {
        "id": 11,
        "name": "Setting Spray",
        "price": 16.99,
        "description": None,
        "image": "https://www.elfcosmetics.com/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw06838b04/2024/PowerGripDewySettingSpray/84759_Open_A_V9_R.png",
        "slug": "setting-spray"
    },
    {
        "id": 12,
        "name": "Lip Gloss",
        "price": 6.99,
        "description": None,
        "image": "https://www.elfcosmetics.com/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw141e8912/2023/GlowReviverLipOil/82004_OpenA_V7_R.png?sw=400",
        "slug": "lip-gloss"
    },
    {
        "id": 13,
        "name": "Lip Liner",
        "price": 4.99,
        "description": None,
        "image": "https://sdcdn.io/mac/gb/mac_sku_S4W934_1x1_0.png?width=1440&height=1440",
        "slug": "lip-liner"
    },
    {
        "id": 14,
        "name": "Primer",
        "price": 13.99,
        "description": None,
        "image": "https://sdcdn.io/mac/qa/mac_sku_SJEJ01_1x1_0.png?width=1080&height=1080",
        "slug": "primer"
    },
    {
        "id": 15,
        "name": "Brow Pencil",
        "price": 7.99,
        "description": None,
        "image": "https://cdn.azure.revlon.com/-/media/revlon/content/products/eye/brow-color/micro-brow-medium-brown.ashx",
        "slug": "brow-pencil"
    },
    {
        "id": 16,
        "name": "Brow Gel",
        "price": 5.99,
        "description": None,
        "image": "https://www.wellpeople.com/on/demandware.static/-/Sites-w3llpeople-master/default/dw4f2eadd4/2021/Expressionist%20Clear%20Brow%20Gel/32029_OpenA_R.png",
        "slug": "brow-gel"
    }
]


insert_query = """
INSERT INTO makeup (name, price, description, image_url, slug) 
VALUES ( %s, %s, %s, %s, %s);
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
    print("Table created successfully in PostgreSQL")

    records = [(item["name"], item["price"], item["description"], item["image"], item["slug"]) for item in makeup]
    cursor.executemany(insert_query, records)
    connection.commit()
    print("Records inserted successfully")
except Exception as e:
    print("Error:", e)
finally:
    cursor.close()
    connection.close()