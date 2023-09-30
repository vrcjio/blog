import { userLogin, UserSignupGoogle } from "@/types/user";
import { DB_Connection } from "./ConnectDb";
import User from "./models//user";
import Jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
export async function signInFrom(user: userLogin) {
    try {
    } catch (error) {
    }
}

export async function signWithGoogle(user: UserSignupGoogle) {
    try {
        const { email } = user;
        await DB_Connection();

        const duser = await User.findOne({ email });
        if (!duser) {
            const newUser = new User(user);
            await newUser.save();
            // Convert newUser (Mongoose document) to a plain object
            const userObject = newUser.toObject();
            const token = Jwt.sign(userObject, process.env.JWT_TOKEN!);
            sessionStorage.setItem("token",token)
        } else {            
            // Convert duser (Mongoose document) to a plain object
            const userObject = duser.toObject();
            const token = Jwt.sign(userObject, process.env.JWT_TOKEN!);  
            sessionStorage.setItem("token",token)
        }

    } catch (error) {
        return error;
    }
}
