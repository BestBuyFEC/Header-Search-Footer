DROP DATABASE IF EXISTS product_db;

CREATE DATABASE product_db;
\l
\c product_db

DROP TABLE IF EXISTS products, images;

CREATE TABLE products(
   id SERIAL PRIMARY KEY NOT NULL,
   brand VARCHAR NOT NULL,
   product_name VARCHAR NOT NULL,
   model VARCHAR NOT NULL,
   sku VARCHAR NOT NULL,
   price DECIMAL(10,2) NOT NULL,
   release_date TEXT NOT NULL
   
);

CREATE TABLE images(
   id SERIAL PRIMARY KEY,
   image_url VARCHAR[],
   product_id INT REFERENCES products(id)
);



\i db/seed.sql --runs the seed file

SELECT * FROM products;
SELECT * FROM images;
\d
\dt
\d products
\d images