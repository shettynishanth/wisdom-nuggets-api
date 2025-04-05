-- Create the database
CREATE DATABASE IF NOT EXISTS wisdom_nuggets_db;
USE wisdom_nuggets_db;

-- Create the nuggets table
CREATE TABLE IF NOT EXISTS nuggets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

-- Insert sample data into the table
INSERT INTO nuggets (text, author) VALUES 
("The journey of a thousand miles begins with a single step.", "Lao Tzu"),
("Awareness is the greatest agent for change.", "Eckhart Tolle"),
("What you seek is seeking you.", "Rumi");
