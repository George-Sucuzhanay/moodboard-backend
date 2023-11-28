-- db.sql is a SQL script to create two tables: PhotoCaptions and PhotosFavorites & defines fields for each table
-- these fields like caption id, text should match the model1 and model2 fields
-- this file also contains SQL commands for creating and populating the database like copy paste each section into your terminal AFTER
-- first do brew services start postgresql then psql postgres then copy below one by one
-- database connection is established using Sequelize in db.js with tables PhotoCaptions and PhotosFavorites that are created in db.sql

--database name
CREATE DATABASE postgres; 

--table for captions
CREATE TABLE PhotoCaptions ( 
    caption_id SERIAL PRIMARY KEY, 
    caption_text TEXT NOT NULL,
    author_id INT,
    date_created DATE NOT NULL
);

--table for favorites, the foreign key is the relationship between the two tables
CREATE TABLE PhotosFavorites ( 
    photo_id SERIAL PRIMARY KEY,
    photo_url VARCHAR(255) NOT NULL,
    caption_id INT UNIQUE,
    FOREIGN KEY (caption_id) REFERENCES PhotoCaptions(caption_id)
);

--insert intial data
INSERT INTO PhotoCaptions (caption_text, author_id, date_created) VALUES 
('A beautiful sunrise over the mountains', 101, '2021-01-15'),
('The city lights shining at night', 102, '2021-02-20'),
('A day at the beach with clear blue skies', 103, '2021-03-05'),
('A close-up of a blooming flower in spring', 104, '2021-04-10'),
('A snowy landscape with footprints in the snow', 105, '2021-05-25');

--insert intial data
INSERT INTO PhotosFavorites (photo_url, caption_id) VALUES 
('http://example.com/photo1.jpg', 1),
('http://example.com/photo2.jpg', 2),
('http://example.com/photo3.jpg', 3),
('http://example.com/photo4.jpg', 4),
('http://example.com/photo5.jpg', 5);

--retrieve data for testing
SELECT * FROM PhotosFavorites; 
SELECT * FROM PhotoCaptions;