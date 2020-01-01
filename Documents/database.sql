CREATE DATABASE charit_it;

USE charit_it;

CREATE TABLE shop_owner (userId BIGINT(20) NOT NULL, userName VARCHAR(50), password VARCHAR(20), email VARCHAR(50), shop_name VARCHAR(50), shop_address VARCHAR(50), shop_phone_number VARCHAR(50), PRIMARY KEY(userId));

ALTER TABLE shop_owner DROP userName;

INSERT INTO shop_owner (userId, password, email, shop_name, shop_address, shop_phone_number) VALUES ("00001", "password", "testshop@test.com", "test shop", "test shop address", "123456789");

INSERT INTO shop_owner (userId, password, email, shop_name, shop_address, shop_phone_number) VALUES ("00002", "password2", "testshop2@test.com", "test shop 2", "test shop address 2", "123456789 2");

/* Checking shop_owner
SELECT * FROM shop_owner;

+--------+-----------+--------------------+-------------+---------------------+-------------------+
| userId | password  | email              | shop_name   | shop_address        | shop_phone_number |
+--------+-----------+--------------------+-------------+---------------------+-------------------+
|      1 | password  | testshop@test.com  | test shop   | test shop address   | 123456789         |
|      2 | password2 | testshop2@test.com | test shop 2 | test shop address 2 | 123456789 2       |
+--------+-----------+--------------------+-------------+---------------------+-------------------+
*/

CREATE TABLE item (itemId BIGINT(20) NOT NULL, userId BIGINT(20), image_URL VARCHAR(100), item_name VARCHAR(50), item_description VARCHAR(150), item_price DECIMAL(6,2), PRIMARY KEY(itemId));


/* the item_price column created above can store 6 digits with 2 decimal places. So the range of the item_price column is from -9999.99 to 9999.99 */

ALTER TABLE item ADD FOREIGN KEY (userId) REFERENCES shop_owner(userId);

/* Initial test entries. Now deleted 

INSERT INTO item (itemId, userId, image_URL, item_name, item_description, item_price) VALUES ("00001", "00001", "https://testurlforalovelyimage.com", "Test trouser", "Test trouser gre. Size 16. Brand Levi's", "1.50");

INSERT INTO item (itemId, userId, image_URL, item_name, item_description, item_price) VALUES ("00002", "00002", "https://testurlforalovelyimage2.com", "Test t-shirt", "Test t-shirt grey. Size 16. Brand Primark", "2.50");

SELECT * FROM item;
+--------+--------+-------------------------------------+--------------+-------------------------------------------+------------+
| itemId | userId | image_URL                           | item_name    | item_description                          | item_price |
+--------+--------+-------------------------------------+--------------+-------------------------------------------+------------+
|      1 |      1 | https://testurlforalovelyimage.com  | Test trouser | Test trouser gre. Size 16. Brand Levis   |       1.50 |
|      2 |      2 | https://testurlforalovelyimage2.com | Test t-shirt | Test t-shirt grey. Size 16. Brand Primark |       2.50 |
+--------+--------+-------------------------------------+--------------+-------------------------------------------+------------+
*/

/* Adding test images to table using actual S3 urls

INSERT INTO item (itemId, userId, image_URL, item_name, item_description, item_price) VALUES ("00003", "00001", "hhttps://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/20180731_204031.jpg", "Baby body warmer", "Swimming body warmer. Size 3-6 months. Brand Babywarma", "1.50");


INSERT INTO item (itemId, userId, image_URL, item_name, item_description, item_price) VALUES ("00004", "00002", "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/IMG-20180504-WA0014.jpg", "Basketball t-shirt", "Short sleeve t-shirt. Size 3-6 months. Colour blue", "1.00");
*/
/* Made a mistake with previous' item's url. Correcting it with the command below
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
*/
/* Adding new column for type of item below */
ALTER TABLE item ADD itemType VARCHAR(20) AFTER image_URL;

