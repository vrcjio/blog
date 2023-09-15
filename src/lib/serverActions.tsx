'use server'
import { userLogin, UserSignupGoogle } from "@/types/user"
import { DB_Connection } from "./ConnectDb";
import User from "@/app/api/models/user";
export async function signInFrom(user: userLogin) {
    try {
        console.log(user);

    } catch (error) {
        console.log("server Error Found")
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
        }

        return duser;

    } catch (error) {
        return error;
    }
}

