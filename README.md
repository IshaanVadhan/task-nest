# TaskNest

TaskNest is a task management application that allows users to create, update, delete, view tasks, and mark them as completed using different accounts. Built using Next.js, Node.js, Express.js, and MongoDB; TaskNest provides a seamless experience for managing your tasks.

## Features

- **User Authentication**: Register and login users securely.
- **Task Management**: Create, update, delete, view tasks, and mark tasks as completed.

## Installation

To get started with TaskNest, follow these steps:

1. **Clone the Repository**

   `git clone https://github.com/IshaanVadhan/task-nest.git`

2. **Setup the Client**

   Navigate to the `task-nest-client` directory:

   ```
   cd task-nest-client
   ```

   Create a `.env` file and add the following key:

   ```
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
   ```

   Install the dependencies:

   ```
   npm install
   ```

3. **Setup the Server**

   Navigate to the `task-nest-server` directory:

   ```
   cd task-nest-server
   ```

   Create a `.env` file and add the following keys:

   ```
   MONGO_URI=mongodb://localhost:27017/tasknest
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

   Install the dependencies:

   ```
   npm install
   ```

## Running the Application

1. **Run the Client**

   Navigate to the `task-nest-client` directory and start the development server:

   ```
   npm run dev
   ```

2. **Run the Server**

   Navigate to the `task-nest-server` directory and start the server:

   ```
   node app.js
   ```

   Alternatively, use `nodemon` for automatic restarts:

   ```
   nodemon app.js
   ```

## API Endpoints

### Authentication

- **POST /api/register** - Register a new user.
- **POST /api/login** - Log in an existing user.
- **GET /api/me** - Retrieve the profile of the logged-in user.

### Tasks

- **POST /api/tasks** - Create a new task.
- **GET /api/tasks** - Retrieve all tasks for the logged-in user.
- **GET /api/tasks/:id** - Retrieve a specific task by ID.
- **PUT /api/tasks/:id** - Update a task.
- **DELETE /api/tasks/:id** - Delete a task.
- **PUT /api/tasks/:id/status** - Mark a task as completed or incomplete.

## Contact

For any questions or issues, please contact [ishaanvadhan2001@gmail.com](mailto:ishaanvadhan2001@gmail.com).
