// TODO:

import mongoose from 'mongoose';

const PostModel = new mongoose.Schema({
    postContent: {
        type: String,
        required: true,
        min: 4,
        max: 300
    },
    postAuthor: {
        type: String,
        required: true,
    },
    postNumLikes: {
        type: Number,
        default: 0
    },
    postNumComments: {
        type: Number,
        default: 0
    },
    postLikedBy: {
        type: String,
    },
    postCommentedBy: {
        type: String,
    },
    isPosted: {
        type: Boolean,
        default: true
    },
    isUpdated: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, {
    timestamp: true
})

export default mongoose.model("Post", PostModel)