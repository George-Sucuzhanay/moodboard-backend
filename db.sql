-- db.sql is a SQL script to create two tables: PhotoCaptions and PhotosFavorites & defines fields for each table
-- these fields like caption id, text should match the model1 and model2 fields
CREATE TABLE PhotosFavorites (
    photo_id SERIAL PRIMARY KEY,
    photo_url VARCHAR(255) NOT NULL,
    user_id INT,
    date_favorited DATE NOT NULL,
    caption_id INT UNIQUE,
    FOREIGN KEY (caption_id) REFERENCES PhotoCaptions(caption_id)
);

CREATE TABLE PhotoCaptions (
    caption_id SERIAL PRIMARY KEY, 
    caption_text TEXT NOT NULL,
    author_id INT,
    date_created DATE NOT NULL
);