'use client'



import {useEffect, useState} from "react";

export  default function EthPrice (){
    const [price , setPrice] = useState<string | null>(null);

    useEffect(() => {
            const fetchPrice = async () => {
            const resp = await fetch("/api/eth-price");
            const data = await resp.json();
            setPrice(data.price);
        }
        fetchPrice();
    }, []);

    return <>
        <span className={'text-2xl bg-gradient-to-br max-[520px]:w-full text-center from-pink-700  to-black !py-2 !px-6  rounded-2xl'}>{price ? `${price}` :  "loading"}</span>
    </>
}


