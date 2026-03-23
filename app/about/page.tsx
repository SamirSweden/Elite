"use client";

import Header from "../components/header/Header";
import AboutCard from "../components/UI/aboutC/AboutCard";

const About = () => {
  return (
    <>
      <section className="about bg-[#e6e3e3]  h-screen ">
        <div className="container">
            
          <div className="about__wrap flex items-center justify-center max-[440px]:h-[90%]">
            <AboutCard />
          </div>
        </div>
      </section>

      <style>
        {`
          .about{
            padding:100px 0px;
          }
        `}
      </style>
    </>
  );
};

export default About;
