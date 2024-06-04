Express js & REST API

# instalation package
npm init
npm install --save pug
npm install --save express 
npm install express --save
npm install express-generator -g
express be-klinik 
npm install express-session
npm i body-parser req-flash ejs
npm i crypto-js
npm i jsonwebtoken
npm i assert
npm install debug
npm install express body-parser mongoose bcryptjs jsonwebtoken express-validator



# how to use
git clone this repo
npm i

# how to run
node app.js

# database schema
CREATE DATABASE IF NOT EXISTS hospital_db;

USE hospital_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('doctor', 'admin', 'patient') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
