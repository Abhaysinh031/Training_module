# Training Module App

This project is a full-stack application designed to provide an interactive training module for employees. The application includes a video library where users can watch training videos in sequence and track their progress.

## Project Structure

- **Frontend**: The frontend is built using React.js and provides a user-friendly interface for navigating through the video modules, tracking progress, and interacting with the training content.
- **Backend**: The backend is developed using Node.js and Express.js, handling video content, user progress, and communication with the MySQL database.
- **Database**: MySQL is used as the database to store video information, user progress, and other related data.

## 1. Detailed Description of the Solution

### Choice of Framework, Libraries, and Parameters

- **Frontend**:
  - **React.js**: Chosen for its component-based architecture and efficient rendering using a virtual DOM. It allows for the seamless creation of dynamic user interfaces.
  - **React Router**: Utilized for client-side routing, enabling navigation between different pages (e.g., video modules and progress dashboard).
  - **Axios**: Used for making HTTP requests to the backend API, allowing interaction with the server-side database.
  - **React Top Loading Bar**: Implemented to show a loading indicator at the top of the page, enhancing user experience during data fetching.
  - **CSS Modules**: Applied to style components locally, ensuring that styles do not conflict across the application.

- **Backend**:
  - **Node.js**: Selected for its non-blocking, event-driven architecture, ideal for building scalable network applications.
  - **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  - **MySQL2**: Chosen for its fast and stable performance, used to interact with the MySQL database.
  - **dotenv**: Used to manage environment variables, ensuring that sensitive data (e.g., database credentials) is not exposed in the source code.
  - **Body-Parser**: Middleware to parse incoming request bodies in a middleware before handling them.

### Application Parameters

- **Database Configuration**: Configured to connect to a MySQL database using environment variables for database credentials.
- **Video Modules**: Ordered and retrieved from the database based on their sequence, ensuring users follow the intended learning path.
- **Progress Tracking**: Implemented to track user progress through the video modules, storing completion status in the database.

# Setup Instructions
## Prerequisites
Make sure you have the following installed on your machine:

- **Node.js**
- **MySQL**
- **Git**

## Clone the Repository

``` bash
git clone https://github.com/Abhaysinh031/training_module.git
cd training_module
```
## Backend Setup
1. Navigate to the backend directory:
```bash
  cd training-module-backend
```

2. Install the necessary dependencies:
```bash
npm install
```
3. Create a .env file in the training-module-backend directory with the following content:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=training_module
```


5. Start the backend server:
```bash
npm start
```



## Frontend Setup
1. Navigate to the frontend directory:
```bash
cd ../training-module-frontend
```

2. Install the necessary dependencies:
```bash
npm install
```

3. Start the frontend server:
```bash
npm start
```

## Database Setup

1. Create a MySQL database:
```bash
CREATE DATABASE training_module;
```

2. Import the database schema and data:
```bash
mysql -u root -p training_module < path/to/your/sql/file.sql
```

# Usage
1. Access the application in your browser at http://localhost:3000.
2. The home page will display the video library, where you can start watching the training modules.
3. Navigate through the modules using the "Next Module" button.
4. Your progress is automatically saved and can be resumed later.


## Video Demonstration

You can watch a demonstration of the application here:
[Watch Demo Video] ( https://drive.google.com/file/d/1y7IXtQtGHzVz8vQUNKwhVZCN0WUR3_v-/view?usp=sharing ) 
