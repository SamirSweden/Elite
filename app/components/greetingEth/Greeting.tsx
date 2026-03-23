"use client";

import { Calculator, Rocket, Settings, Wallet } from "lucide-react";
import { useState, useEffect } from "react";

export default function Greeting() {
  const words = [
    "Crypto",
    "assets with elite.su",
    "invest with Ryan",
    "Elite - Ethereum",
    "Futures with Ryan",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="banner__card  bg-transparent">
        <div className="container">
          <h1 className="text-violet-500 text-3xl capitalize font-mono text-center !mb-4 text-wrap max-[470px]:text-2xl">{words[index]}</h1>
          <div className="banner__wrap grid grid-cols-4 gap-4 max-[768px]:grid-cols-2 max-[470px]:grid-cols-1 max-[470px]:w-full bg-gradient-to-br from-[#564eec] via-[#280c1d] to-[#000] rounded-4xl">
            <div className="banner__card banner__own__card flex items-center justify-center flex-col ">
              <div className="!mb-[20px] !py-[8px] !px-[10px] bg-[#000000]  border border-gray-700 rounded-2xl">
                <Wallet size={40} />
              </div>
              <h3 className="text-cyan-500 !mb-[10px] text-2xl capitalize">
                pick a wallet
              </h3>
              <p className="text-sm text-white font-mono text-center text-wrap ">
                create accounts
              </p>
            </div>

            <div className="banner__card banner__own__card flex items-center justify-center flex-col">
              <div className="!mb-[20px] !py-[8px] !px-[10px] bg-[#000000]  border border-gray-700 rounded-2xl">
                <Settings size={40} />
              </div>
              <h3 className="text-cyan-500 !mb-[10px] text-2xl capitalize">
                get eth
              </h3>
              <p className="text-sm text-white font-mono text-center text-wrap">
                the currency of ethereum
              </p>
            </div>

            <div className="banner__card banner__own__card flex items-center justify-center flex-col">
              <div className="!mb-[20px] !py-[8px] !px-[10px] bg-[#000000]  border border-gray-700 rounded-2xl">
                <Calculator size={40} />
              </div>
              <h3 className="text-cyan-500 !mb-[10px] text-2xl capitalize">
                try apps
              </h3>
              <p className="text-sm text-white font-mono text-center text-wrap">
                finance , gaming , social
              </p>
            </div>

            <div className="banner__card banner__own__card flex items-center justify-center flex-col">
              <div className="!mb-[20px] !py-[8px] !px-[10px] bg-[#000000]  border border-gray-700 rounded-2xl">
                <Rocket size={40} />
              </div>
              <h3 className="text-cyan-500 !mb-[10px] text-2xl capitalize">
                start building
              </h3>
              <p className="text-sm text-white font-mono text-center text-wrap">
                create your first app
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .banner__card {
          padding: 40px 0;
        }
      `}</style>
    </>
  );
}
