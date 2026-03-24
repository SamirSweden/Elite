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
        <span>{price ? `${price}` :  "loading"}</span>
    </>
}


