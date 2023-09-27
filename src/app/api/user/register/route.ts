import { NextRequest, NextResponse } from "next/server";
import Jwt, { JwtPayload } from 'jsonwebtoken';
import User from "@/lib/models/user";
import { DB_Connection } from "@/lib/ConnectDb";

export async function POST (req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { token } = await reqBody;
        const data:JwtPayload |any = Jwt.verify(token, process.env.JWT_TOKEN!);
        
        const { email, username, hashPassword, expiryTime } = data;

        const time = Date.now();
        if (time > expiryTime) {
            return NextResponse.json({ error: "Token Expire Re-Register", success: false }, { status: 401 });
        }

        await DB_Connection();
        const duser = await User.findOne({ email }).wtimeout(30000);
        if (duser) {
            return NextResponse.json({ error: "Email already verified", success: false }, { status: 401 });
        }

        const newUser = new User({ username, email, password: hashPassword, accountCreatedData: new Date() });
        await newUser.save();

        const res = NextResponse.json({ data: data, email, message: "succefully verified", success: true }, { status: 201 });
        return res;
    } catch (error: any) {
        console.log("error internal", error)
        return NextResponse.json({ error: "server Internal Error", success: false }, { status: 500 });

    }
}