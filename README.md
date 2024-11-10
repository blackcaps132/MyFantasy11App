# **MyFantasy11App**

## **Overview**

A full-stack web application designed to manage sports contests efficiently. Users can view sports and related contests, while administrators can add and manage contests.

## **Features**

- **User functionalities:**
  - View available sports.
  - Browse contests for a selected sport.
- **Admin functionalities:**
  - Add new contests.
  - Manage contests (CRUD operations).

## **Tech Stack**

- **Frontend:** React, Reactstrap, Bootstrap
- **Backend:** Spring Boot, Java
- **Database:** MySQL
- **API:** RESTful services

## **Database Design**

The project uses a relational database design. Key tables:

- `Sports`: Contains details of available sports.
- `Contests`: Stores contest information, including foreign keys for sport IDs.
- `Players`: Manages players, categorized by roles (batter, bowler, etc.) and teams (India, Australia, etc.).

## **Setup Instructions**

### **Prerequisites**

- Node.js (for React)
- Java (for Spring Boot)
- MySQL (version 8.0 or compatible)

### **Frontend Setup**

1. Navigate to the `frontend` directory.
   ```bash
   cd /path/to/your/project/frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

   This will install all the necessary libraries required for the React app to run.

3. Run the React app:
   ```bash
   npm start
   ```
   This will start the React development server, and you can view the app in your browser at `http://localhost:3000`.

### **Backend Setup**

1. Navigate to the `backend` directory:
   ```bash
   cd /path/to/your/project/backend
   ```
2. Configure the `application.properties` file for MySQL:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```
3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

### **Database Setup**

1. Import the provided SQL scripts to set up the database schema and initial data.
2. Ensure the database connection matches the backend configuration.

## **API Endpoints**

- **Sports:**
  - `GET /Sports/Show` – Fetch all sports.
- **Contests:**
  - `GET /Admin/Contests/Show/{sportId}` – Fetch contests by sport ID.
  - Other CRUD endpoints for managing contests.

## **Future Enhancements**

- Add user authentication and authorization.
- Implement more advanced filtering for contests.
- Improve the UI for mobile responsiveness.
