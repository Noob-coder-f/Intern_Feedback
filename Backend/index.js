import express from 'express';
const app = express();
const port = 3000;
import dotenv from 'dotenv';
import connectDB from './config/db.js';


dotenv.config();
// console.log("📦 MongoDB URL:", process.env.MONGODB_URL);
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectDB();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
