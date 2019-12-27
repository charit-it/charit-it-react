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


/* the item_price column created above can store 6 digits with 2 decimal places. So the range of the item_price column is from -9999.99 to 9999.99 */

ALTER TABLE item ADD FOREIGN KEY (userId) REFERENCES shop_owner(userId);

INSERT INTO item (itemId, userId, image_URL, item_name, item_description, item_price) VALUES ("00001", "00001", "https://testurlforalovelyimage.com", "Test trouser", "Test trouser gre. Size 16. Brand Levi's", "1.50");

INSERT INTO item (itemId, userId, image_URL, item_name, item_description, item_price) VALUES ("00002", "00002", "https://testurlforalovelyimage2.com", "Test t-shirt", "Test t-shirt grey. Size 16. Brand Primark", "2.50");

 SELECT * FROM item;


+--------+--------+-------------------------------------+--------------+-------------------------------------------+------------+
| itemId | userId | image_URL                           | item_name    | item_description                          | item_price |
+--------+--------+-------------------------------------+--------------+-------------------------------------------+------------+
|      1 |      1 | https://testurlforalovelyimage.com  | Test trouser | Test trouser gre. Size 16. Brand Levis   |       1.50 |
|      2 |      2 | https://testurlforalovelyimage2.com | Test t-shirt | Test t-shirt grey. Size 16. Brand Primark |       2.50 |
+--------+--------+-------------------------------------+--------------+-------------------------------------------+------------+

/* Adding real images to table using S3 urls*/

INSERT INTO item (itemId, userId, image_URL, item_name, item_description, item_price) VALUES ("00003", "00001", "hhttps://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/20180731_204031.jpg", "Baby body warmer", "Swimming body warmer. Size 3-6 months. Brand Babywarma", "1.50");


INSERT INTO item (itemId, userId, image_URL, item_name, item_description, item_price) VALUES ("00004", "00002", "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/IMG-20180504-WA0014.jpg", "Basketball t-shirt", "Short sleeve t-shirt. Size 3-6 months. Colour blue", "1.00");

/* Made a mistake with previous' item's url. Correcting it with the command below*/
UPDATE item SET image_URL = "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/20180731_204031.jpg" WHERE itemId = 00003;

INSERT INTO item (itemId, userId, image_URL, item_name, item_description, item_price) VALUES ("00005", "00002", "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/IMG_20191105_155827-COLLAGE.jpg", "Toddler shoes", "Navy toddler shoes. Size 3 G. Colour navy", "2.50");


SELECT * FROM item;
+--------+--------+-----------------------------------------------------------------------------------------+--------------------+--------------------------------------------------------+------------+
| itemId | userId | image_URL                                                                               | item_name          | item_description                                       | item_price |
+--------+--------+-----------------------------------------------------------------------------------------+--------------------+--------------------------------------------------------+------------+
|      1 |      1 | https://testurlforalovelyimage.com                                                      | Test trouser       | Test trouser gre. Size 16. Brand Levis                |       1.50 |
|      2 |      2 | https://testurlforalovelyimage2.com                                                     | Test t-shirt       | Test t-shirt grey. Size 16. Brand Primark              |       2.50 |
|      3 |      1 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/20180731_204031.jpg             | Baby body warmer   | Swimming body warmer. Size 3-6 months. Brand Babywarma |       1.50 |
|      4 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/IMG-20180504-WA0014.jpg         | Basketball t-shirt | Short sleeve t-shirt. Size 3-6 months. Colour blue     |       1.00 |
|      5 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/IMG_20191105_155827-COLLAGE.jpg | Toddler shoes      | Navy toddler shoes. Size 3 G. Colour navy              |       2.50 |
+--------+--------+-----------------------------------------------------------------------------------------+--------------------+--------------------------------------------------------+------------+

