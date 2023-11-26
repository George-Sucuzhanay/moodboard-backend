CREATE TABLE PhotoCaptions (
    caption_id SERIAL PRIMARY KEY,
    caption_text TEXT NOT NULL,
    author_id INT,
    date_created DATE NOT NULL
);

CREATE TABLE PhotosFavorites (
    photo_id SERIAL PRIMARY KEY,
    photo_url VARCHAR(255) NOT NULL,
    user_id INT,
    date_favorited DATE NOT NULL,
    caption_id INT UNIQUE,
    FOREIGN KEY (caption_id) REFERENCES PhotoCaptions(caption_id)
);
