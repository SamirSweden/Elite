import Link from "next/link";

const data = [
    {label:"explore dapps" , href:"/apps"},
];

export default  function StableBtn(){
    return(
        <>
            {data.map((d) => (
                <li key={d.href} className={'max-[500px]:w-full'}>
                    <Link href={d.href}
                          className={'max-[500px]:w-full max-[500px]:text-center shadow-lg hover:shadow-yellow-600 inline-block transition transform duration-300 hover:-translate-y-6 cursor-pointer text-white  text-lg !py-[10px] !px-[30px] rounded-xl  hover:bg-pink-500 bg-purple-600 capitalize font-mono '}
                    >
                        {d.label}
                    </Link>
                </li>
            ))}
        </>
    )
}








