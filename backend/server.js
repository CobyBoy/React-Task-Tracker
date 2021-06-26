import express from 'express';
import cors from 'cors'
import dotenv from "dotenv";
import mongoose from 'mongoose';
import taskRouter from './routes/tasks.routes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: '*',
    credentials: true,
}

//Middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use(cors(corsOptions));
app.use('/api', taskRouter)

app.listen(PORT, () => (console.log(`Server started at ${PORT}`)));
