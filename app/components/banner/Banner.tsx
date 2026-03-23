'use client'

import bannerImg from "@/app/assets/banner.avif"


const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container banner__bg rounded-3xl">
          <div className="banner__wrap flex justify-center items-center h-[100%]">
            <div className="max-w-[500px] w-full backdrop-blur-xl !p-[30px] rounded-xl">
              <h1 className="text-cyan-500 text-3xl !mb-4">Elite.su &mdash; dive into cyberSec</h1>
              <p className="text-gray-400"><span className="text-white text-lg uppercase">elite.su</span> &mdash; The industry leader in cybersec services, we are several years ahead of the competition in all aspects.</p>
            </div>
          </div>

           

           
        </div>
      </section>

      <style global jsx>
        {
            `
            .banner {
                padding:60px 0;
            }
            .banner__bg{
                background-image: url(${bannerImg.src});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                height: 50vh;
            }
            `
        }
      </style>
    </>
  );
};

export default Banner;
