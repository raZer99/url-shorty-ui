# URL Shortener Frontend

This project is a **React-based frontend** for a URL shortener service.
It provides a clean, dark-themed UI that allows users to shorten URLs and access the generated short links.

The frontend communicates with a Spring Boot backend using REST APIs.

---

## Features

- Dark-themed, aesthetic UI
- Centered layout with large typography
- Real-time URL shortening
- Clickable short URLs
- Error handling for invalid input and backend failures

---

## Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- CSS (custom styling)
- Fetch API

---

## Project Structure

src/
├── App.js
├── App.css
└── index.js

yaml
Copy code

---

## How the UI Works

1. User enters a long URL
2. React sends a POST request to the backend
3. Backend returns a short key
4. UI displays the generated short URL
5. Clicking the short URL redirects the user via the backend

---

## Backend Integration

The frontend connects to the backend using an environment variable:

REACT_APP_API_BASE_URL=http://localhost:8080

yaml
Copy code

All API requests are made relative to this base URL.

---

## Example Flow

**Input**
https://google.com

mathematica
Copy code

**Generated Short URL**
http://localhost:8080/api/g

yaml
Copy code

---

## Learning Outcomes

- Controlled components in React
- Async API calls using Fetch
- State management with hooks
- Frontend-backend integration
- UI/UX polishing for developer projects

---

## Author

**raZer**
