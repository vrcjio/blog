import { DB_Connection } from '@/lib/ConnectDb';
import Post from '@/lib/models/post';
import {NextRequest, NextResponse} from 'next/server';
export const POST =async (req:NextRequest) => {
    try {
        const {authorId} = await req.json();
        await DB_Connection();
        const data = await Post.find({authorId});
        return NextResponse.json({data}, {status:201});

    } catch (error:any) {
        console.log("Get Post error is : ", error);
        return NextResponse.json({error:'server internal errors', success: false }, { status: 500 });
    }
}