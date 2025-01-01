# Streaming-MERNStack

A full-stack streaming platform built using the MERN (MongoDB, Express, React, Node.js) stack. This project demonstrates a modern web application architecture with features for video streaming, user authentication, and dynamic content delivery.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Docker Support](#docker-support)
- [License](#license)

---

## Features
- **Video Streaming**: Stream videos seamlessly.
- **User Authentication**: Sign up, log in, and manage user sessions.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **RESTful API**: Back-end API for handling data and user actions.

---

## Technologies Used
- **Front-end**: React, CSS Modules
- **Back-end**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Containerization**: Docker (optional)

---

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) (optional)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/mqasim5171/Streaming-mernstack.git
   cd Streaming-mernstack
   ```

2. Install dependencies for both the client and server:
   ```bash
   # In the root directory
   npm install

   # Navigate to the client directory
   cd client
   npm install
   ```

3. Start the MongoDB server (if not using Docker).

4. Run the development servers:
   ```bash
   # Start the backend server
   cd ..
   npm run server

   # Start the frontend server
   cd client
   npm start
   ```

---

## Usage
1. Access the application at `http://localhost:3000`.
2. Sign up or log in to explore the platform.
3. Upload and stream videos.

---

## Folder Structure
```
Streaming-mernstack/
├── client/               # React front-end
│   ├── public/           # Static files
│   └── src/              # React components, hooks, and utilities
├── server/               # Express back-end
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   └── controllers/      # Business logic
└── Dockerfile            # Docker configuration
```

---

## Environment Variables
Create a `.env` file in the root directory and add the following:
```
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## Docker Support

### Build and Run
1. Build the Docker image:
   ```bash
   docker build -t streaming-mernstack .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 5000:5000 streaming-mernstack
   ```

---

## License
This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute to this project by submitting issues or pull requests!
