DROP DATABASE IF EXISTS product_db;

CREATE DATABASE product_db;
\l
\c product_db

DROP TABLE IF EXISTS product;

CREATE TABLE products(
   id SERIAL PRIMARY KEY NOT NULL,
   brand VARCHAR(100) NOT NULL,
   product_name VARCHAR(100) NOT NULL,
   model VARCHAR(50) NOT NULL,
   sku VARCHAR(50) NOT NULL,
   price DECIMAL(10,2) NOT NULL
   
);



\i db/seed.sql --runs the seed file

SELECT * FROM tasks;
\d
\dt
\d tasks