import { Wallet, BookOpen, FileText, Map } from "lucide-react";
import Link from "next/link";


const data = [
    {
        id:1,
        title:"What are crypto wallets?",
        icon:Wallet
    },
    {
        id:2,
        title:"Step-by-step Ethereum guides",
        icon:BookOpen
    },
    {
        id:3,
        title:"Ethereum Whitepaper",
        icon:FileText
    },
    {
        id:4,
        title:"Ethereum roadmap",
        icon:Map
    },
];



const EthCard = () =>{
    return (
        <>
            <div className="card grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
                {data.map((d) => {
                    const Icon = d.icon;

                    return (
                        <Link href={'/'} key={d.id} className={'card  border shadow-2xl shadow-[#909090] hover:shadow-yellow-500 transition transform duration-300 hover:-translate-x-3 hover:-translate-y-3  border-gray-800  w-full  flex items-center w-50 gap-7  rounded-xl bg-[#111] !p-1 '}>
                            <Icon size={60}/>
                            <span>{d.title}</span>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}


export default EthCard