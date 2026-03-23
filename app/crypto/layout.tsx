import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite - Crypto & Eth",
};

export default function CryptoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
