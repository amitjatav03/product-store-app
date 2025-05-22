import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from "./routes/product.route.js";
dotenv.config();

const app = express();

import cors from 'cors';

app.use(cors({
  origin: 'http://localhost:5173', // allow frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // adjust as needed
  credentials: true, // if using cookies/auth
}));


app.use(express.json()); // allows us to accept JSON data in the req.body
const PORT = process.env.PORT || 5000;


app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

