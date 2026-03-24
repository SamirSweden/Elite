import {MoveUpRight} from "lucide-react";


const buttonContent = {
    label: "Learn about Ethereum",
    icon:MoveUpRight
}

const Icon = buttonContent.icon

const EthBtn = () => {
    return <>
        <button
            className={'bg-gradient-to-br from-purple-600  via-red-600 shadow-lg shadow-cyan-500/50 hover:shadow-orange-600/80    to-gray-800 text-white cursor-pointer hover:bg-white hover:text-black  transition transform duration-300 hover:-translate-y-3   rounded-4xl py-4.5! px-7.5! max-[435px]:w-full flex items-center gap-2 max-[435px]:justify-center'}
        >
            <span className={'text-center'}>{buttonContent.label}</span>
            <Icon />
        </button>
    </>
}


export default EthBtn
