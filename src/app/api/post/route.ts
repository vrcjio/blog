//"650a9dd212902b4b024092b5"
import { DB_Connection } from '@/lib/ConnectDb';
import Post from '@/lib/models/post';
import {NextRequest, NextResponse} from 'next/server';
export async function POST (req:NextRequest) {
    try {
        const {authorId ="", page = 1, limit = 3} = await req.json();
        
        await DB_Connection(); 
        const total = await Post.find({authorId:{$regex :authorId, $options:"i"}});
        const data = await Post.find({authorId:{$regex :authorId, $options:"i"}}).sort({ createdAt: -1 }).skip((page-1)*limit).limit(limit);
        
        
        const totalPages = Math.ceil(total.length/limit);

        return NextResponse.json({authorId,totalPages, totalData : total.length, page, limit, data}, {status:200});

    } catch (error:any) {
        return NextResponse.json({ message: "server internal error", error, success: false }, { status: 500 });
    }
}