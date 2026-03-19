import Image from "next/image";

import quanum from "@/app/assets/quanum.png";
import hitbtc from "@/app/assets/hitbtc.png";

import { motion } from "framer-motion";

const info = [
  {
    id: 1,
    img: quanum,
    title: "Quan2um",
    text: "Register on the Quan2um Exchange Buy BTCa Coins",
  },
  {
    id: 2,
    img: hitbtc,
    title: "Hitbtc",
    text: "Register on the Hitbtc.com Buy BTCa Coins",
  },
];

const InfoCard = () => {
  return (
    <>
      <div className="grid grid-cols-2 max-[740px]:grid-cols-1 gap-5  max-[740px]:gap-[30px]  ">
        {info.map((i) => (
          <motion.div
            key={i.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#100629] to-[#3f0c0c] backdrop-blur-3xl shadow-2xl py-[30px] px-[35px] rounded-xl cursor-pointer"
          >
            <div
              key={i.id}
              className="bg-gradient-to-br relative from-[#100629] to-[#3f0c0c] backdrop-blur-3xl shadow-2xl !py-[30px] !px-[35px] rounded-xl"
            >
              <div className="flex items-center gap-6.5">
                <Image src={i.img} width={40} height={50} alt="" />
                <h4 className="text-lg !mb-[20px] !mt-[22px] font font-medium">
                  &mdash;{i.title}
                </h4>
                <span className="absolute top-2 translate-x-2 -translate-y-9/12 right-3 shadow-2xl backdrop-blur-lg bg-transparent border border-gray-700 py-[5px] !px-2 rounded-lg text-xs 
                 text-yellow-500">Trusted</span>
              </div>
              <p className="text-gray-400 text-sm text-wrap">
                {i.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default InfoCard;

