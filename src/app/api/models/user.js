import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    email:{
        type:String,
        required : [true, "please provide a username"],
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

    profile:String,

    forgatePasswordToken : String,
    forgatePasswordTokenExpiry : Date, 

})

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;
