import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "please provide a title"],
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


const Comment = mongoose.models.comments || mongoose.model('comments', commentSchema);

export default Comment;
