import type { Metadata } from "next";
import Header from "../components/shared/header/Header";
import React from "react";


export const metadata: Metadata = {
  title: "comments page",
  description: "comments x.com",
};

export default function CommentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return 
  <>
    
    <main>
      {children}
    </main>
  </>;
}
