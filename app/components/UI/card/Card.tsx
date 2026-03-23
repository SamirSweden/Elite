'use client'

const cards = [
    {
        id:1,
        title:"STANDART",
        price:"45",
        conc:"2 concurrents",
        duration:"600 sec. max  duration",
        api:"API excluded",
        days: "5 pentests/day",
        leak:"400 leak results/day",
        info: "For small projects and lightweight test runs."
    },
    {
        id:2,
        title:"TURBO",
        price:"400",
        conc:"8 concurrents",
        duration:"2200 sec. max  duration",
        api:"API excluded",
        days: "8 pentests/day",
        leak: "800 leak results/day",
        info: "Regular runs and peak‑readiness drills."
    },
    {
        id:3,
        title:"BOSS",
        price:"2000",
        conc:"16 concurrents",
        duration:"26000 sec. max  duration",
        api:" API included",
        days: "15 pentests/day",
        leak: "20.000 leak results/day",
        info: "Large staging environments and long‑running campaigns."
    },
];



const Card = () => {
    return (
        <>
            <div className="bg-transparent shadow-2xl  backdrop-blur-3xl grid grid-cols-3 gap-6 max-[768]:grid-cols-1 max-[768]:w-full max-[768]:gap-8">
                {cards.map((card) => (
                    <div key={card.id} className="!p-6 rounded-2xl backdrop-blur-3xl shadow-lg bg-transparent border border-gray-800">
                        <div className="!p-6 rounded-2xl !backdrop-blur-3xl shadow-lg bg-gradient-to-br from-black to-red-900 border border-gray-800">
                            <h3 className="text-white text-lg !mb-3 capitalize font-medium">{card.title}</h3>
                            <h3 className="text-white text-4xl ">${card.price}/<span className="text-sm text-gray-500">mo</span></h3>
                        </div>
                        <div className="!mt-3 !mb-4 ">
                            <p className="text-gray-600 text-sm">Up to 80 Gb/s and over 200k rq/s</p>
                            <div className="flex items-center w-full !py-[10px] px-0">
                                <button className=" hover:-translate-y-3 transition-all duration-300  w-full  text-center text-lg !py-[14px] !px-[40px] hover:bg-white/55 hover:text-white rounded-xl capitalize text-black bg-white/100 cursor-pointer border-none outline-none">purchase</button>
                            </div>
                        </div>
                        <hr className="text-gray-600 " />
                        <div className="!mt-3 flex items-start gap-4 flex-col">
                            <p className="text-gray-400 text-sm">{card.conc}</p>
                            <p className="text-gray-400 text-sm">{card.duration}</p>
                            <p className="text-gray-400 text-sm">{card.api}</p>
                        </div>

                        <hr className="text-gray-600 !mt-3" />
                        <div className="!mt-3 flex items-start gap-4 flex-col">
                            <p className="text-gray-400 text-sm">{card.days}</p>
                            <p className="text-gray-400 text-sm">{card.leak}</p>
                        </div>
                        
                        <hr className="text-gray-600 !mt-3" />
                        <div className="!mt-3 flex items-start gap-4 flex-col">
                            <p className="text-gray-400 text-sm">{card.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


export default Card