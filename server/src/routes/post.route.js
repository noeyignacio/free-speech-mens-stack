import express from "express";

// Controllers
import { 
    getAllPost,
} from '../controller/post.controller.js';

// Router Initializer
const router = express.Router();

/* ** ROUTERS ** */
// Getting all Posts
router.get('/posts', getAllPost);
// Creating Post


export default router;