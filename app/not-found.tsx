'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"



const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    },2000)

    return () => clearInterval(timer)

  },[router])

  return <>
    <section className="min-h-screen bg-black !py-12 !px-0">
      <div className="max-w-7xl !mx-auto !px-4 md:px-6 w-full">
        <div className="flex items-center justify-center flex-col h-full gap-14">
          <h1 className="text-5xl text-white "> Not found - 404</h1>
          <button onClick={() => router.push('/')}>
            Home page
          </button>
        </div>
      </div>
    </section>
  </>

}



export default NotFound









