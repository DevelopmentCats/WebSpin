# WebSpin

WebSpin is a single-page web application that takes a word input and generates random relevant websites with a wormhole animation effect.

## Project Structure

```
webspin/
├── frontend/                    # React frontend application
│   ├── public/                  # Static assets
│   ├── src/                     # Source code
│   │   ├── components/          # React components
│   │   ├── styles/              # CSS/SCSS files
│   │   ├── animations/          # Animation-specific code
│   │   ├── services/            # API services
│   │   └── utils/               # Utility functions
├── backend/                     # Node.js/Express backend
│   ├── src/                     # Source code
│   │   ├── controllers/         # Request handlers
│   │   ├── routes/              # API routes
│   │   ├── services/            # Business logic
│   │   └── utils/               # Utility functions
└── .gitignore                   # Git ignore file
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Technologies Used

- Frontend: React with Vite, Axios, Framer Motion, Styled Components
- Backend: Node.js, Express, Axios, CORS, Helmet, Dotenv