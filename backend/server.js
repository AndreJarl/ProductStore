import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import router from './routes/products.routes.js';

const app = express();

app.use(express.json());

dotenv.config();

app.use("/api/products", router);


app.listen(5000, () =>{
    connectDB();
    console.log("Server starting at localhost 5000");
})