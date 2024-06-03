# Full-Stack Web Application

This repository contains a full-stack web application built with Spring Boot for the backend and React with Tailwind CSS for the frontend.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Backend:** Spring Boot, MongoDB
- **Frontend:** React, Tailwind CSS
- RESTful API for movie data
- Responsive user interface
- Movie reviews

## Installation

### Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/my-fullstack-app.git
    cd my-fullstack-app/backend
    ```

2. **Configure environment variables:**

    Create a `.env` file in the `backend` directory with the following content:

    ```dotenv
    MONGO_DATABASE=springFullStackWebApp
    MONGO_USER=sahanchandrasena462
    MONGO_PASSWORD=6bKY8j0TRg1m4pKA
    MONGO_CLUSTER=cluster0.8azzq2q.mongodb.net
    ```

3. **Build and run the backend:**

    ```bash
    ./mvnw spring-boot:run
    ```

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure Tailwind CSS:**

    Create the `tailwind.config.js` file if it doesn't exist:

    ```bash
    npx tailwindcss init -p
    ```

    Edit `tailwind.config.js` to include your template paths:

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Add your paths here
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

4. **Start the frontend development server:**

    ```bash
    npm start
    ```

## Usage

- Access the backend API at `http://localhost:8080`.
- Access the frontend at `http://localhost:3000`.

## API Endpoints

- `GET /api/movies` - Get all movies
- `GET /api/movies/{id}` - Get a movie by ID
- `POST /api/movies` - Add a new movie
- `PUT /api/movies/{id}` - Update a movie
- `DELETE /api/movies/{id}` - Delete a movie

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
