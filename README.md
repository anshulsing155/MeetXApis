# MeetX - Basic Activity Booking App API

A simple REST API backend for a "Basic Activity Booking App" built with Node.js, Express.js, and MongoDB.

## Features

- User Registration & Login with JWT Authentication
- List Activities (Public Endpoint)
- Book an Activity (Authorized Users Only)
- Get User Bookings

## Tech Stack

- Backend: Node.js with Express.js
- Database: MongoDB
- Authentication: JWT Token-based auth
- Validation: Joi

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
    git clone <https://github.com/yourusername/meetx.git> cd meetx

2. Install dependencies
    npm install

3. Create a `.env` file in the root directory with the following variables:
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/meetx
    JWT_SECRET=your_jwt_secret_key
    JWT_EXPIRE=30d

4. Start the server
    npm run dev

## API Endpoints

### Authentication

- **Register User**
- URL: `POST /api/auth/register`
- Body:

 ```json
 {
   "name": "John Doe",
   "email": "john@example.com",
   "phone": "1234567890",
   "password": "password123"
 }
 ```

- **Login User**
- URL: `POST /api/auth/login`
- Body:

 ```json
 {
   "email": "john@example.com",
   "password": "password123"
 }
 ```

### Activities

- **List Activities**
- URL: `GET /api/activities`
- Public endpoint

- **Create Activity** (for testing purposes)
- URL: `POST /api/activities`
- Protected endpoint (requires authentication)
- Body:

 ```json
 {
   "title": "Cricket Match",
   "description": "T20 cricket match between India and Australia",
   "location": "Stadium XYZ",
   "dateTime": "2023-06-15T18:00:00.000Z"
 }
 ```

### Bookings

- **Book an Activity**
- URL: `POST /api/bookings`
- Protected endpoint (requires authentication)
- Body:

 ```json
 {
   "activityId": "activity_id_here"
 }
 ```

- **Get My Bookings**
- URL: `GET /api/bookings`
- Protected endpoint (requires authentication)

## Authentication

All protected endpoints require a Bearer token in the Authorization header:

## Testing

You can use the provided Postman collection to test all API endpoints.

## Deployment

This API can be deployed to platforms like Render, Vercel, or Cyclic.
