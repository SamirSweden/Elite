"use client";

import Link from "next/link";
import TokenBtn from "../components/UI/TokenBtn";
import { Home } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [token, setToken] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/api/verify-token", {
      method: "POST",
      body: JSON.stringify({ token }),
    });

    if (res.ok) {
      localStorage.setItem("token", token);
      router.push("/plans");
    } else {
      alert("invalid token");
    }
  };

  return (
    <>
      <section className="h-screen bg-gradient-to-br from-[#000] to-red-950 backdrop-blur-lg ">
        <div className="container">
          <div className="flex items-center justify-center h-full ">
            <div className="max-w-[400px] w-full">
              

              <input
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Вставь токен"
                className="!mb-5 !py-3 !px-5 bg-transparent rounded-2xl w-full outline-none border border-gray-500"
              />
                <TokenBtn />
              <button onClick={handleLogin} className="bg-transparent w-full !mb-[20px] 
               border border-gray-200 hover:bg-white hover:text-black !py-[30px] px-[100px] rounded-4xl cursor-pointer">
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
