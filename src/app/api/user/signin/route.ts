import { DB_Connection } from "@/lib/ConnectDb";
import User from "@/lib/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import Jwt, { JwtPayload } from 'jsonwebtoken';



export async function GET(req: NextRequest){
    const cookieToken = req.cookies.get(process.env.LOGIN_TOKEN! || "loginToken")?.value || "";
    try {
        const { data } :JwtPayload | any = Jwt.verify(cookieToken, process.env.JWT_TOKEN!);

        return NextResponse.json({ data }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ message: "I Think You need Login 😊", error: "server internal error", success: false }, { status: 500 })

    }
}


export async function POST(req: NextRequest){
    try {
        const jsonBody = req.json();
        const { email, password } = await jsonBody;
        if (!email) {
            return NextResponse.json({ error: "username is empty", success: false }, { status: 403 })
        }
        if (!password) {
            return NextResponse.json({ error: "password is empty", success: false }, { status: 403 })
        }

        await DB_Connection();
        const user = await User.findOne({ email }).wtimeout(30000);
        if (!user) {
            return NextResponse.json({ message: "email not existing", errorMsg: "email" }, { status: 409 });
        }

        const pass = await bcrypt.compare(password, user.password);
        if (!pass) {
            return NextResponse.json({ message: "password not existing", errorMsg: "password" }, { status: 409 });
        }
        if (!process.env.JWT_TOKEN)
            throw Error("Token Key missing");
        const cookieToken = Jwt.sign({ data: user }, process.env.JWT_TOKEN);
        const res = NextResponse.json({ data: user, success: true }, { status: 200 });
        res.cookies.set(process.env.LOGIN_TOKEN! || "loginToken", cookieToken, {
            httpOnly: true, path: '/'
        });

        return res;

    } catch (error: any) {
        return NextResponse.json({ message: "server internal error", error: "server internal error", success: false }, { status: 500 })
    }
}