/* Deleting test items 
DELETE FROM item WHERE itemId = 1;
DELETE FROM item WHERE itemId = 2;
DELETE FROM item WHERE itemId = 3;
DELETE FROM item WHERE itemId = 4;
DELETE FROM item WHERE itemId = 5;
*/

/*inserting all images (5 per category) */
INSERT INTO item (itemId, userId, image_URL, itemType, item_name, item_description, item_price)
VALUES (1, 1, "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Children/20180731_204031.jpg", "Children", "Baby body warmer", "Swimming body warmer. Size 3-6 months. Brand Babywarma", 1.5), (2, 2, "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Children/20191230_234106-COLLAGE.jpg", "Children", "Multi coloured dress", "Multicoloured summer dress. Size 12-18 months. Brand Next", 1.5), (3, 1, "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Children/20191230_234230-COLLAGE.jpg", "Children", "Denim dungarees", "Dungarees. Size 12-18 months. Brand Tu", 1.5), (4, 1, "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Children/IMG-20180504-WA0014.jpg", "Children", "Basketball t-shirt", "Short sleeve t-shirt. Size 3-6 months. Colour blue", 1), (5, 2, "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Children/IMG_20191105_155827-COLLAGE.jpg", "Children", "Toddler shoes", "Navy toddler shoes. Size 3 G. Colour navy", 2), (6, 2,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Electronics/appliance-2255_1920.jpg", "Electronics", "Vacuum cleaner", "Yellow bagless vacuum cleaner. Brand Dyson", 11.5), (7, 1,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Electronics/close-up-photography-of-yellow-alarm-clock-635003.jpg", "Electronics", "Yellow alarm clock", "Straight lines, vintage alarm clock. Plugs to main", 2), (8, 2, "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Electronics/coffee-machine-2690253_1920.jpg", "Electronics", "Coffee machine", "Red and white coffee machine. Takes nespresso capsules. Brand ?", 4), (9, 1,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Electronics/headphones-3683983_1920.jpg", "Electronics", "Headphones", "Wireless headphones. Brand Sennheiser", 3.5), (10, 1, "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Electronics/polar-a360-2059937_1920.jpg", "Electronics", "Smart watch", "White smart watch. Brand Samsung Galaxy Fit(e)", 8.5), (11, 2,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Men/beige-and-black-hat-near-swimming-pool-984619.jpg", "Men", "Hat", "Beige and black hat", 3), (12, 2,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Men/black-denim-jeans-on-white-panel-65676.jpg", "Men", "Black jens", "Black denim jeans. Size 14 regular fit. Brand F&F", 3), (13, 1,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Men/black-leather-belt-89783.jpg", "Men", "Leather belt", "Black leather belt. Size large", 1.5), (14, 2,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Men/blank-1976334_1280.png","Men", "White t-shirt", "Plain white t-shirt", 2.5), (15, 1, "https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Men/fashion-shoes-footwear-19090.jpg", "Men", "Casual shoes", "Navy blue shoes, white sporty sole. Laceless. Brand Criscione", 4.5), (16, 1,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Women/boots-181744_1280.jpg", "Women", "Wedge boots", "Wedge heel ankle boots. Camel colour with animal print details", 4.5), (17, 2,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Women/fashion-1283863_1920.jpg",  "Women", "Knitted jumper", "Casual knitted jumper. Grey and navy. Size L", 3.5), (18, 2,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Women/mittens-1177211_1920.jpg", "Women", "Mittens", "Grey mittens. Faux fur cuffs. Only size", 1.5), (19, 1,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Women/person-in-blue-denim-jeans-and-white-converse-all-stars-52574.jpg","Women", "Blue jeans", "Blue denim jeans. Aged effect. Size 12 skinny. Brand Primark", 3), (20, 2,"https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Women/shoes-2216498_1920.jpg",  "Women", "Pink sneakers", "Pink and white casual shoes sneakers. Size 5. Brand Adidas", 6);

/* Checking item
 SELECT * FROM item;
+--------+--------+------------------------------------------------------------------------------------------------------+-------------+----------------------+-----------------------------------------------------------------+------------+
| itemId | userId | image_URL                                                                                            | itemType    | item_name            | item_description                                                | item_price |
+--------+--------+------------------------------------------------------------------------------------------------------+-------------+----------------------+-----------------------------------------------------------------+------------+
|      1 |      1 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Children/20180731_204031.jpg                 | Children    | Baby body warmer     | Swimming body warmer. Size 3-6 months. Brand Babywarma          |       1.50 |
|      2 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Children/20191230_234106-COLLAGE.jpg         | Children    | Multi coloured dress | Multicoloured summer dress. Size 12-18 months. Brand Next       |       1.50 |
|      3 |      1 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Children/20191230_234230-COLLAGE.jpg         | Children    | Denim dungarees      | Dungarees. Size 12-18 months. Brand Tu                          |       1.50 |
|      4 |      1 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Children/IMG-20180504-WA0014.jpg             | Children    | Basketball t-shirt   | Short sleeve t-shirt. Size 3-6 months. Colour blue              |       1.00 |
|      5 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Children/IMG_20191105_155827-COLLAGE.jpg     | Children    | Toddler shoes        | Navy toddler shoes. Size 3 G. Colour navy                       |       2.00 |
|      6 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Electronics/appliance-2255_1920.jpg          | Electronics | Vacuum cleaner       | Yellow bagless vacuum cleaner. Brand Dyson                      |      11.50 |
|      7 |      1 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Electronics/close-up-photography-of-yellow-a | Electronics | Yellow alarm clock   | Straight lines, vintage alarm clock. Plugs to main              |       2.00 |
|      8 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Electronics/coffee-machine-2690253_1920.jpg  | Electronics | Coffee machine       | Red and white coffee machine. Takes nespresso capsules. Brand ? |       4.00 |
|      9 |      1 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Electronics/headphones-3683983_1920.jpg      | Electronics | Headphones           | Wireless headphones. Brand Sennheiser                           |       3.50 |
|     10 |      1 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Electronics/polar-a360-2059937_1920.jpg      | Electronics | Smart watch          | White smart watch. Brand Samsung Galaxy Fit(e)                  |       8.50 |
|     11 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Men/beige-and-black-hat-near-swimming-pool-9 | Men         | Hat                  | Beige and black hat                                             |       3.00 |
|     12 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Men/black-denim-jeans-on-white-panel-65676.j | Men         | Black jens           | Black denim jeans. Size 14 regular fit. Brand F&F               |       3.00 |
|     13 |      1 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Men/black-leather-belt-89783.jpg             | Men         | Leather belt         | Black leather belt. Size large                                  |       1.50 |
|     14 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Men/blank-1976334_1280.png                   | Men         | White t-shirt        | Plain white t-shirt                                             |       2.50 |
|     15 |      1 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Men/fashion-shoes-footwear-19090.jpg         | Men         | Casual shoes         | Navy blue shoes, white sporty sole. Laceless. Brand Criscione   |       4.50 |
|     16 |      1 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Women/boots-181744_1280.jpg                  | Women       | Wedge boots          | Wedge heel ankle boots. Camel colour with animal print details  |       4.50 |
|     17 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Women/fashion-1283863_1920.jpg               | Women       | Knitted jumper       | Casual knitted jumper. Grey and navy. Size L                    |       3.50 |
|     18 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Women/mittens-1177211_1920.jpg               | Women       | Mittens              | Grey mittens. Faux fur cuffs. Only size                         |       1.50 |
|     19 |      1 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Women/person-in-blue-denim-jeans-and-white-c | Women       | Blue jeans           | Blue denim jeans. Aged effect. Size 12 skinny. Brand Primark    |       3.00 |
|     20 |      2 | https://charit-it-mvp-images.s3.eu-west-2.amazonaws.com/Women/shoes-2216498_1920.jpg                 | Women       | Pink sneakers        | Pink and white casual shoes sneakers. Size 5. Brand Adidas      |       6.00 |
+--------+--------+------------------------------------------------------------------------------------------------------+-------------+----------------------+-----------------------------------------------------------------+------------+
*/