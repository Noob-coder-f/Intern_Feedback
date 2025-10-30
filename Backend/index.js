import express from 'express';
import authRoutes from "./Route/authRoutes.js";
const app = express();
const port = 3000;
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

app.use(cors());
dotenv.config();


console.log("📦 MongoDB URL:", process.env.MONGODB_URL);


app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/user", authRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


