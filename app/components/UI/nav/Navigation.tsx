"use client";

import { Bitcoin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "crypto",
    href: "/crypto",
  },
  {
    label: "coins",
    href: "/stablecoins",
  },
  {
    label: "Layer 2",
    href: "/layer2",
  },
];


export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

  return (
    <>
      <header className="header z-[70]">
        <div className="container">
          <div className="header__wrap">
            <Link
              href={"/"}
              className=" cursor-pointer text-white text-3xl flex items-center gap-1.5"
            >
              <span>Elite</span>
              <Bitcoin />
            </Link>

            <ul className="menu  max-[768px]:hidden flex items-center gap-4.5 !py-[10px] !px-[20px] border border-gray-700 bg-gradient-to-br  from-[#000] via-[#222] from-[#222222] rounded-2xl">
              {navLinks.map((navlink) => {
                const isActive = pathname === navlink.href;

                return (
                    <li key={navlink.href}>
                      <Link
                          href={navlink.href}
                          className={`text-xl font-mono capitalize transition
            ${isActive ? "rounded-2xl bg-gradient-to-br from-black via-violet-950 to-pink-400 !py-1 !px-4 text-white" : "text-white hover:text-gray-300"}
          `}
                      >
                        {navlink.label}
                      </Link>
                    </li>
                );
              })}
            </ul>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-2xl relative z-[80]"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className={`min-[768px]:hidden flex items-center justify-center
                    flex-col fixed left-0 z-[60] backdrop-blur-md bg-transparent transition-transform duration-300 inset-0
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
              <ul
                  onClick={(e) => e.stopPropagation()}
                  className="flex flex-col items-center gap-3">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href

                  return (
                      <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`${isActive ? "text-white !py-2 !px-4 bg-gradient-to-br from-white via-blue-500 to-red-400 rounded-4xl" :"text-white" }`}
                            onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                  )

                })}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <style>
        {`
                        .header{
                            padding:20px 0;
                        }
                        .header__wrap{
                            display:flex;
                            align-items:center;
                            justify-content:space-between;
                        }
                    `}
      </style>
    </>
  );
}
