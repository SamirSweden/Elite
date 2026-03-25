

const bannerText = {
    title: "Learn more about stablecoins",
    text: "Dashboard & Education"
}

export default  function Learn(){
    return(
        <>
            <section className="learn bg-black !py-[50px] !px-0">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className={''}>
                            <h1 className={'font-mono text-5xl !mb-6 text-wrap'}>{bannerText.title}</h1>
                            <p className={'text-wrap text-2xl !mb-4'}>{bannerText.text}</p>
                            <hr/>
                            <div>

                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </section>
        </>
    )
}

