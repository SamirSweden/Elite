import {NextResponse} from "next/server";


export async function GET(){
    try{
        const res = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT", {
            cache: "no-store",
        });
        if(!res.ok) throw new Error("api failed")

        const data = await res.json();

        return NextResponse.json({price: data.price})
    } catch(e) {

        try {
            const response = await fetch(
                "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
            );
            const data = await response.json();

            return NextResponse.json({ price: data.ethereum.usd });
        } catch (err) {
            return NextResponse.json(
                { error: "Failed to fetch ETH price" },
                { status: 500 }
            );
        }

    }
}
