
User Dashboard with MERN Stack
This project is a user dashboard built with the MERN Stack (MongoDB, Express.js, React.js, Node.js) that includes authentication and a simple API to fetch user data. The app allows users to register, log in, and view their user details, with the backend secured using JWT and password hashing.

Features
User registration and login system
Password stored securely using bcrypt for password hashing
JWT-based authentication for protected routes
Simple API integration with JSONPlaceholder to fetch user data
Frontend built with React.js and backend with Node.js/Express.js

Installation
1. Clone the repository:
git clonehttps : https://github.com/Adithyan121/Technical_round.git
2. Set up the Frontend :
Navigate to the frontend directory : cd frontend
Install the dependencies : npm install
Run the development server : npm run dev

3. Set up the Backend :
Navigate to the backend directory : cd backend
Install the dependencies : npm install
Run the backend server : npm start

4. Set up Environment Variables:
Create a .env file in the backend directory and add the following environment variables:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key
