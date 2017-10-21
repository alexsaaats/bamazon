DROP DATABASE bamazon; 

CREATE DATABASE bamazon;

USE bamazon;


CREATE TABLE products (
	item_id INT auto_increment PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100),
    price DECIMAL(10,2),
    stock_quantity INTEGER(30)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
('Attack Drone X', 'Drones', 39.99, 10),
('Attack Drone A.1', 'Drones', 59.99, 5),
('Helper Drone B', 'Drones', 109.99, 5),
('Helper Drone C', 'Drones', 129.99, 7),
('Jason the Bot', 'Big Bots', 209.99, 2),
('Ryu the Bot', 'Big Bots', 309.99, 2),
('How to Fly Drones', 'Books', 9.99, 10),
('How to Build an Attack Drone', 'Books', 9.99, 10),
('How to Use Helper Drones', 'Books', 9.99, 10),
('Train your Big Bot', 'Books', 9.99, 10),
('Drone Analysis Kit', 'Support Tools', 19.99, 10),
('Big Bot Analysis Kit', 'Support Tools', 19.99, 10)

