# User Dashboard with MERN Stack

This project is a user dashboard built with the MERN Stack (MongoDB, Express.js, React.js, Node.js) that includes authentication and a simple API to fetch user data. The app allows users to register, log in, and view the users details, with the backend secured using JWT and password hashing.

## Features

- User registration and login system
- Password stored securely using bcrypt for password hashing
- JWT-based authentication for protected routes
- Simple API integration with JSONPlaceholder to fetch user data
- Frontend built with React.js and backend with Node.js/Express.js

## Installation

### Clone the Repository
```sh
git clone https://github.com/Adithyan121/Technical_round.git
```

### Set Up the Frontend
```sh
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

### Set Up the Backend
```sh
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Run the backend server
npm start
```

### Set Up Environment Variables
Create a `.env` file in the backend directory and add the following environment variables:

```
PORT=5000
MONGO_URI= Mongo_DB_URL
JWT_SECRET= your_secret_key 
```

