import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Initializer
const app = express();

// Route Imports
import postRoutes from '../routes/post.route.js';

/* Server Configuration */
// Local Port
const PORT = process.env.PORT;
app.set('port', PORT);

// Middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json({
    extened: true
}));
app.use(express.urlencoded({
    extended: true
}));

// API(s) Routes
app.use('/api/v1/post', postRoutes);

export default app;