# wgu-c868-back-end
WGU C868 Software Development Capstone - Back End (REST API)

---

* University: Western Governors University (WGU)
* Degree: Bachelor of Science in Software Development
* Class: C868 Software Development Capstone
* Date: 01/04/2024
* Project Type: Individual Project

---

# Overview

This project was created as a class assignment for WGU, C868. This CRUD Restaurant Management Application was meant to be created for my capstone project.

**Project Prompt:** The prompt for this capstone project was for the most part open ended and just meant to develop an application and deploy it.

This repository contains the code for the Back End REST API that was created using NodeJS + ExpressJS.

---

## Front End

The Front End was created in a separate repository

Link-> https://github.com/MuhammadA-C/wgu-c868-front-end

---

## Project Requirements

The minimum requirements for the capstone project were:

* Build a mobile, desktop or web application
* Code including inheritance, polymorphism, and encapsulation
* Search functionality with multiple row results
* Database to securely add, modify, and delete data
* Ability to generate reports with multiple columns & rows
* Exception controls
* Validation functionality
* Deploy application

---

## Database Design

![Screenshot of the database schema](https://github.com/MuhammadA-C/wgu-c868-back-end/blob/main/pictures/WGU-C868-Database-ERD%20copy.png)
*Screenshot of the database schema*

---

## REST API Design

### Menu Items Endpoints:
**GET HTTP:**
* Get all menu items -> ```GET /api/v1/menu-items```
  * Success (yes, data) returns 200 HTTP status code 
  * Success (no data) returns 204 HTTP status code
  * Error reutrns 500 HTTP status code
  * Data returned: Returned back a list of items
* Get menu item by id -> ```GET /api/v1/menu-items/:id```
  * Success returns 200 HTTP status code 
  * Error reutrns 500 HTTP status code
  * Data returned: Returns back the item matching the id

**POST HTTP:**
* Create a menu item -> ```POST /api/v1/menu-items```
  * Success returns 201 HTTP status code 
  * Error reutrns 500 HTTP status code
  * Input values: You can only supply values for name, description, picture, and price
  * Data returned: Returns back the created item

**PATCH HTTP:**
* Update menu item by id -> ```PATCH /api/v1/menu-items/:id```
  * Success returns 200 HTTP status code 
  * Error reutrns 500 HTTP status code
  * Input values: You can only supply values for name, description, picture, and price
  * Data returned: Returns back the updated item

**DELETE HTTP:**
* Delete menu item by id -> ```DELETE /api/v1/menu-items/:id```
  * Success returns 204 HTTP status code 
  * Error reutrns 500 HTTP status code
  * Data returned: No data returned


### Ordered Items Endpoints:
**GET HTTP:**
* Get all ordered items -> ```GET /api/v1/ordered-items```
  * Success (yes, data) returns 200 HTTP status code 
  * Success (no data) returns 204 HTTP status code
  * Error reutrns 500 HTTP status code
* Get ordered item by id -> ```GET /api/v1/ordered-items/:id```

**POST HTTP:**
* Create ordered item -> ```POST /api/v1/ordered-items```

**PATCH HTTP:**
* Update ordered item by id -> ```PATCH /api/v1/ordered-items/:id```

**DELETE HTTP:**
* Delete ordered item by id -> ```DELETE /api/v1/ordered-items/:id```


### Order IDs Endpoints:
**GET HTTP:**
* Get all order ids -> ```GET /api/v1/order-ids```
  * Success (yes, data) returns 200 HTTP status code 
  * Success (no data) returns 204 HTTP status code
  * Error reutrns 500 HTTP status code
* Get order id by id -> ```GET /api/v1/order-ids/:id```
* Get all ordered items by order id -> ```GET /api/v1/order-ids/:id/ordered-items```

**POST HTTP:**
* Create order id -> ```POST /api/v1/order-ids```

**PATCH HTTP:**
* Update order id by id -> ```PATCH /api/v1/order-ids/:id```

**DELETE HTTP:**
* Delete order id by id -> ```GET /api/v1/order-ids/:id```


----

## Future Improvements

[NEED TO UPDATE]

---

## Tools Used

* Back End: JavaScript, Node.JS, Express.js
* Database: SQL, MySQL, and MySQL Workbench, Amazon RDS MySQL
* Design: Lucidchart
* Version Control: Git & GitHub
* API Testing: Postman

---

## Software Packages

* MySQL Community Server v8.0.35 (macOS 13 ARM, 64-bit)
* MySQL Workbench v8.0.34 (macOS ARM, 64-bit)
* Visual Studio Code v1.81.1
* Postman v10.21.4
* NodeJS v20.10.0

NPM Packages:
* dotenv
* express
* mysql2
* nodemon
