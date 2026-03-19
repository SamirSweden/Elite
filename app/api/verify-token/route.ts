
import {  NextResponse } from "next/server";


export async  function POST(req: Request){
    const { token } = await req.json()
    
    if (token){
        return NextResponse.json({ ok : true })
    }

    return NextResponse.json("Invalid" , {status: 401})

}





