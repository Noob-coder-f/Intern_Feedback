import express from 'express';
import authRoutes from "./Route/authRoutes.js";
import feedbackRoutes from "./Route/feedbackRoutes.js";
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

connectDB();

//Routes
app.use("/user", authRoutes);
app.use("/feedback", feedbackRoutes);



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


