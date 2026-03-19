import { NextResponse } from "next/server";




export async function POST(){
    const token = crypto.randomUUID() 

    return NextResponse.json({ token })
}










