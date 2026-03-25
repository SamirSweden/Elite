'use client'

import Image from 'next/image';
import StableBtn from "@/app/components/UI/btn/StableBtn";

const bannerContent =  {
    title: "Use your stablecoins",
    text: "Check out Ethereum’s dapps – stablecoins are often more useful for everyday transactions."
}

const imgDoge = "https://ethereum.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdoge-computer.482265f8.png&w=1200&q=75";

const UseCoin = () => {
    return (
        <>
            <section className={'usecoin'}>
                <div className="container">
                    <div className="usecoin grid grid-cols-2  max-[1080px]:grid-cols-1 bg-[#171717] border border-cyan-800 ">
                        <div className="!py-[1px] !px-[30px]">
                            <h2 className={'font-mono text-4xl capitalize !mb-3  bg-gradient-to-br from-pink-700 to-yellow-300 bg-clip-text text-transparent'}>{bannerContent.title}</h2>
                            <p className={'font-mono text-wrap  !mb-[50px]'}>{bannerContent.text}</p>
                            <div className={'flex items-center gap-2  max-[500px]:w-full'}>
                                <StableBtn />
                            </div>
                        </div>
                        <Image src={imgDoge} width={600} height={430} alt={'doge'} className={'max-[1080px]:hidden'}  />
                    </div>
                </div>
            </section>

            <style jsx>{`
                .usecoin{
                    padding:50px 0;
                    border-radius: 10px;
                }
            `}
            </style>
        </>
    )
}


export default UseCoin;







