import Banners from "../banners/Banners";
import Greeting from "../greetingEth/Greeting";
import Navigation from "../UI/nav/Navigation";
import Ethereum from "@/app/components/ethereum/Ethereum";
import EthBanner from "@/app/components/ethereum/EthBanner";
import Footer from "@/app/components/footer/Footer";

export default function BannerEth() {
  return (
    <>
        <main className="select-none">
            <Navigation />
            <Banners />
            <Greeting />
            <Ethereum />
            <EthBanner/>
            <Footer />
        </main>
    </>
  );
}
