'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "../components/header/Header";
import Plan from "../components/plans/Plan";
import Card from "../components/UI/card/Card";

const cards = [
  {
    id: 1,
    title: "STANDART",
    price: "45",
    conc: "2 concurrents",
    duration: "600 sec. max  duration",
    api: "API excluded",
    days: "5 pentests/day",
    leak: "400 leak results/day",
    info: "For small projects and lightweight test runs.",
    power:"Up to 80 Gb/s and over 200k rq/s"
  },
  {
    id: 2,
    title: "TURBO",
    price: "400",
    conc: "8 concurrents",
    duration: "2200 sec. max  duration",
    api: "API excluded",
    days: "8 pentests/day",
    leak: "800 leak results/day",
    info: "Regular runs and peak‑readiness drills.",
    power:"Up to 120 Gb/s and over 400k rq/s"
  },
  {
    id: 3,
    title: "BOSS",
    price: "2000",
    conc: "16 concurrents",
    duration: "26000 sec. max  duration",
    api: "API included",
    days: "15 pentests/day",
    leak: "20.000 leak results/day",
    info: "Large staging environments and long‑running campaigns.",
    power:"Up to 320  Gb/s and over 800k rq/s"
  },



  {
    id: 4,
    title: "BUSINESS",
    price: "1500",
    conc: "12 concurrents",
    duration: "12000  sec. max  duration",
    api: "API excluded",
    days: "5 pentests/day",
    leak: "400 leak results/day",
    info: "For small projects and lightweight test runs.",
    power:"Up to 375 Gb/s and over 1.2M rq/s"
  },
  {
    id: 5,
    title: "TURBO",
    price: "2000",
    conc: "16 concurrents",
    duration: "2200 sec. max  duration",
    api: "API included",
    days: "8 pentests/day",
    leak: "800 leak results/day",
    info: "Up to 375 Gb/s and over 1.5M rq/s",
    power:"Up to 375 Gb/s and over 1.2M rq/s"
  },
  {
    id: 6,
    title: "BOSS",
    price: "2000",
    conc: "20 concurrents",
    duration: "26000 sec. max  duration",
    api: "API included",
    days: "15 pentests/day",
    leak: "20.000 leak results/day",
    info: "Up to 480 Gb/s and over 2M rq/s",
    power:"Up to 375 Gb/s and over 1.2M rq/s"
  },




  {
    id: 7,
    title: "PREMIER",
    price: "4500",
    conc: "2 concurrents",
    duration: "600 sec. max  duration",
    api: "API excluded",
    days: "5 pentests/day",
    leak: "400 leak results/day",
    info: "For small projects and lightweight test runs.",
    power:"Up to 375 Gb/s and over 15M rq/s"
  },
  {
    id: 8,
    title: "PREMIER+",
    price: "10000",
    conc: "8 concurrents",
    duration: "2200 sec. max  duration",
    api: "API excluded",
    days: "8 pentests/day",
    leak: "800 leak results/day",
    info: "Regular runs and peak‑readiness drills.",
    power:"Up to 375 Gb/s and over 17M rq/s"
  },
  {
    id: 9,
    title: "LUXURY",
    price: "30000",
    conc: "16 concurrents",
    duration: "26000 sec. max  duration",
    api: "API included",
    days: "15 pentests/day",
    leak: "20.000 leak results/day",
    info: "Large staging environments and long‑running campaigns.",
    power:"Up to 375 Gb/s and over 60M rq/s"
  },
];



const PlanPage = () => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token) router.push("/login")
  },[])

  return (
    <>
    <Header />
      <section className="!py-[100px] min-h-screen bg-gradient-to-br from-[#05032e4c] via-[#1f1b1b] to-[#031c81]">
        <div className="container">
                <div className="bg-transparent shadow-2xl  backdrop-blur-3xl grid grid-cols-3 gap-6 max-[768]:grid-cols-1 max-[768]:w-full max-[768]:gap-8">
                {cards.map((card) => (
                    <div key={card.id} className="!p-6 rounded-2xl backdrop-blur-3xl shadow-lg bg-transparent border border-gray-400">
                        <div className="!p-6 rounded-2xl !backdrop-blur-3xl shadow-lg bg-gradient-to-br from-black to-blue-800 border border-gray-800">
                            <h3 className="text-white text-lg !mb-3 capitalize font-medium">{card.title}</h3>
                            <h3 className="text-white text-4xl ">${card.price}/<span className="text-sm text-gray-500">mo</span></h3>
                        </div>
                        <div className="!mt-3 !mb-4 ">
                            <p className="text-gray-600 text-sm">{card.power}</p>
                            <div className="flex items-center w-full !py-[10px] px-0">
                                <button className=" trantition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl w-full text-center text-lg !py-[14px] !px-[40px] hover:bg-white/40 hover:text-black rounded-xl bg-gradient-to-br from-[#eceaea] to-[#9fabc6] capitalize text-black  cursor-pointer border-none outline-none">purchase</button>
                            </div>
                        </div>
                        <hr className="text-gray-600 " />
                        <div className="!mt-3 flex items-start gap-4 flex-col">
                            <p className="text-gray-400 text-sm">{card.conc}</p>
                            <p className="text-gray-400 text-sm">{card.duration}</p>
                            <p className="text-gray-400 text-sm">{card.api}</p>
                        </div>

                        <hr className="text-gray-600 !mt-3" />
                        <div className="!mt-3 flex items-start gap-4 flex-col">
                            <p className="text-gray-400 text-sm">{card.days}</p>
                            <p className="text-gray-400 text-sm">{card.leak}</p>
                        </div>
                        
                        <hr className="text-gray-600 !mt-3" />
                        <div className="!mt-3 flex items-start gap-4 flex-col">
                            <p className="text-gray-400 text-sm">{card.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default PlanPage;
