This project is a user authentication and profile management system where:

New users can sign up.

Existing users can log in.

After logging in, users are navigated to the website "Nicklefox," where they can:

View their profile.

Update their information.

Features

User Registration: New users can create an account by providing necessary details.

User Login: Registered users can log in using their credentials.

Profile Management: Users can view and update their profile information on the "Nicklefox" website.

Technologies Used

Frontend

ReactJS: For building the user interface.

Tailwind CSS: For styling the application.

Backend

Node.js: JavaScript runtime for server-side development.

Express.js: Framework for building the API.

MongoDB: NoSQL database for storing user data.

Installation and Setup

Prerequisites

Node.js and npm installed on your system.

MongoDB installed and running locally or access to a cloud MongoDB instance.

Steps to Run the Application

Clone the repository:

git clone https://github.com/lucky-codes/NickleFox.git

Set up the backend:

cd backend
npm install



Start the backend server:

npm run dev

Set up the frontend:

npm install

Start the development server:

npm run dev

Access the application:

Frontend: Open http://localhost:3000 in your browser.

Backend API: Runs on http://localhost:5000.

Folder Structure

project-folder
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── .env
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   └── index.css
└── README.md

API Endpoints

User Authentication

POST /signup: Register a new user.

POST /login: Authenticate a user and return a token.

User Profile

GET /profile/view: Fetch user profile (requires authentication).

patch /profile/edit: Update user information (requires authentication).


