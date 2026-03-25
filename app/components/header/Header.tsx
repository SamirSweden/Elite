'use client';

import { useState } from "react";
import { ShoppingCart, User, X, Menu, Bitcoin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import DeskBtn from "../UI/btn/DeskBtn";


const links = [
  { label: "pricing", href: "/plans" },
  { label: "info", href: "/info" },
  { label: "about", href: "/about" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter()



  return (
    <>
      <header className="!bg-transparent header ">
        <div className="container ">
          <div className="flex items-center justify-between  bg-transparent border border-gray-600 rounded-3xl !py-[20px] !px-[40px]">
            <Link className="select-none flex items-center cursor-pointer" href={"/"}>
              Elite{" "}
              <span>
                <Bitcoin size={20} />
              </span>
            </Link>
            <ul className="flex items-center gap-4 max-[610px]:hidden">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`capitalize font-medium menu__link ${
                        isActive ? "text-cyan-400 after:w-full" : "text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            

            {pathname !== '/crypto' && (
              <div className="header__apps flex items-center gap-2">
              <button className={`cursor-pointer text-white `}>
                <ShoppingCart size={20} />
              </button>
              <button onClick={() => router.push('/login')} className="cursor-pointer">
                <User size={20} />
              </button>
              <DeskBtn />
            </div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-50 text-white font-bold min-[610px]:hidden cursor-pointer"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div
              className={`${isOpen ? "translate-x-0" : "translate-x-full"} 
                    flex items-center justify-center  flex-col fixed left-0 z-40 backdrop-blur-md
                     bg-transparent transition-transform duration-300
                    inset-0 
                            `}
            >
              <ul className="flex flex-col gap-[7px] bg-transparent shadow-2xl border border-white max-w-[294px] w-full rounded-3xl !p-[20px]">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white text-xl capitalize "
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="header__apps  flex flex-col gap-[10px] !px-5 items-center justify-center fixed bottom-7 left-0 w-full mx-3 ">
                <button onClick={() => router.push('/login')}
                  className={`header__mobile__btn w-full rounded-2xl   capitalize font-medium text-wrap text-white bg-blue-600   hover:bg-black`}
                >
                  new account
                </button>
                <button onClick={() => router.push('/crypto')} className="panel  backdrop-blur-lg border border- !py-[8px] !px-[30px] cursor-pointer  w-full rounded-xl text-white ">
                crypto
              </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style global jsx>
        {`
          .header {
            padding: 20px;
          }
          .menu__link {
            position: relative;
            display: inline-block;
          }

          .menu__link::after {
            content: "";
            position: absolute;
            width: 0;
            left: 0;
            height: 2px;
            bottom: -28px;
            background: cyan;
            transition: width 0.4s ease;
          }
          .menu__link:hover::after {
            width: 100%;
          }

          .header__mobile__btn {
            padding: 16px 35px;
          }
        `}
      </style>
    </>
  );
};

export default Header;
