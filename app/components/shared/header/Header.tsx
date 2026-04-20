"use client";

import {DollarSign, User} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Posts", href: "/posts", icon: User },
  { label: "Users", href: "/users", icon: User },
  { label: "plan", href: "/plan", icon: DollarSign },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="bg-black !py-12 !px-5 ">
        <div className="max-w-[1230px] !mx-auto py-4 md:px-6 w-full">
          <div className="flex items-center justify-center">
            <ul className="flex items-center gap-5 !py-5 !px-4 bg-[#111] rounded-4xl ">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link href={link.href} className={`${isActive ? "text-yellow-400" : "" } flex items-center gap-2`}>
                      {Icon && <Icon />}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
