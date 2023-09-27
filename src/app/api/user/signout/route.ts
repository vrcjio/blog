import { NextRequest, NextResponse } from "next/server"
import {cookies} from 'next/headers'

export async function GET(req: NextRequest){
    try {
        const cookiesStore = cookies();  
        cookiesStore.delete(process.env.LOGIN_TOKEN||'loginToken');
        return NextResponse.json({message:"successfully logout", success:true},{status:200});     
    } catch (error:any) {
        console.log(error)
        
        return NextResponse.json({error:'server internal Error', success:false},{status:500});
    }
}