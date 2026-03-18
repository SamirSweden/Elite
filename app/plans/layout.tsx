import { Metadata } from "next"
import Footer from "../components/footer/Footer"

export type { Metadata } from "next"


export const metadata: Metadata = {
    title:"Elite | Plans"
}

export default function PlanLayout({children}: {children: React.ReactNode}){
    return <>{children}
    <Footer />
    </>
}









