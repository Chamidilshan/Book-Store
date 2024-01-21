import express from 'express';
import {PORT, MONGO_URI} from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res)=>{
    console.log(req);
    return res.status(220).send('Hello World');
});

app.use('/api/books', booksRoute); 

mongoose
    .connect(MONGO_URI)
    .then(()=>{
        console.log('MongoDB connected');
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`);
        });
        
    })
    .catch((err)=>{
        console.log(err);
    }); 
 