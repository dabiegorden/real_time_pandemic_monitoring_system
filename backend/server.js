// server.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mysql = require("mysql2");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a MySQL connection using credentials from the .env file
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "pandemic_monitoring",
  port: process.env.DB_PORT || 3306,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the MySQL database:", err);
    return;
  }
  console.log("Connected to the MySQL database successfully!");
});

// Server listens on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
