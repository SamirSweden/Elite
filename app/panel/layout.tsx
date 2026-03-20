
import type { Metadata } from "next"

export const metadata: Metadata = {
    title:'Elite.su - Panel',
}


export default function PanelLayout({children} : {children:React.ReactNode}){
    return <>{children}</>
}

