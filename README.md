## Description

This project is a web application that allows users to 'register' an account, upload images, and view them on the screen. It uses `useContext` in React to manage the state of user registration and image uploads across different components, making it easy to handle global state and ensure smooth user interactions.

Key features:

- **User Registration**: Users can create an account by providing their details (e.g., username, email, and password).
- **Image Upload**: After logging in, users can upload images and view them on the screen.
- **Global State Management**: The app utilizes `useContext` to manage and share the state of the user’s session and uploaded images between different components without prop drilling.

The app is built using:

- **Frontend**: HTML, CSS, JavaScript, React, `useContext`

## Functionality

- **User Registration**: Users can create a new account by providing their name, email, and password. After registration, users gain access to their personal dashboard.

- **Image Upload**: Once logged in, users can upload images to the server or local application state. The uploaded image is automatically displayed on the screen.

- **Image Viewing**: Users can view their uploaded images, which are stored in the global state managed by `useContext`.

- **Global State Management**: The app utilizes `useContext` to store and pass user data and images between components without manual prop drilling. This ensures efficient state management throughout the application.

## Running the App Locally

To run the application locally, follow these steps:

1. Instaall the required dependencies by running the following command in your terminal::
   ```bash
   npm install
   ```
2. Start the development server by running the following command:
   ```bash
   npm run dev
   ```
