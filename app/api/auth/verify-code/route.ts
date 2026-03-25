import { NextResponse } from "next/server";
import { verifyOTP , deleteOTP } from "@/lib/otp-store";


export async function POST(req: Request){
    const {email , code} = await req.json();

    const isValid = verifyOTP(email , code)

    if(!isValid){
        return NextResponse.json( {error: "OTP not valid"} , {status:400})
    }

    deleteOTP(email)

    return  NextResponse.json({success:true})
}
