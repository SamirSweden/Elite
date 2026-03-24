import CoinBanner from "@/app/components/coinBanner/CoinBanner";
import Navigation from "@/app/components/UI/nav/Navigation";


const Stablecoins = () => {
    return (
        <>
            <main className={"bg-gradient-to-br from-black/50 to-[##7d5c5c] via-[#1a1919]"}>
                <Navigation/>
                <CoinBanner/>
            </main>
        </>
    )
}


export default Stablecoins