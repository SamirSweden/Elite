import type { Metadata } from "next";
import Header from "../components/shared/header/Header";

export const metadata: Metadata = {
  title: "API posts",
  description: "Portalda rasmiy hamda tijorat valyutalar kursi haqida ma'lumotlar har kuni yangilanib boriladi.. Bank.uz dagi barcha mahsulotlar. Omonatlar. So'm omonatlari. ",
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header />
    {children}
    </>
  );
}
