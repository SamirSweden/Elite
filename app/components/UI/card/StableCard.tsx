import {ChartArea, FolderKey, Globe, Handshake} from "lucide-react"

const data = [
    {
        id:1,
        icon:Globe,
        text: "Stablecoins are global, and can be sent over the internet. They're easy to receive or send once you have an Ethereum account."
    },
    {
        id:2,
        icon:ChartArea,
        text: "Demand for stablecoins is high, so you can earn interest for lending yours. Make sure you're aware of the risks before lending."
    },
    {
        id:3,
        icon:Handshake,
        text: "Stablecoins are exchangeable for ETH and other Ethereum tokens. Lots of dapps rely on stablecoins."
    },
    {
        id:4,
        icon:FolderKey,
        text: "Stablecoins are secured by cryptography. No one can forge transactions on your behalf."
    },
];


const StableCard = () => {
    return (
        <>
            {data.map((d) => {
                const Icon = d.icon;

                return (
                    <div key={d.id} className={'grid grid-cols-1 gap-4 max-[715px]:grid-cols-1 max-[715px]:w-full'}>
                        <Icon size={50} className={''} />
                        <p className={'font-mono text-lg !mb-4 text-gray-500 w-[80%] text-justify'}>{d.text}</p>
                    </div>
                )
            })}
        </>
    )
}


export default StableCard

