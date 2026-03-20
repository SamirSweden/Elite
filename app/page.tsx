import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Plan from "./components/plans/Plan";

export default function Home() {
  

  return (
    <>
        <Header />
        <Banner />
        <Plan />
        <About />
        <Footer />
    </>
  );
}
