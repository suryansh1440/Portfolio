import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  credentials: true
}));
app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(morgan());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

// Start server
const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
});

export default app;
