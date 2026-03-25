import Image from "next/image";

const pizzaImg = "https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/2/svg/1f355.svg"

const content = {
    title: "The infamous Bitcoin pizza",
    desc: "In 2010, someone bought 2 pizzas for 10,000 bitcoin. At the time these were worth ~$41 USD. In today’s market that’s millions of dollars. There are many similar regretful transactions in Ethereum’s history. Stablecoins solve this problem, so you can enjoy your pizza and hold on to your ETH."
}

export default function PizzaCard(){
    return (
        <>
            <div className="card select-none rounded-xl flex flex-col items-start  gap-5 bg-gradient-to-br from-gray-300  via-[#000] backdrop-blur-sm to-pink-950 !py-[20px] !px-[35px]">
                <Image src={pizzaImg} width={50} height={50} alt={'pizza-img'} />
                <div className="flex flex-col items-center gap-[20px]">
                    <h3 className={'text-3xl text-white text-wrap text-left font-mono'}>{content.title}</h3>
                    <p className={'text-lg text-gray-500 font-mono text-wrap max-[715px]:text-sm '}>{content.desc}</p>
                </div>
            </div>
        </>
    )
}






