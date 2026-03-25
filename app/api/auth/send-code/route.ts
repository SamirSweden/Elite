import { NextResponse} from "next/server";
import { saveOTP} from "@/lib/otp-store";
import { sendEmail } from "@/lib/mailer";


function  generateCode(){
    return Math.floor(1000000 + Math.random() * 9000000).toString()
}


export async function  POST(req: Request){
    const { email } = await req.json();

    if(!email){
        return NextResponse.json({error: "Email required"} , {status: 400})
    }

    const code = await generateCode();

    saveOTP(email , code)
    await sendEmail(email , code)

    return NextResponse.json({status: true})
}



