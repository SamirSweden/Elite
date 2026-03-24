import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite - Ethereum",
};

export default function CryptoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
