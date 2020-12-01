DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  
    id INT AUTO_INCRIMENT PRIMARY KEY,
    burger_name VARCHAR(15),
    devoured bit
);
