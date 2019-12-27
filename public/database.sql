CREATE DATABASE charit_it;

USE charit_it;

CREATE TABLE shop_owner (userId BIGINT(20) NOT NULL, userName VARCHAR(50), password VARCHAR(20), email VARCHAR(50), shop_name VARCHAR(50), shop_address VARCHAR(50), shop_phone_number VARCHAR(50), PRIMARY KEY(userId));

ALTER TABLE shop_owner DROP userName;

INSERT INTO shop_owner (userId, password, email, shop_name, shop_address, shop_phone_number) VALUES ("00001", "password", "testshop@test.com", "test shop", "test shop address", "123456789");

INSERT INTO shop_owner (userId, password, email, shop_name, shop_address, shop_phone_number) VALUES ("00002", "password2", "testshop2@test.com", "test shop 2", "test shop address 2", "123456789 2");

 SELECT * FROM shop_owner;

+--------+-----------+--------------------+-------------+---------------------+-------------------+
| userId | password  | email              | shop_name   | shop_address        | shop_phone_number |
+--------+-----------+--------------------+-------------+---------------------+-------------------+
|      1 | password  | testshop@test.com  | test shop   | test shop address   | 123456789         |
|      2 | password2 | testshop2@test.com | test shop 2 | test shop address 2 | 123456789 2       |
+--------+-----------+--------------------+-------------+---------------------+-------------------+


CREATE TABLE item (itemId BIGINT(20) NOT NULL, userId BIGINT(20), image_URL VARCHAR(100), item_name VARCHAR(50), item_description VARCHAR(150), item_price DECIMAL(6,2), PRIMARY KEY(itemId));


/* the item_price column can store 6 digits with 2 decimal places; therefore, the range of the item_price column is from 9999.99 to -9999.99. */

ALTER TABLE item ADD FOREIGN KEY (userId) REFERENCES shop_owner(userId);

INSERT INTO item (itemId, userId, image_URL, item_name, item_description, item_price) VALUES ("00001", "00001", "https://testurlforalovelyimage.com", "Test trouser", "Test trouser gre. Size 16. Brand Levi's", "1.50");

INSERT INTO item (itemId, userId, image_URL, item_name, item_description, item_price) VALUES ("00002", "00002", "https://testurlforalovelyimage2.com", "Test t-shirt", "Test t-shirt grey. Size 16. Brand Primark", "2.50");

 SELECT * FROM item;

 sql>  SELECT * FROM item;
+--------+--------+-------------------------------------+--------------+-------------------------------------------+------------+
| itemId | userId | image_URL                           | item_name    | item_description                          | item_price |
+--------+--------+-------------------------------------+--------------+-------------------------------------------+------------+
|      1 |      1 | https://testurlforalovelyimage.com  | Test trouser | Test trouser gre. Size 16. Brand Levi's   |       1.50 |
|      2 |      2 | https://testurlforalovelyimage2.com | Test t-shirt | Test t-shirt grey. Size 16. Brand Primark |       2.50 |
+--------+--------+-------------------------------------+--------------+-------------------------------------------+------------+

/* need to fix inverted commas/