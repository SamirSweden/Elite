import {NextResponse} from "next/server";


export async function GET(){
    try{
        const res = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT", {
            cache: "no-store",
        });

        const data = await res.json();

        return NextResponse.json({price: data.price})
    } catch(e) {
        return NextResponse.json(
            {err: "error" },
            {status: 500}
        )
    }
}
