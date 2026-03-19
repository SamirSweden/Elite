'use client'

import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import InfoCard from "../components/UI/card/InfoCard"
import Nav from "../components/UI/nav/Nav"



export default function InfoPage(){


    
    return (
        <>
        
            <section className="bg-gradient-to-br h-screen from-[#201c1c] to-[#050101] backdrop-blur-3xl shadow-2xl max-[470px]:py-[40px] !py-[50px] !px-0">
                <div className="container">
                    <Nav />
                    <div className="flex items-center justify-between max-[740px]:flex-col max-[740px]:items-start max-[740px]:gap-[20px]">
                        <h2 className="text-wrap text-white text-[40px] ">How to Buy</h2>
                        <p className="text-sm text-white/50 cursor-default">&mdash; 2 Ways to Buy BTCa Coins</p>
                    </div>
                    <hr className="text-gray-600 !mt-6 !mb-[50px]" />
                    <InfoCard />
                    
                </div>
            </section>

           

            <style jsx>{`
                .container{
                    max-width:800px;
                    padding:0 15px;
                    margin:0 auto;
                    width:100%;
                    height:100%;
                }
            `}</style>
        </>
    )
}


