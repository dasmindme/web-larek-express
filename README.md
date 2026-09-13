# Web Larek — Full-Stack E-Commerce Application

A full-stack e-commerce application with a React frontend and Node.js backend.

The application provides a product catalog, shopping cart, order creation, and API integration. The project also includes authentication-related functionality, database interaction, Docker configuration, and API testing with Postman.

> **Project type:** Educational / portfolio project
> **Focus:** React, Node.js, REST API, full-stack development

## Key Features

* Product catalog
* Product details
* Shopping cart
* Order creation
* Form validation
* REST API integration
* Backend API built with Node.js
* Database integration
* Dockerized application
* API testing with Postman

## 🛠 Tech Stack

### Frontend

* **React**
* **TypeScript / JavaScript**
* **HTML**
* **CSS**

### Backend

* **Node.js**
* **Express**
* **REST API**

### Tools & Infrastructure

* **Docker**
* **Docker Compose**
* **Nginx**
* **Postman**
* **GitHub Actions**
* **Git**

## Application Structure

The project is organized into separate frontend and backend applications:

```text
web-larek-express/
├── frontend/
├── backend/
├── nginx/
├── .github/
├── docker-compose.yml
└── README.md
```

The frontend communicates with the backend through a REST API.

## REST API

The backend provides API endpoints for working with application data and user actions.

The API can be tested using the included Postman collection.

This makes it possible to test backend functionality independently from the frontend.

## E-Commerce Flow

The main user flow is:

```text
Browse products
      ↓
Open product details
      ↓
Add product to cart
      ↓
Review cart
      ↓
Submit order
      ↓
Receive order result
```

The frontend manages the user interface while the backend handles API requests and application logic.

## Docker

The application can be run using Docker Compose.

The project separates the main application services into containers and uses Nginx as part of the application infrastructure.

Example:

```bash
docker compose up --build
```

## API Testing

The project includes a Postman collection for testing the backend API.

This allows endpoints to be checked independently of the React frontend.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/dasmindme/web-larek-express.git
cd web-larek-express
```

### 2. Install dependencies

For the backend:

```bash
cd backend
npm install
```

For the frontend:

```bash
cd ../frontend
npm install
```

### 3. Start the application

Follow the project configuration or use Docker Compose:

```bash
docker compose up --build
```

## What This Project Demonstrates

This project demonstrates practical experience with:

* React frontend development
* Node.js backend development
* Express
* REST API integration
* e-commerce application logic
* frontend/backend communication
* Docker
* Nginx
* Postman API testing
* Git and GitHub workflows

## About

This project is part of my full-stack development portfolio and demonstrates my ability to work across both frontend and backend layers of a web application.
