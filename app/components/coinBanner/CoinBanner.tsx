
import Image from "next/image";

const CoinImg = "https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero.cda20382.png&w=1504&q=75"


const bannerContent = {
    title:'Digital money for everyday use',
    text: 'Stablecoins are Ethereum tokens designed to stay at a fixed value, '
}

const CoinBanner = () => {
    return <>
        <section className="banner !py-25 !px-0">
            <div className="container">
                <div className="flex items-center justify-between">

                    <div className="banner__width max-w-[600px] flex items-center flex-col  gap-10">
                        <h2 className={'text-5xl max-[520px]:text-2xl text-wrap font-mono'}>{bannerContent.title}</h2>
                        <p className={'text-wrap text-lg font-mono'}>{bannerContent.text} <span className={'bg-purple-600 rounded-lg'}>even when the price of ETH changes.</span></p>
                    </div>
                    <Image src={CoinImg} width={400} height={400} alt="Coin" priority />
                </div>
            </div>
        </section>
    </>
}


export default CoinBanner;