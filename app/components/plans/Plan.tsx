import  Link  from "next/link";
import Card from "../UI/card/Card";
import { ArrowUpRight } from "lucide-react";

const Plan = () => {
  return (
    <>
      <section className="bg-transparent">
        <div className="container">
             <h2 className="text-5xl !mb-4 text-center text-wrap text-gray-600">
                Choose the plan that fits your goals
              </h2>
              <p className="text-white text-lg mx-auto text-center font-meduim">
                Choose the plan that fits your needs and scale your productivity
                with <span className="text-cyan-500">Elite</span>
              </p>
          <div className="plans__wrap ">
            <div className="!py-[50px]">
             <Card />
            </div>
          </div>

          <div className="flex items-center !py-6 max-[768px]:w-full">
            <Link href="/plans" className="flex text-center justify-center items-center gap-2.5 max-[768px]:w-full max-[768px]:text-center  rounded-full text-black rounded-3x bg-white hover:bg-blue-500 cursor-pointer border-none outline-none " style={{padding:'6px'}}>
              See all <span><ArrowUpRight size={20} /></span>
            </Link>
            
          </div>
        </div>
      </section>
    </>
  );
};


export default Plan;