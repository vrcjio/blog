import { DB_Connection } from "@/lib/ConnectDb";
import Post from "@/lib/models/post";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const reqBody = await req.json();
        const { _id } = await reqBody;
        if (!_id) {
            return NextResponse.json({ error: "invalied data", status: true }, { status: 401 });
        }

        await DB_Connection();
        const res = await Post.deleteOne({_id});
        console.log(res);
        return NextResponse.json({ data: "data", status: true }, { status: 200 });
    } catch (error: any) {
        console.log(res)
        return NextResponse.json({ error: "server internal error", status: false }, { status: 500 })
    }

}