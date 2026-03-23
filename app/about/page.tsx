"use client";

import AboutCard from "../components/UI/aboutC/AboutCard";

const About = () => {
  return (
    <>
      <section className="about bg-[#e6e3e3]  h-screen">
        <div className="container">
            
          <div className="about__wrap flex items-center justify-center h-full">
            <AboutCard />
          </div>
        </div>
      </section>

      
    </>
  );
};

export default About;
