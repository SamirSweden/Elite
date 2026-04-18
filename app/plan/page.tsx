
const data = [
    {
        id: 1,
        title: "Lite",
        text: "Интеллект для повседневных задач",
        price: "0",
        btnText: "get go",
        desc: "Ограниченные сообщения и загрузки"
    },
    {
        id: 2,
        title: "Boss",
        text: "Больше сообщений",
        price: "10",
        btnText: "get go",
        desc: "Более расширенная память"
    },
    {
        id: 3,
        title: "Man",
        text: "Интеллект для повседневных задач",
        price: "500",
        btnText: "get go",
        desc: "Ограниченные сообщения и загрузки"
    },
    {
        id: 4,
        title: "Luxury",
        text: "Интеллект для повседневных задач",
        price: "2000",
        btnText: "get go",
        desc: "Ограниченные сообщения и загрузки"
    },
];



const Plan = () => {
    return (
        <>
            <section className={'!py-12 !px-0'}>
                <div className="max-w-7xl !mx-auto !px-4 w-full h-full">
                    <div className="grid grid-cols-4 gap-5 items-stretch max-[1044px]:grid-cols-3 max-[768px]:grid-cols-2 max-[525px]:grid-cols-1">

                        {data.map((d) => (
                            <div key={d.id} className={'!py-6 !px-6 bg-[#111] rounded-2xl flex items-start  gap-[40px] flex-col h-full'}>
                                <h3 className={'text-white text-3xl font-black'}>{d.title}</h3>
                                <p className={'text-wrap text-white text-lg font-semibold text-start'}>{d.text}</p>
                                <h4 className={'text-4xl text-white '}>${d.price} <span className={'text-sm text-gray-600'}>/mo</span></h4>
                                <p className={'text-lg text-gray-400 text-wrap !mt-auto  '}>{d.desc}</p>
                                <button className={' bg-white !mt-auto pt-10 text-black !py-6 !px-6 rounded-xl w-full capitalize hover:bg-white/45 '}>{d.btnText}</button>
                            </div>
                        ) )}

                    </div>
                </div>
            </section>
        </>
    )
}


export default Plan


