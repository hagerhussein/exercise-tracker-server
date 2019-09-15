This is the server side of an exercise tracker using the MERN stack. 
## Table of contents

- [Technologies used](#Technologies-used)
- [Goals for this project](#Goals-for-this-project)
- [Setup](#Setup)
- [API Endpoints](#API-Endpoints)

## Technologies used
- MongoDB
- Express
- Node.js
- Mongoose

## Goals for this project
The overall goal for this project was to learn the MERN stack 
## Setup
The database for this project is hosted in the cloud using MongoDB Atlas and Google Cloud Platform.
In order to run this App please ensure you have the server running as well. 
- git clone
- npm install
- npm run start
## API Endpoints
\<base url\> is http://localhost:5000 for local development 

- GET \<base url\>/users

Fetches all users from the database. 
 
- POST \<base url\>/register

Creates a new user in the database. 

- GET \<base url\>/exercises

Fetches all exercises fron the database. 

- POST \<base url\>/add

  Creates and adds a new exercise for a particular user. 
  
- GET \<base url\>/exercises/:id

 Fetches an exercise with a specified id from the database. 
 
 - DELETE \<base url\>/exercises/:id
 
 Deletes an exercise with a specified id from the database. 
 
- POST \<base url\>/exercises/update/:id

Updates an exercise with a specified id from the database. 
 


