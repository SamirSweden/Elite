"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Header from "../header/Header";
import { Bitcoin, X, Menu } from "lucide-react";

const links = [
  {
    label: "pricing",
    href: "/plans",
  },
  {
    label: "info",
    href: "/info",
  },
];

const Panel = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header bg-transparent !py-3">
        <div className="container">
          <div className="flex items-center  justify-between bg-gradient-to-br from-[#000000] to-[#3b0214] border border-gray-800 rounded-full !py-[5px] !px-[20px]">
            <Link className="flex items-center gap-1" href={"/"}>
              Elite{" "}
              <span>
                <Bitcoin size={20} />
              </span>
            </Link>

            <ul className="menu flex items-center gap-4  max-[520px]:hidden">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative overflow-hidden px-3 py-1 rounded-lg transition-all
          before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-black/10
          before:transition-all before:duration-300 hover:before:w-full
                      ${isActive ? "font-medium text-cyan-500" : "text-gray-700"}
          `}
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
              
            <Link
              href={"/crypto"}
              className="max-[520px]:hidden  bg-gradient-to-br from-[#a90b74] to-[#1d30db] rounded-4xl !py-[15px] !px-[20px]"
            >
              crypto
            </Link>

           
              <button
              className="min-[520px]:hidden z-50 text-gray-400 font-bold cursor-pointer border-none outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div
              className={`${isOpen ? "translate-x-0" : "translate-x-full"} flex items-center flex-col justify-center fixed left-0 z-40 backdrop-blur-sm inset-0 bg-transparent transition-transform duration-500`}
            >
              <ul className="flex flex-col items-center gap-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-gray-400 font-medium capitalize border-none outline-none text-2xl"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center fixed bottom-7 right-0 w-full ">
                <Link
                  href={"/crypto"}
                  className="min-[520px]:hidden w-full !mx-[20px] text-center bg-gradient-to-br from-[#a90b74] to-[#1d30db] rounded-4xl !py-[15px] !px-[20px]"
                >
                  crypto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Panel;
