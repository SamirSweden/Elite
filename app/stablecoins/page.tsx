import CoinBanner from "@/app/components/coinBanner/CoinBanner";
import Navigation from "@/app/components/UI/nav/Navigation";
import AboutCoin from "@/app/components/aboutCoin/AboutCoin";
import UseCoin from "@/app/components/usecoin/UseCoin";
import Learn from "@/app/components/learn/Learn";


const Stablecoins = () => {
    return (
        <>
            <main className={"bg-gradient-to-br from-black/50 to-[##7d5c5c] via-[#1a1919]"}>
                <Navigation />
                <CoinBanner/>
                <AboutCoin />
                <UseCoin />
                <Learn />
            </main>
        </>
    )
}


export default Stablecoins