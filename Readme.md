# MERN Movie Library

## Features
1. User Authentication (Sign In/Sign Up).
2. Search for movies using the OMDB API and view movie details.
3. Create and manage movie lists (similar to YouTube playlists).
4. Lists can be public or private.
5. View all movie lists created by the user on the home page.

## Tech Stack
- MongoDB
- Express.js
- React.js
- Node.js
- Tailwind CSS

## Installation

### Backend
1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `backend` directory and add the following:
    ```
    MONGO_URI=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret>
    OMDB_API_KEY=<Your OMDB API Key>
    ```
4. Start the server:
    ```bash
    npm run dev
    ```

### Frontend
1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `frontend` directory and add the following:
    ```
    VITE_APP_API_URL=http://localhost:5000
    ```
4. Start the frontend server:
    ```bash
    npm run dev
    ```

## Usage
1. Open your browser and navigate to `http://localhost:5173`.
2. Sign up for an account and log in.
3. Use the search feature to find movies and create your own movie lists.

## License
This project is licensed under the MIT License.
