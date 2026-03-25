'use client'

import { useRouter } from "next/navigation"

const DeskBtn = () => {

    const router = useRouter()

    return (
        <>
            <button
                onClick={() => router.push('/login')}
                className="panel max-[470px]:hidden bg-[#3E8BF3] !py-[8px] !px-[30px] cursor-pointer hover:bg-blue-800  rounded-xl text-white "
            >
                crypto
            </button>
        </>
    )
}


export default DeskBtn

