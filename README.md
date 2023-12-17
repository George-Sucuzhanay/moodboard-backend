#  📸 Unsplash X Pexels MoodBoard 🎥

A website by the Lally Enthusiasts

## Project Description

This repository is the front end of a full-stack web application using the tools and techniques we've learned over the semester, including React, Redux, Router, PostgreSQL, Sequelize, Express, and Node.
This project aims to provide users with a seamless experience in searching for, storing, and organizing their favorite images. The application will utilize two external API calls, leveraging the Unsplash API for copyright-free photos and the Pexels API for royalty-free videos, allowing users to curate their mood boards with a diverse range of media content. The images will be stored in a database and users will be able to perform CRUD operations on the captions/favorites of the images. Routing will be managed via a router, states via Redux, and UI features will include utilizing multiple react components.


### Back End Requirements
- **Database (PostgreSQL, Sequlize)**
  - **Create 2 or more models, each with 2 or more fields** - PhotosFavorites (Model1) has 2 or more fields and PhotosCaptions (Model2) has 2 or more fields as well
  - **2 or models should be associated with each other** - The 2 models are associated with each other with the association being in the PhotosFavorites model with caption_id referencing caption_id in the PhotoCaptions model
- **API (Express, Sequelize, CRUD operations)**
  - **Write routes to add new instances to each model** - The routes for adding favorites & captions are implemented in PhotoRoutes.js
  - **Write routes that returns all instances from each model** - Routes for getting all favorites & captions are implemented in PhotoRoutes.js as well 
  - **Write routes that return individual instances from each model based on their IDs** - Routes for getting a single favorite or caption by ID are implemented in there too
  - **Write routes to update instances in each model** - Routes for updating favorites & captions are implemented in it 
  - **Write routes to remove instances from each model, based on their IDs** - Routes for deleting favorites & captions are implemented here and also exist in this same file
  - **Write a route that returns one instance from a model, and all instances associated with it in a different model** - Our first route returns the favorites alongside its caption called /favorites-with-captions

## APIs Used

### 1. Unsplash API
- **API Provider:** [unsplash.com](https://unsplash.com/developers)
- **Extra Documentation:** [unsplash documentation](https://unsplash.com/documentation)
- **Description:** The Unsplash API is a modern JSON API that we use to retrieve royalty-free images based on user search.

### 2. Pexels API
- **API Provider:** [pexels.com](https://www.pexels.com/api/)
- **Extra Documentation:** [pexels documentation](https://www.pexels.com/api/documentation/?language=javascript)
- **Description:** The Pexels API enables programmatic access to the full Pexels content library and we utilize this API to obtain copyright-free videos based on user queries.

### Trying out the website
- **Setup:** Clone the backend and frontend repository, install redux/node if needed, do npm start. To use the favorites feature follow the next two steps.
- **Database Connection:** Ensure that the credentials (username, password, database name) in your Sequelize connection (db.js) match those used when setting up your PostgreSQL database. The username 'georgesucuzhanay' and password 'test1' should be replaced with the actual credentials.
- **Database Initialization:** The SQL commands in the db.sql file are used to create the database and tables. Make sure to execute these commands in PostgreSQL to set up your database before running your application.

### With the backend complete, we integrated it into our front end.
#### Back End Repository: https://github.com/George-Sucuzhanay/moodboard-backend.git
#### Front End Repository: https://github.com/Kazi27/moodboard-frontend.git
#### Deployment Link:
