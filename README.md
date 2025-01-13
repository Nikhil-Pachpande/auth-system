# Auth System
This project provides a complete authentication solution with a front-end (HTML, CSS, JS) and a back-end (Node.js, Express, MongoDB). The component includes modules for user signup, login, and JWT-based authentication, making it easy to integrate into other web applications.

## Features
- Secure login and signup functionality.
- Token-based user authentication for secure communication.

## Technologies Used
- HTML, CSS, JS for the front-end, and Node.js, Express, MongoDB for the back-end.

# Installation & Usage
#### 1. Clone this repository and install dependencies:
- Frontend
```bash
cd client
npm install
```
- Backend
```bash
cd server
npm install
```
#### 2. Create a .env file (remove the existing environment.js, if not needed) in the server directory and set the following environment variables:
```bash
MONGO_URI= "Your MongoDB URI"
JWT_SECRET= "Your JWT Key"
```
#### 3. Start your application servers
- Frontend
```bash
cd client
npm start
```
- Backend
```bash
cd client
npm start
```
#### 4. Navigate to ```http://localhost:3000``` or your respective port to access the auth component.

# Screenshot
<img src="https://github.com/Nikhil-Pachpande/login-component/blob/57d384f8ed152af71708d58dcdee6f2623121873/client/assets/screennshots/signup-login.png" width="480" length="640">

