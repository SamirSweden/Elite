import type { Metadata } from "next";
import Header from "../components/shared/header/Header";

export const metadata: Metadata = {
  title: "users page",
  description: "",
};

export default function UsersLayout({
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
