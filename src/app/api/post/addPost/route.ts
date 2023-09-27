import { NextRequest, NextResponse } from "next/server";
import Post from '@/lib/models/post';
import { DB_Connection } from "@/lib/ConnectDb";

export async function POST(req: NextRequest){

    try {
        const reqBody = await req.json();
        console.log("req body  is : ", reqBody);
        const newPost = new Post(reqBody);
        await DB_Connection();
        const data = await newPost.save();
        console.log("save data is  : ", data);

        return NextResponse.json({ data: reqBody, success: true }, { status: 200 });
    } catch (error: any) {
        console.log("Add Post error is : ", error);
        return NextResponse.json({error:'server internal errors', success: false }, { status: 500 });
    }
} 