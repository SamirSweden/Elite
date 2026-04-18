

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
            <main className={'min-h-screen bg-black'}>
                {children}
            </main>
        </>
    );
}
