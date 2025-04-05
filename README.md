# Wisdom Nuggets API

This is a RESTful API for managing and retrieving inspirational wisdom nuggets. It allows users to fetch all nuggets, get a random one, and add new ones. Built with **Node.js**, **Express**, and **MySQL**, and designed for the **SuperMorpheus Backend Intern Assignment**.

---

## Tech Stack

- **Backend Language**: Node.js
- **Framework**: Express.js
- **Database**: MySQL (via XAMPP)


---

## Installation & Setup (Run Locally)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/wisdom-nuggets-api.git
   cd wisdom-nuggets-api

2. **Install Dependencies
     ```bash
     npm install
3. Set Up the MySQL Database
   Open XAMPP and start Apache and MySQL.
   Go to http://localhost/phpmyadmin.
   Create a new database (e.g., wisdom_nuggets_db).
   Run the SQL script (if you have one) to create the required table, e.g.:
    ```bash
    CREATE TABLE nuggets
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    text TEXT NOT NULL, author VARCHAR(255) );
  
4. Configure Environment Variables
   Create a .env file in the root of the project:
  PORT=3000
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=
  DB_NAME=wisdom_nuggets_db

6. Run the Server
   ```bash
    npm start

Server is Running
The backend API will be available at:
http://localhost:3000

Language & Framework:


Database Setup & Configuration
Database Schema
1. Create the database in MySQL:
     ```bash
     CREATE DATABASE wisdom_nuggets;
     
2. Create a table
    ```bash
    CREATE TABLE nuggets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text TEXT NOT NULL,
    author VARCHAR(255) NOT NULL
    );

** API Endpoints
Method	Endpoint	Description
GET	/nuggets	Get all wisdom nuggets
GET	/nuggets/random	Get a random wisdom nugget
POST	/nuggets	Add a new wisdom nugget





