# Find Your NFL Team

A web application that helps users discover their closest NFL team based on their location. Simply enter your city and state, and the app will match you with the nearest NFL franchise.

![5B802207-DD09-49B2-B4D1-E4F92DA27D99](https://github.com/user-attachments/assets/96f7d7b2-feb3-4b7a-abf4-6c9a51913bcf)

[check out the magic](https://your-nfl-team.onrender.com/)

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

This project involved designing and implementing a MongoDB schema with Mongoose, creating Express GET and POST routes for form handling, and connecting frontend forms to backend logic using EJS templating. Key challenges included debugging route path mismatches that caused "Cannot POST" errors, resolving view lookup and module import issues, and troubleshooting database connection problems. The experience reinforced best practices like organizing code into separate route and model files, using environment-specific configurations, implementing authentication and session management, and understanding the complete request-response cycle in full-stack development.

## Future Improvements

- Calculate actual distance using latitude/longitude coordinates (Haversine formula)
- Add team logos and colors to the results page
- Show multiple nearby teams, not just the closest one
- Add filters for conference/division preferences
- Include current team statistics and standings

