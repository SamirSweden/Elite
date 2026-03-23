
// import {  NextResponse } from "next/server";
// import { validTokens } from "../lib/tokens";

// export async function POST(req: Request){
//     const { token } = await req.json()

    
    

//     if(validTokens.has(token)){
//         return NextResponse.json({ ok:true})
//     }

//     return NextResponse.json({ error: "Invalid token" }, {status: 401})
// }





import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  // проверка токена (например с validTokens или process.env.SECRET_TOKEN)
  // если используешь Set:
  // import { validTokens } from "@/lib/tokens";
  // if (!validTokens.has(token)) return NextResponse.json({ error: "Invalid token" }, { status: 401 });

  const res = NextResponse.json({ ok: true });

  // ставим httpOnly cookie
  res.cookies.set("token", token, { path: "/", httpOnly: true });
  return res;
}