import express from 'express';
import authRoutes from "./Route/authRoutes.js";
const app = express();
const port = process.env.PORT || 8000;
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import cookieParser from "cookie-parser";


app.use(cors());
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectDB();

//Routes
app.use("/api", authRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


