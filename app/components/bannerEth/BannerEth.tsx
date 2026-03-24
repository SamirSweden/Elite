import Banners from "../banners/Banners";
import Greeting from "../greetingEth/Greeting";
import Navigation from "../UI/nav/Navigation";
import Ethereum from "@/app/components/ethereum/Ethereum";

export default function BannerEth() {
  return (
    <>
      <Navigation />
      <Banners />
      <Greeting />
        <Ethereum />
    </>
  );
}
