"use client";

import { Bitcoin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "about",
    href: "/about",
  },
  {
    label: "prices",
    href: "/buy",
  },
];

const imageEth =
  "https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero-2xl.e892e79f.png&w=1920&q=20";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header ">
        <div className="container">
          <div className="header__wrap">
            <Link
              href={"/"}
              className="cursor-pointer text-white text-3xl flex items-center gap-1.5"
            >
              <span>Elite</span>
              <Bitcoin />
            </Link>

            <ul className="menu max-[425px]:hidden flex items-center gap-4.5 !py-[10px] !px-[20px] border border-gray-700 bg-gradient-to-br  from-[#000] via-[#222] from-[#222222] rounded-2xl">
              {navLinks.map((navlink) => (
                <li key={navlink.href}>
                  <Link
                    href={navlink.href}
                    className="text-white text-xl font-mono capitalize  "
                  >
                    {navlink.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-2xl z-50"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className={`min-[425px]:hidden flex items-center justify-center
                    flex-col fixed left-0 z-40 backdrop-blur-md bg-transparent transition-transform duration-300 inset-0
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
              <ul className="flex flex-col items-center gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white text-xl font-mono capitalize  "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
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
