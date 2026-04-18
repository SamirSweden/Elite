'use client'

import Navigation from "@/app/components/UI/nav/Navigation";
import Image from "next/image";
import {useRouter} from "next/navigation";

const bannerContent = {
    title: "What is layer 2?",
    desc: "Scaling Ethereum for mass adoption"
}

const btnContent = {
    labelst: "what's layer 2 ",
    labelnd: "use layer 2"
}

const whatsLayer = {
    title: "What is layer 2?",
    desc: "Layer 2 (L2) is a collective term to describe a specific set of Ethereum scaling solutions. A layer 2 is a separate blockchain that extends Ethereum and inherits the security guarantees of Ethereum.",
    text: "Now let’s dig into it a bit more. To do this we first need to explain layer 1 (L1)."
}

const bannerImg = "https://ethereum.org/_next/static/media/learn-hero.e726bea4.png"
const whatsLayerImg = "https://ethereum.org/_next/static/media/what-is-ethereum.b37ce60e.png"

const TwoButton = () => {
    const router = useRouter()

    return (
        <>
            <div className="flex items-center gap-3 max-[450px]:w-full max-[924px]:!mb-7">
                <button
                    className={'font-mono rounded-xl cursor-pointer hover:bg-blue-600  bg-violet-700 max-[450px]:w-full !py-[10px] !px-[30px] text-center '}
                    onClick={() => router.push("/")}
                >
                    {btnContent.labelst}
                </button>
            </div>
        </>
    )
}

const WhatsLayerTwo = () => {
    return(
        <>
            <section className="whats__layer !py-[100px] ">
                <div className="container">
                    <div className="flex items-center justify-between  max-[924px]:flex-col">
                        <div className="max-w-[600px] w-full flex items-start gap-[30px] flex-col">
                            <h2 className={'text-5xl   max-[500px]:text-2xl text-cyan-800 text-wrap font-mono capitalize'}>{whatsLayer.title}</h2>
                            <p className={'text-white text-lg text-justify font-mono text-wrap'}>{whatsLayer.desc}</p>
                            <p className={'text-gray-400 text-sm font-mono text-wrap'}>{whatsLayer.text}</p>
                        </div>
                        <Image src={whatsLayerImg} width={500} height={500}  alt={'whats layer 2 '} />
                    </div>
                </div>
            </section>
        </>
    )
}

const LayerTwo = () => {
    return (
        <>
            <Navigation/>
            <section className={'layer !py-[100px] h-screen '}>
                <div className="container">
                    <div className={'flex items-center justify-between h-full  max-[924px]:flex-col'}>
                        <div className={' w-full'}>
                            <div className="flex items-center gap-2 !mb-7">
                                <span className={'uppercase text-xl '}>layer2</span>/
                                <span className={'text-sm text-gray-600'}>learn</span>
                            </div>

                            <h2 className={'font-mono text-wrap !mb-5 text-5xl text-transparent bg-clip-text bg-gradient-to-br from-pink-700 via-cyan-400 to-pink-500'}>{bannerContent.title}</h2>
                            <p className={'font-semibold text-xl text-wrap !mb-[20px] '}>{bannerContent.desc}</p>
                            <TwoButton/>
                        </div>

                        <Image src={bannerImg} width={900} height={900} alt={'layer'} />

                    </div>
                    <WhatsLayerTwo/>
                </div>
            </section>

        </>
    )
}

export default LayerTwo



