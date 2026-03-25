import { Resend } from "resend"


const resend = new Resend(process.env.RESEND_API_TOKEN)

export async function sendEmail(to: string, code: string){
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to,
        subject: "Your login code",
        html: `<h1>${code}</h1><p>Код действителен 5 минут</p>`,
    })
}


