DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(500) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(5, 2) NOT NULL,
  stock_quantity INTEGER(100) NOT NULL,
  PRIMARY KEY (item_id)
);
INSERT INTO
  products(
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Banana", "Late Night Stuff", 15.24, 1);
INSERT INTO
  products(
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Make-up", "Morning Stuff", 4.99, 100);
INSERT INTO
  products(
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Advil", "Morning Stuff", 3.02, 75);
INSERT INTO
  products(
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Sunglasses", "Morning Stuff", 3.99, 20);
INSERT INTO
  products(
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Hat", "Afternoon Stuff", 10.15, 5);
INSERT INTO
  products(
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Personal Fan", "Afternoon Stuff", 7.34, 10);
INSERT INTO
  products(
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Pillow", "Afternoon Stuff", 4.99, 90);
INSERT INTO
  products(
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Chey Boyarde", "Evening Stuff", 1.29, 40);
INSERT INTO
  products(
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Bacardi", "Evening Stuff", 19.99, 50);
INSERT INTO
  products(
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Cologna", "Evening Stuff", 4.99, 5);
