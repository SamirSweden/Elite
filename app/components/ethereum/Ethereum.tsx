import EthBtn from "@/app/components/UI/btn/EthBtn";
import Image from "next/image";


const bannerContent = {
    title: "What is Ethereum?",
    description:"Ethereum is a decentralized, open source blockchain network and software development platform, powered by the cryptocurrency ether (ETH). Ethereum is the secure, global foundation for a new generation of unstoppable applications.",
    miniText : "The Ethereum network is open to everyone: no permission is required. It has no owner, and is built and maintained by thousands of people, organizations, and users around the world."
}

const ethImg = "https://ethereum.org/_next/static/media/learn-hub-hero-portrait.59e9f7fe.png"

export default  function Ethereum(){
    return(
        <>
            <section className="eth__banner py-25! px-0">
                <div className="container">
                    <div className="banner__inner flex items-center justify-between ">
                       <div className="max-w-150  w-full">
                           <h3 className={'rounded-4xl max-[520px]:text-2xl  bg-purple-900 w-10 mb-4! py-1! px-2! text-pink-400 uppercase '}>network</h3>
                           <h2 className={'font-mono text-5xl mb-7! text-wrap  capitalize '}>{bannerContent.title}</h2>
                           <p className={'mb-6! text-wrap text-lg  font-mono text-justify'}>{bannerContent.description}</p>
                           <p className={'mb-10! text-wrap text-lg  font-mono text-justify'}>{bannerContent.miniText}</p>
                           <div className="flex items-center w-full">
                               <EthBtn />
                           </div>
                       </div>
                        <div className="relative">
                            <Image
                                src={ethImg}
                                width={400}
                                height={400}
                                alt={'ethereum'}
                                className={'object-contain rounded-2xl '}
                                priority
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}



