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

**Project Prompt:** The prompt for this capstone project was open ended and could develop any application to deploy it.

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

### Note

Originally, I had the menu_item_id as a foreign key for the OrderedItems table, but then I had to remove it after realizing that the foreign key constraint would cause issues with not allowing 
the user to delete a menu item if a customer ordered the item because the menu_item_id foreign key is being used. 

So, instead I switched to using the menu_item_name and not making it a foreign key for the OrderedItems table.

---

## REST API Design

### Menu Items Endpoints:
**GET HTTP:**
* Get all menu items endpoint -> ```GET /api/v1/menu-items```
  * Success (yes, data) returns a 200 HTTP status code 
  * Success (no data) returns a 204 HTTP status code
  * Error returns a 500 HTTP status code
  * Data returned: Returned back a list of items
* Get menu item by id endpoint -> ```GET /api/v1/menu-items/:id```
  * Success returns a 200 HTTP status code 
  * Error returns a 500 HTTP status code
  * Data returned: Returns back the item matching the id

**POST HTTP:**
* Create a menu item endpoint -> ```POST /api/v1/menu-items```
  * Success returns a 201 HTTP status code 
  * Error returns a 500 HTTP status code
  * Input values: You can only supply values for name, description, picture, and price
  * Data returned: Returns back the created item

**PATCH HTTP:**
* Update menu item by id endpoint -> ```PATCH /api/v1/menu-items/:id```
  * Success returns a 200 HTTP status code 
  * Error returns a 500 HTTP status code
  * Input values: You can only supply values for name, description, picture, and price
  * Data returned: Returns back the updated item

**DELETE HTTP:**
* Delete menu item by id endpoint -> ```DELETE /api/v1/menu-items/:id```
  * Success returns a 204 HTTP status code 
  * Error returns a 500 HTTP status code
  * Data returned: No data returned


### Ordered Items Endpoints:
**GET HTTP:**
* Get all ordered items endpoint -> ```GET /api/v1/ordered-items```
  * Success (yes, data) returns a 200 HTTP status code 
  * Success (no data) returns a 204 HTTP status code
  * Error returns a 500 HTTP status code
  * Data returned: Returns back a list of items 
* Get ordered item by id endpoint -> ```GET /api/v1/ordered-items/:id```
  * Success returns a 200 HTTP status code
  * Error returns a 500 HTTP status code
  * Data returned: Returns back the item matching the id

**POST HTTP:**
* Create ordered item endpoint -> ```POST /api/v1/ordered-items```
  * Success returns a 201 HTTP status code
  * Error returns a 500 HTTP status code
  * Input values: You can only supply values for the menu item name, order id, price, and quantity
  * Data returned: Returns back the created item

**PATCH HTTP:**
* Update ordered item by id endpoint -> ```PATCH /api/v1/ordered-items/:id```
  * Success returns a 200 HTTP status code
  * Error returns a 500 HTTP status code
  * Input values: You can only supply values for the price and quantity
  * Data returned: Returns back the updated item

**DELETE HTTP:**
* Delete ordered item by id endpoint -> ```DELETE /api/v1/ordered-items/:id```
  * Success returns a 204 HTTP status code
  * Error returns a 500 HTTP status code
  * Data returned: No data returned


### Order IDs Endpoints:
**GET HTTP:**
* Get all order ids endpoint -> ```GET /api/v1/order-ids```
  * Success (yes, data) returns a 200 HTTP status code 
  * Success (no data) returns a 204 HTTP status code
  * Error returns a 500 HTTP status code
  * Data returned: Returns back a list of items 
* Get order id by id endpoint -> ```GET /api/v1/order-ids/:id```
  * Success returns a 200 HTTP status code 
  * Error returns a 500 HTTP status code
  * Data returned: Returns back the item matching the id
* Get all ordered items by order id endpoint -> ```GET /api/v1/order-ids/:id/ordered-items```
  * Success (yes, data) returns a 200 HTTP status code
  * Success (no, data) returns a 204 HTTP status code
  * Data returned: Returns back a list of all of the items for the order id

**POST HTTP:**
* Create order id endpoint -> ```POST /api/v1/order-ids```
  * Success returns a 201 HTTP status code
  * Error returns a 500 HTTP status code
  * Input values: You can only supply values for the order id, customer id, order status, order placed date, and order completed date
  * Data returned: Returns back the created item

**PATCH HTTP:**
* Update order id by id endpoint -> ```PATCH /api/v1/order-ids/:id```
  * Success returns a 200 HTTP status code
  * Error returns a 500 HTTP status code
  * Input values: You can only supply values for the order status and order completed date
  * Data returned: Returns back the updated item

**DELETE HTTP:**
* Delete order id by id endpoint -> ```DELETE /api/v1/order-ids/:id```
  * Success returns a 204 HTTP status code
  * Error returns a 500 HTTP status code
  * Data returned: No data returned

----

## API output examples for GET requests

### Endpoint: GET /api/v1/order-ids
```
{
    "status": "success",
    "results": 2,
    "data": [
        {
            "order_id": "151-289225-7530",
            "customer_id": 1,
            "order_status": "Placed",
            "order_placed_date": "2023-12-31T01:49:56.925Z",
            "order_completed_date": null
        },
        {
            "order_id": "172-141678-5227",
            "customer_id": 1,
            "order_status": "Placed",
            "order_placed_date": "2023-12-31T01:35:41.865Z",
            "order_completed_date": null
        }
    ]
}
```
*Code example above shows the API result for getting all order ids*

### Endpoint: GET /api/v1/order-ids/:id

```
{
    "status": "success",
    "data": [
        {
            "order_id": "151-289225-7530",
            "customer_id": 1,
            "order_status": "Placed",
            "order_placed_date": "2023-12-31T01:49:56.925Z",
            "order_completed_date": null
        }
    ]
}
```
*Code example above shows the API result returned for getting an order id by id*

---

## Future Improvements

If I were to work on this capstone project more then I would:
* Look into using MongoDB for the database instead of MySQL

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
