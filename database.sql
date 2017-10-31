DROP DATABASE IF EXISTS database;
CREATE DATABASE database;

\c database;

CREATE TABLE customers (
	ID SERIAL PRIMARY KEY,
	first_name VARCHAR,
	last_name VARCHAR,
	company VARCHAR,
	city VARCHAR,
	state VARCHAR,
	postalcode VARCHAR
);

CREATE TABLE quotes (
	ID SERIAL PRIMARY KEY,
	customer INT,
	start_date DATE,
	end_date DATE
);

INSERT INTO customers (first_name, last_name, company, city, state, postalcode)
	VALUES ('Karan', 'Singh', 'thiscompany', 'Toronto', 'ON', 'LR5P6K');

INSERT INTO customers (first_name, last_name, company, city, state, postalcode)
	VALUES ('Karl', 'Smith', 'thatcompany', 'Toronto', 'ON', 'LR5P6K');



