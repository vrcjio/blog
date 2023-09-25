import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "please provide a title"],
    },

    category: {
        type: String,
        required: [true, "please provide a Category"],
    },
    subCategory: {
        type: String,
        required: [true, "please provide a subCategory"],
    },
    
    content: {
        type: String,
        required: [true, "Please provide a content"],
    },
    shortNote: {
        type: String,
        required: [true, "Please provide a short Note"],
    },
    authorName: {
        type: String,
        required: [true, "Please provide a author name"],
    },
    authorId: {
        type: String,
        required: [true, "Please provide a author id"],
    },

    createdAt: Date,
    updatedAt: Date,

    comments: [String]

})


const Post = mongoose.models.posts || mongoose.model('posts', postSchema);

export default Post;
