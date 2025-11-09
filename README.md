# Find Your NFL Team

A web application that helps users discover their closest NFL team based on their location. Simply enter your city and state, and the app will match you with the nearest NFL franchise.

## What We Built

This project is a full-stack web application that:
- Stores information about all 32 NFL teams in a database
- Takes user location input (city and state)
- Calculates proximity to find the closest NFL team
- Displays team information including stadium, colors, Super Bowl wins, and more
- Includes user authentication with login/logout functionality

## Technology Stack

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for storing NFL team data
- **Mongoose** - MongoDB object modeling for Node.js
- **Passport.js** - Authentication middleware

### Frontend
- **EJS (Embedded JavaScript)** - Templating engine for dynamic HTML
- **Bootstrap 3** - CSS framework for responsive design
- **Font Awesome** - Icon library

### Additional Tools
- **body-parser** - Parsing incoming request bodies
- **connect-flash** - Flash messages for user feedback

## Key Features

- **Team Database Setup**: One-time route to populate database with all 32 NFL teams
- **Location-Based Matching**: Algorithm that finds the closest team based on city/state input
- **Team Information Display**: Shows detailed information about matched teams including:
  - Team name and location
  - Stadium name
  - Team colors
  - Conference and division
  - Super Bowl championships
  - Year founded
- **User Authentication**: Secure login system with Passport.js
- **Responsive Design**: Mobile-friendly interface using Bootstrap

## What We Learned

### Database Management
- How to design and implement a MongoDB schema for storing structured data
- Setting up one-time database population routes
- Querying databases with Mongoose methods

### Routing & Request Handling
- Creating GET and POST routes in Express
- Handling form submissions and processing user input
- Debugging route path mismatches (learned the importance of exact route naming!)

### Problem-Solving
- Troubleshooting common errors:
  - "Cannot POST" errors (route path mismatches)
  - "Failed to lookup view" errors (file naming and paths)
  - "is not a function" errors (module imports and exports)
  - Database connection issues

### Full-Stack Integration
- Connecting frontend forms to backend routes
- Passing data from server to views using EJS templating
- Understanding the request-response cycle

### Best Practices
- Organizing code with separate route and model files
- Using environment-specific configurations
- Implementing user authentication and session management

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start MongoDB service

3. Start the server:
   ```bash
   node server.js
   ```

4. Set up the database (one time only):
   ```
   http://localhost:PORT/setup-nfl-teams
   ```

5. Visit the application:
   ```
   http://localhost:PORT/find-nfl-team
   ```

## Future Improvements

- Calculate actual distance using latitude/longitude coordinates (Haversine formula)
- Add team logos and colors to the results page
- Show multiple nearby teams, not just the closest one
- Add filters for conference/division preferences
- Include current team statistics and standings

---

Built as a learning project to explore full-stack web development with Node.js, Express, and MongoDB.
