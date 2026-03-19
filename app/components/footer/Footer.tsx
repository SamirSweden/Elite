import { Bitcoin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="!bg-transparent !py-[20px] backdrop-blur-lg !px-[16px] flex items-center justify-center">
        <div className="max-w-[600px] mx-auto px-[15px] w-full h-full">
          <div className="flex items-center justify-between backdrop-blur-lg border border-gray-600 rounded-4xl !py-3 !px-[20px]">
            <Link className="flex items-center cursor-pointer text-2xl" href={"/"}>
              Elite{" "}
              <span>
                <Bitcoin size={20} />
              </span>
            </Link>
            <ul className="flex items-center gap-4">
                <li>
                    <Link href={'/plans'} className="text-gray-500 text-sm capitalize cursor-pointer hover:text-white">plans</Link>
                </li>
                 <li>
                    <Link href={'/blog'} className="text-gray-500 text-sm capitalize cursor-pointer hover:text-white">blog</Link>
                </li>
                 <li>
                    <Link href={'/contact'} className="text-gray-500 text-sm capitalize cursor-pointer hover:text-white">contacts</Link>
                </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
