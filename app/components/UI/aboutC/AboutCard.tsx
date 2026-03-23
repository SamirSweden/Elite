import { Home } from "lucide-react";
import Link from "next/link";

const AboutCard = () => {
  return (
    <>
      <div className="bg-white rounded-2xl border !mt-[100px] max-[542px]:mt-0   !py-[40px] !px-[20px] sm:px-10 w-[760px] relative">
        <Link  href={'/'} className="text-black absolute top-[-15px] right-0 ">
            <Home size={30} />
        </Link>
        <div >
          <p className="text-gray-500 text-lg font-mono !mb-[20px] text-wrap">
            <span className="text-xl text-black font-extrabold font-semibold">
              Elite
            </span>{" "}
            is a cybersecurity SaaS company founded by{" "}
            <span className="text-xl text-black  font-extrabold font-semibold">
              Ryan 
            </span>
            . Our mission is to provide advanced, accessible, and reliable load
            testing & cybersecurity tools to individuals, developers, and
            companies focused on performance, uptime, and security.
          </p>
         
        </div>
        <div>
          <h3 className="capitalize !mb-5 font-bold text-2xl sm:text-3xl text-black ">
            &mdash; Our Mission
          </h3>
          <p className="text-gray-500 text-lg font-mono !mb-[40px] text-wrap max-[560px]:font-medium">
            Every digital product deserves to operate under pressure. We empower
            developers and businesses with robust, easy‑to‑use testing
            instruments based on industry best practices.
          </p>
        </div>
        {/* <div className="bg-gradient-to-br from-[#664444] via-[#e4c882] to-[#111] !px-[30px] !py-[20px] rounded-3xl ">
          <h3 className="capitalize !mb-5 font-bold text-2xl sm:text-3xl text-black  ">
            Company Information  &mdash;  
          </h3>
          
         
          <ul className="flex items-start flex-col gap-[20px]">
            <div className="about__details ">
              <span className="text-black font-semibold text-xl">
                Legal Entity:
              </span>
              <span className="uppercase text-black/60">
                78 OVER 37 LIMITED
              </span>
            </div>

            <div className="about__details ">
              <span className="text-black font-semibold text-xl">
                Company Number:
              </span>
              <span className="uppercase text-black/60">
                16222439
              </span>
            </div>

            <div className="about__details ">
              <span className="text-black font-semibold text-xl">
                Date of Incorporation: 
              </span>
              <span className="uppercase text-black/60">
                31 January 2025
              </span>
            </div>


            <div className="about__details ">
              <span className="text-black font-semibold text-xl">
                 Registered Office:
              </span>
              <span className="uppercase text-black/60">
                Flat 27 5 Waleorde Road, London, England, SE17 1GG
              </span>
            </div>

          </ul>
        </div> */}
      </div>
    </>
  );
};

export default AboutCard;
