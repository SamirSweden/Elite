

import  type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Plans",
    description:"plans page",
};

export default function PlanLayout({
    children,
    }: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
