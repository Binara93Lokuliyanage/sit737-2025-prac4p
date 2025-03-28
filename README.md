# Calculator Microservice

## Overview
This microservice is a simple calculator API built using Node.js and Express. It supports four operations: addition, subtraction, multiplication, and division. The service accepts requests via POST and returns JSON responses. Logging is implemented using Winston for debugging and monitoring purposes.

## Features
- Perform basic arithmetic operations (addition, subtraction, multiplication, division).
- Handles input validation and error responses.
- Logs requests and responses using Winston.
- Outputs logs to both console and log files (`logs/error.log` and `logs/combined.log`).

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Binara93Lokuliyanage/sit737-2025-prac4p.git
   cd sit737-2025-prac4p
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Winston for logging:
   ```sh
   npm install winston
   ```

## Project Structure
```
├── logs/                  # Log files directory
│   ├── error.log          # Logs errors
│   ├── combined.log       # Logs all operations
├── server.js              # Main server file with endpoints and logging
├── package.json           # Project dependencies and metadata
├── README.md              # Documentation file
```

## API Endpoints
The API exposes four endpoints for arithmetic operations:

### 1. Addition
**Endpoint:** `POST /add`
**Request Body:**
```json
{
  "num1": 10,
  "num2": 5
}
```
**Response:**
```json
{
  "result": 15
}
```

### 2. Subtraction
**Endpoint:** `POST /subtract`
**Request Body:**
```json
{
  "num1": 10,
  "num2": 5
}
```
**Response:**
```json
{
  "result": 5
}
```

### 3. Multiplication
**Endpoint:** `POST /multiply`
**Request Body:**
```json
{
  "num1": 10,
  "num2": 5
}
```
**Response:**
```json
{
  "result": 50
}
```

### 4. Division
**Endpoint:** `POST /divide`
**Request Body:**
```json
{
  "num1": 10,
  "num2": 5
}
```
**Response:**
```json
{
  "result": 2
}
```

### Error Handling
If invalid input is provided, the API returns an error response:
```json
{
  "error": "Invalid input. Both num1 and num2 must be valid numbers."
}
```
If division by zero is attempted:
```json
{
  "error": "Cannot divide by zero."
}
```

## Logging
- Winston is used to log request details, responses, and errors.
- Logs are stored in `logs/error.log` and `logs/combined.log`.
- Example logged message:
```json
{
  "level": "info",
  "message": "New add operation requested: 10 + 5"
}
```

## Running the Microservice
Start the server:
```sh
node server.js
```
The service will be available at `http://localhost:3000/`.

## Viewing Logs
To view real-time logs:
```sh
tail -f logs/combined.log
```


### Author
**Binara Lokuliyanage**
