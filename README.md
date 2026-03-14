# FullStackDevelopment_Internship

## Overview

This repository contains **three full-stack web applications** developed as part of the **Full Stack Development Internship**.

Each task demonstrates different aspects of full-stack development, including **frontend design, backend APIs, authentication, and data management**.

### Projects Included

* **Task 1 – Simple E-Commerce Store**
* **Task 2 – Mini Social Media Platform**
* **Task 3 – Project Management Tool**

These applications were developed using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB/JSON database systems**.

---

# Technologies Used

## Frontend

* HTML
* CSS
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MongoDB (Task 1)
* JSON-based database (Task 2 & Task 3)

---

# Task 1 – Simple E-Commerce Store

## Project Overview

The **Simple E-Commerce Store** is a web application that allows users to browse products, view product details, add items to a shopping cart, register/login, and place orders.

The system follows a **full-stack architecture** including frontend UI, backend APIs, and MongoDB database.

---

## Features Implemented

### Product Listing

Users can browse products available in the store.

### Product Details

Users can click **View Details** to see detailed information about a product.

### Shopping Cart

Users can add products to a shopping cart and review their selected items.

### User Registration

New users can create an account.

### User Login

Existing users can log in using their email and password.

### Order Processing

Users can place orders and the order data is stored in the database.

---

## Project Structure

```
Task1-Ecommerce
│
├── models
│   ├── Product.js
│   ├── User.js
│   └── Order.js
│
├── routes
│   ├── productRoutes.js
│   ├── userRoutes.js
│   └── orderRoutes.js
│
├── public
│   ├── index.html
│   ├── product.html
│   ├── cart.html
│   ├── register.html
│   ├── login.html
│   ├── style.css
│   ├── script.js
│   ├── product.js
│   ├── cart.js
│   ├── register.js
│   └── login.js
│
├── server.js
└── package.json
```

---

## API Endpoints

### Products

```
GET /api/products
```

### Register User

```
POST /api/users/register
```

### Login User

```
POST /api/users/login
```

### Place Order

```
POST /api/orders
```

---

# Task 2 – Mini Social Media Platform

## Project Overview

The **Mini Social Media Platform** is a web application that allows users to create accounts, share posts, interact with other users through likes and comments, and follow other users.

The application demonstrates basic **social networking features using a full-stack architecture**.

---

## Features Implemented

### User Registration & Login

Users can register and log into their accounts.

### Create Posts

Users can create text posts.

### Social Feed

All posts are displayed in a feed.

### Like System

Users can like posts.

### Comment System

Users can comment on posts.

### Follow System

Users can follow other users.

---

## Project Structure

```
Task2-SocialMedia
│
├── public
│   ├── register.html
│   ├── login.html
│   ├── post.html
│   ├── feed.html
│   ├── script.js
│   └── style.css
│
├── database
│   └── data.json
│
└── server.js
```

---

## API Endpoints

### Register User

```
POST /register
```

### Login User

```
POST /login
```

### Create Post

```
POST /post
```

### Like Post

```
POST /like
```

### Comment on Post

```
POST /comment
```

### Follow User

```
POST /follow
```

---

# Task 3 – Project Management Tool

## Project Overview

The **Project Management Tool** is a collaborative web application similar to tools like **Trello or Asana**.

It allows users to create projects, manage tasks, assign work to team members, update task status, and communicate within tasks through comments.

---

## Features Implemented

### User Authentication

Users can register and log in to the system.

### Project Boards

Users can create project boards to organize tasks.

### Task Management

Tasks can be created inside projects.

### Task Assignment

Tasks can be assigned to users.

### Task Status Updates

Tasks can be updated through different stages:

* Pending
* In Progress
* Completed

### Task Comments

Users can comment on tasks to communicate and collaborate.

---

## Project Structure

```
Task3-ProjectManagement
│
├── public
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   ├── project.html
│   ├── script.js
│   └── style.css
│
├── database
│   └── data.json
│
└── server.js
```

---

## API Endpoints

### Register User

```
POST /register
```

### Login User

```
POST /login
```

### Create Project

```
POST /project
```

### Get Projects

```
GET /projects
```

### Create Task

```
POST /task
```

### Update Task Status

```
POST /updateTask
```

### Add Comment

```
POST /comment
```

---

# How to Run the Projects

## Step 1 – Install Dependencies

```
npm install
```

## Step 2 – Start the Server

```
node server.js
```

## Step 3 – Open the Application

```
http://localhost:3000
```

or

```
http://localhost:5000
```

depending on the project configuration.

---

# Future Improvements

Some possible improvements include:

* Add image uploads for posts and products
* Improve UI design and responsiveness
* Add JWT-based authentication
* Implement real-time updates using WebSockets
* Add drag-and-drop task boards
* Integrate payment systems for the e-commerce application

---

# Author

**Full Stack Development Internship Projects**

* Task 1 – Simple E-Commerce Store
* Task 2 – Mini Social Media Platform
* Task 3 – Project Management Tool
