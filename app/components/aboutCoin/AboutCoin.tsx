'use client'


import StableCard from "@/app/components/UI/card/StableCard";
import PizzaCard from "@/app/components/UI/card/PizzaCard";

const bannerContent = {
    title: "Why stablecoins?",
    description:"Stablecoins are cryptocurrencies without the volatility. They share a lot of the same powers as ETH but their value is steady, more like a traditional currency. So you have access to stable money that you can use on Ethereum. How stablecoins get their stability"
}


const AboutCoin = () => {
    return (
        <>
            <section className={'banner'}>
                <div className="container">
                    <h2 className={'text-white font-mono text-3xl capitalize !mb-[40px]'}>{bannerContent.title}</h2>
                    <p className={'text-gray-400 font-mono !mb-[40px]'}>{bannerContent.description}</p>
                        <div className={'grid grid-cols-2 gap-4 max-[715px]:grid-cols-1'}>
                            <StableCard/>
                        </div>
                        <div className={'!mt-5'}>
                            <PizzaCard/>
                        </div>
                    </div>
            </section>
            <style jsx>
                {`
                    .banner{
                        padding:100px 0;
                    }
                `}
            </style>
        </>
    )
}

export default AboutCoin

