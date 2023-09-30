import { DB_Connection } from "@/lib/ConnectDb";
import User from "@/lib/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken'
import { sendEmail } from "@/lib/helper/mailer";


export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { username, password, email } = await reqBody;
        if (email === "" && password === "" && username === "") {
            return NextResponse.json({ error: "data is missed please try again" }, { status: 400 })
        }
        await DB_Connection();
        const duser = await User.findOne({ email }).wtimeout(30000);
        if (duser) {
            return NextResponse.json({ error: "user is already existing", success: false }, { status: 401 })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const tokenData = { username, email, hashPassword, expiryTime: Date.now() + 600000 } //10Min 
        if (!process.env.JWT_TOKEN)
            throw Error("Token Key missing");

        const token = Jwt.sign(tokenData, process.env.JWT_TOKEN!);
        await sendEmail({ email, emailType: "VERIFY", mailData: token })
        const res = NextResponse.json({ message: "successfully send mail", data: tokenData, token, success: "true" }, { status: 201 });
        return res;
    } catch (error: any) {
        return NextResponse.json({ message: "server internal error", error: "server Internal Error", success: false }, { status: 500 });
    }
}