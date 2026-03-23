"use client";

import EthImg from "@/app/assets/ethereum.webp";

const Banners = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner__wrap"></div>
        </div>
      </section>

      <style>
        {`
                    .banner{
                        background: url(${EthImg.src});
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                        height: 50vh;
                    }
                `}
      </style>
    </>
  );
};

export default Banners;
