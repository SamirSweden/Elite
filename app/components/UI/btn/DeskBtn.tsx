'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const DeskBtn = () => {
    const {data: session} = useSession()
    const router = useRouter()

    const handleBtn = () => {
        if(!session){
            router.push('/login');
            return
        } 
        router.push('/panel')
    }

    return (
        <>
            <button onClick={handleBtn} className="panel max-[470px]:hidden bg-[#3E8BF3] !py-[8px] !px-[30px] cursor-pointer hover:bg-blue-800  rounded-xl text-white ">
                panel
            </button>
        </>
    )
}


export default DeskBtn

