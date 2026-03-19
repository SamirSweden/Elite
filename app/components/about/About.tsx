import Acard from "../UI/card/Acard"





const About = () => {
    return (
        <>
            <section className="about !py-[100px] px-0">
                <div className="container">
                    <h2 className="about__h2 text-4xl text-center text-gray-600 !mb-3 max-[429px]:text-2xl">
                      &mdash;  Why Overload.su? &mdash;
                    </h2>
                    <p className="text-center text-wrap text-[17px] !mb-6 text-gray-200 max-[430px]:text-[15px]">Discover why 30,000 clients already trust us</p>
                    <div className="about__wrap grid grid-cols-3 !gap-[30px] max-[1183px]:grid-cols-2 max-[794px]:grid-cols-1 w-full">
                        <Acard />
                    </div>
                </div>
            </section>
        </>
    )
}


export default About