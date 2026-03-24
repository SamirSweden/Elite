'use client'

import Image from "next/image"
import EthPrice from "@/app/components/ethprice/EthPrice";
import {DollarSign } from "lucide-react";

const bannerEthContent = {
    title: "What is ETH?",
    desc: "Ether (ETH) is the native cryptocurrency that powers the Ethereum network, used to pay transaction fees and secure the blockchain through staking.",
    text: "Beyond its technical role, ETH is open, programmable digital money. It is used for global payments, as collateral for loans, and as a store of value that doesn't rely on any central entity."
}

const bannerImgEth = "https://ethereum.org/_next/static/media/quizzes-hub-hero.fb734f58.png"

export default  function EthBanner(){
    return(
        <>
            <section className="banner__eth">
                <div className="container">
                    <div className="flex justify-between items-center gap-10 flex-col ">
                        <h2 className={'text-4xl transform -translate-y-3 -rotate-4 text-cyan-300 font-mono shadow-2xl shadow-blue-600 bg-transparent'}>{bannerEthContent.title}</h2>
                        <p className={'max-w-[600px] w-full text-justify text-wrap'}>{bannerEthContent.desc}</p>
                        <hr className={'border border-violet-800 w-[50%] max-[520px]:w-full'} />
                        <p className={'max-w-[600px] w-full text-justify text-wrap'}>{bannerEthContent.text}</p>
                        <div className={'flex    gap-1 max-[520px]:w-full'}>
                            <span><DollarSign  size={40} /></span>
                            <div className="flex items-start flex-col ">
                                 <EthPrice/>
                                <span className={'text-gray-500 !mt-3'}>Current ETH price (USD)</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    .banner__eth{
                        padding:100px 0;
                    }
                    
                `}
            </style>
        </>

    )
}



