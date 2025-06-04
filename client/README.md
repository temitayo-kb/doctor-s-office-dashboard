# Doctor's Office Dashboard

This is a simple web app for a doctor's office. It has different dashboards for Doctors, Front Desk (Nurses), and Admins. Users can sign up, log in, and access their dashboard based on their role.

## What the App Does

### Login/Signup Page:

Signup: Users enter an email, password, and choose a role (Doctor, Front Desk, or Admin) from a dropdown. The details are saved in a PostgreSQL database.

Login: Users enter their email and password. The server checks the database to find the user and their role. If correct, the user goes to their dashboard. If wrong, an error message shows.

### Dashboards:

Each role (Doctor, Front Desk, Admin) has its own dashboard with a welcome message and a logout button.

### The logout button takes the user back to the login page.

## Folder Structure

### client: Contains the front-end code (React).

### public/: Has images and static files.

### src/: Has the main React code.

### components/: Contains Navbar.js for the navigation bar.

### pages/: Contains dashboard and page files (AdminDashboard.js, DoctorDashboard.js, FrontDeskDashboard.js, Login.js, Register.js).

### App.js: Main app file that handles routing.

### App.css: Styles for the app.

### index.js: Entry point for the React app.

### index.css: Global styles.

### server: Contains the back-end code (Node.js).

config/: Contains db.js for database connection.

### models/: Contains user.js for user table setup.

### routes/: Contains auth.js for login and signup routes.

### .env: Stores environment variables (like database details).

### index.js: Main server file.

## Installation Guide

Follow these steps to set up and run the app on your computer.

### Requirements

Node.js: Install from nodejs.org. 

PostgreSQL: Install from postgresql.org.

A code editor like Visual Studio Code.

### Steps to set up the Server:

Go to the server folder: cd server

#### Install server dependencies:

npm install.
run npm install express pg bcryptjs cors dotenv jsonwebtoken on server cmd

Create a .env file in the server folder (if not already there).

Copy the following into .env and update the values:

PORT=5000
DB_TYPE=postgres
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=doctors_office
MONGO_URI=mongodb://localhost:27017/doctors_office
JWT_SECRET=your_secret_key

Replace your_postgres_username with your PostgreSQL username.

Replace your_postgres_password with your PostgreSQL password.

Replace your_secret_key with a random string (e.g., mysecretkey123).

Keep DB_TYPE=postgres as the app uses PostgreSQL.

Start the server: npm start

The server will run on http://localhost:5000.

### Set Up the Client:

Open a new terminal and go to the client folder: cd client

#### Install client dependencies:

npm install.
run npm install axios react-router-dom jwt-decode on client cmd

Start the React app: npm start

The app will open in your browser at http://localhost:3000.

### Set Up the Database:

Make sure PostgreSQL is running on your computer.

Create a database named doctors_office in PostgreSQL: createdb doctors_office

The app will automatically create the users table when you start the server.

Test the App:
Open http://localhost:3000 in your browser.

Sign up with an email, password, and role.

Log in to see the dashboard for your role.

### Files to Modify

server/.env: Update this file with your PostgreSQL username, password, and a unique JWT_SECRET. This file tells the server how to connect to the database and secure user logins.

## Why I Used These Technologies

### React:

Easy to build interactive user interfaces.

Reusable components (like Navbar.js) save time.

Fast and smooth user experience.

Great for single-page apps like this one.

### PostgreSQL:

Reliable and secure database.

Supports complex queries and data relationships.

Free and open-source.

Works well with Node.js.

### Node.js:

Fast and lightweight for building servers.

Handles user requests (login/signup) easily.

Works well with React and PostgreSQL.

Large community and many libraries (like express).

## Notes

Make sure the server is running before starting the client.

If you get errors, check the .env file for correct database details.

The app uses JWT (JSON Web Tokens) to secure user logins.

The dashboards are simple but can be expanded with more features.
