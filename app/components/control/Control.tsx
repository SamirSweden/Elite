import { Atom, Crown } from "lucide-react"



const Control = () => {
    return (
        <>
            <section className="control__panel !py-[100px] !px-0 bg-transparent">
                <div className="container">
                    <div className="grid grid-cols-[1fr_2fr] gap-5  max-[878px]:grid-cols-2   max-[620px]:grid-cols-1 ">

                        <div className="control__panel-left relative rounded-2xl !py-[35px] !px-[20px] bg-gradient-to-br from-[#210000] to-[#59056c]">
                            <div className="flex items-center  gap-3 !mb-[10px] ">
                                <Crown size={20} className="text-yellow-400" />
                                <h2 className="text-yellow-400 text-xl font-mono "> Control panel </h2>
                                
                                <span className="text-yellow-500 capitalize bg-transparent text-lg absolute right-0 top-0 rotate-25">free</span>
                            </div>
                            <h2 className="!mb-3">Available methods:</h2>
                            <div className="flex items-start flex-col gap-4 ">
                                
                                <div className="flex items-start flex-col w-full gap-2 !py-2.5 !px-4 bg-transparent rounded-lg backdrop-blur-md border border-gray-500">
                                     <span>TLS-SOCKET &mdash; <span className="text-xs"> in dev process </span></span> 
                                     <span>GO-FLOOD  &mdash; <span className="text-xs"> in dev process </span></span>
                                     <span>BROWSER &mdash; <span className="text-xs"> soon </span></span>
                                </div>
                            </div>
                        </div>

                        <div className="control__panel-left max-[620px]:!py-[35px] max-[620px]:!px-[20px] rounded-4xl bg-[#111] flex items-center gap-3 justify-center">
                            <span className="text-center border border-gray-600 rounded-2xl !py-[6px] !px-[9px] ">
                               + panel  soon 
                                
                            </span>
                            <Atom />
                        </div>

                    </div>
                </div> 
            </section>
        </>
    )
}


export default Control