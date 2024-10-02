# Authentication Interface [Live Demo](https://authentication-interface.onrender.com/)

Welcome to the Authentication Interface repository! This project provides a comprehensive solution for user authentication, featuring key functionalities essential for a seamless user experience.

## Features

- **User Registration and Login:**
  - **Signup Page UI**: A user-friendly interface for new users to create an account.
  - **Login Page UI**: A straightforward interface for existing users to access their accounts.
  - **Login Endpoint**: Securely authenticate users with credentials.

- **Email Verification:**
  - **Sending Verify Account Email**: Automatically sends a verification email upon signup.
  - **Verify Email Endpoint**: Validates user email addresses to enhance security.
  - **Email Verification Page UI**: A clean interface for users to confirm their email.

- **Password Management:**
  - **Forgot Password Endpoint**: Allows users to request a password reset.
  - **Reset Password Endpoint**: Facilitates secure password updates for users.
  
- **Authentication Checks:**
  - **Check Auth Endpoint**: Verifies if a user is currently logged in.
  
- **User Logout:**
  - **Logout Endpoint**: Enables users to safely log out of their accounts.

## Implementation Highlights

- **Welcome Email Template**: Customizable email template for welcoming new users.
- **Robust API Endpoints**: Secure and efficient endpoints for authentication processes.
- **Responsive UI**: Intuitive interfaces designed for both desktop and mobile users.

## Getting Started

To get started with this project, follow the instructions below:

### Installation

### Setup .env file

```bash
MONGO_URI=your_mongo_uri
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development

MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=send.api.mailtrap.io

CLIENT_URL= http://localhost:5173
```

### Run this app locally

```shell
npm run build
```

### Start the app

```shell
npm run start
```

## API Endpoints

Here are some of the key API endpoints provided in this project:

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login an existing user
- `POST /api/auth/verify-email` - Verify user email address
- `POST /api/auth/forgot-password` - Request a password reset
- `POST /api/auth/reset-password/:token` - Update user password
- `GET /api/auth/check-auth` - Check if user is authenticated
- `POST /api/auth/logout` - Logout the user

Happy coding! 🚀
