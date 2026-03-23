"use client";

import TokenBtn from "../components/UI/TokenBtn";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginPage = () => {
  const [token, setToken] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/api/verify-token", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    console.log(res.status);
    

    if (res.ok) {
      document.cookie = `token=${token};path=/`;

      router.push("/panel")
      
    } else {
      toast.error("invalid token");
    }
  };

  return (
    <>
      <section className="h-screen bg-gradient-to-br from-[#000] to-red-950 backdrop-blur-lg ">
        <div className="container">
          <div className="flex items-center justify-center h-full ">
            <div className="max-w-[400px] w-full">
              <div className="flex items-center flex-col gap-[20px] !mb-8">
                <h2 className="text-center text-white  text-4xl  text-wrap"  style={{fontSize:"clamp(1.1rem,6vw,2.25rem)"}}>
                 &mdash; Welcome Back &mdash;
                </h2>
                <p className="text-center text-xs text-gray-400 text-wrap">
                  Want to have more options on website functionality? For this
                  you need to log in with your token
                </p>
              </div>

              <input
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="enter token"
                className="!mb-5 !py-3 !px-5 bg-transparent rounded-2xl w-full outline-none border border-gray-500"
              />
              <TokenBtn />
              <button
                onClick={handleLogin}
                className="bg-transparent w-full !mb-[20px] 
               border border-gray-200 hover:bg-white hover:text-black !py-[30px] px-[100px] rounded-4xl cursor-pointer"
              >
                Login with token
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
