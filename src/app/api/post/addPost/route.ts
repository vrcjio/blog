import { NextRequest, NextResponse } from "next/server";
import Post from '@/lib/models/post';
import { DB_Connection } from "@/lib/ConnectDb";

export async function POST(req: NextRequest){

    try {
        const reqBody = await req.json();
        const newPost = new Post(reqBody);
        await DB_Connection();
        const data = await newPost.save();

        return NextResponse.json({ data: reqBody, success: true }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: "server internal error", error:'server internal errors', success: false }, { status: 500 });
    }
} 