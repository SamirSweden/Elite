import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Elite.su | Info",
};

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
