import Post from '../models/Post.js';

// Validators
import { createPostValidator } from '../middleware/validator.js';

// Utilities
import {
    SU_NAP001, 
    SS_P001,
    WU_NAP001,
    WS_P001,
    WE_EO001,
} from '../utils/_messages.js';

// Getting all Posts
export const getAllPost = async (req, res) => {
    try {
        const post = await Post.find();
        if (post.length == 0) {
            // Server Response
            console.log(`${SU_NAP001}`);
            // Web Response
            res.status(200).json({
                message: WU_NAP001
            }); 
        } else {
            res.status(200).json(post);
        }
    } catch (error) {
        // Server Response
        console.log(`ERROR: ` + error.message)
        // Web Response
        res.status(500).json({
            message: WE_EO001,
            error: error.message
        })
    }
}

// Creating Post
export const createPost = async (req, res) => {
    try {
        const newPost = new Post({
            postContent: req.body.postContent,
            postAuthor: req.body.postAuthor,
        })
        const post = await createPostValidator.validateAsync(req.body);
        if (post) {
            await newPost
                .save()
                .then(() => {
                    // Server Response
                    console.log(`${SS_P001}`)
                    // Web Response
                    res.status(200).json({
                        postContent: req.body.postContent,
                        postAuthor: req.body.postAuthor,
                        message: WS_P001
                    })
                })
        }
    } catch (error) {
        
    }
}
