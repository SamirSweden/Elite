import { Resend } from "resend"


const resend = new Resend(process.env.RESEND_API_TOKEN)

export async function sendEmail(to: string, code: string){
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to,
        subject: "Your login code",
        html: `<h1>${code}</h1><p>Hello dear User,  our System sending you a code, the code is valid up to 5 minutes </p>`,
    })
}


