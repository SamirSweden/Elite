import { Home } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="flex items-baseline justify-between">
        <div className="flex !items-baseline gap-3 !mb-[50px]">
          <Link href={"/"} className="mt-[8px] cursor-pointer hover:text-cyan-500">
            <Home size={35} />
          </Link>
          <span className="text-xl text-white font-extrabold ">/</span>
          <span className="text-gray-500 text-sm lowercase cursor-default">info</span>
        </div>

        <div className=" flex items-baseline justify-between gap-2">
            <h2 className="text-gray-400 !py-[1px] !px-[20px] border border-gray-600 rounded-xl cursor-default">
              Elite.su
            </h2>
            <span className="text-sm text-gray-500 cursor-default">Ryan</span>
          </div>
      </div>
    </>
  );
};

export default Nav;
