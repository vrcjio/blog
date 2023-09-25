import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    email:{
        type:String,
        required : [true, "please provide a email"],
        unique:true,
    },

    username:{
        type:String,
        required : [true, "Please provide a username"],
    },

    isAdmin : {
        type : Boolean,
        default : false
    },
    password:String,

    profile:{
        type:String,
        default:undefined
    },

    forgatePasswordToken : {
        type:String,
        default:undefined
    },
    forgatePasswordTokenExpiry : {
        type:Date,
        default: undefined
    },
    accountCreatedData :  {
        type:Date,
        default: new Date()
    },

})


const User = mongoose.models.users ||  mongoose.model('users', userSchema);

export default User;
