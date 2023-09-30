import { DB_Connection } from '@/lib/ConnectDb';
import Post from '@/lib/models/post';
import {NextRequest, NextResponse} from 'next/server';
export async function POST (req:NextRequest) {
    try {
        const {id} = await req.json();
        await DB_Connection();
        const data = await Post.findById(id);
        return NextResponse.json({data}, {status:201});

    } catch (error:any) {
        return NextResponse.json({ message: "server internal error", error:'server internal errors', success: false }, { status: 500 });
    }
}