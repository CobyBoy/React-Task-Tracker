import express from 'express';
import cors from 'cors'
import dotenv from "dotenv";
import mongoose from 'mongoose';
import taskRouter from './routes/task.routes.js';

dotenv.config();
const app = express();
const { CONNECTION_URL } = process.env
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: '*',
    credentials: true,
};

//Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsOptions));
//Routes
app.use('/api', taskRouter);


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => { app.listen(PORT, () => (console.log(`Server started at ${PORT}`))); })
    .catch((error) => console.log(error.message));

