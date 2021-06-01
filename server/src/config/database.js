import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Utilities
import { SE_DB001, SS_DB001_MDB } from '../utils/_messages.js'

// Environment
const MONGODB_URI = process.env.MONGODB_URI;
const MODE = process.env.MODE;

// Cloud Database Connection
try {
    if (MODE == 'DEVELOPMENT') {
        mongoose
            .connect(MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
            })
            .then(() => {
                console.log(`${SS_DB001_MDB}`)
            })
            .catch(error => console.error(error.message))
        console.log(`PROJECT_MODE_${MODE}`);
    } else if (MODE == 'PRODUCTION') {
        console.log(`PROJECT_MODE_${MODE}`);
    } else {
        console.log(`ERROR: ${SE_DB001}`)
    }
} catch (error) {
    console.log(error.message)
}