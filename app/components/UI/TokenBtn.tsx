"use client";

import { useState } from "react";

export default function TokenBtn() {
  const [token, setToken] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("/api/generate-token", {
      method: "POST",
    });

    const data = await res.json();
    setToken(data.token);
  };

  return (
    <>
      <div className="flex items-center w-full flex-col  ">

        

        {token && (
          <div className="bg-transparent w-full border border-gray-700 !py-2 !px-4 rounded-4xl !mb-4">
            <code>{token}</code>
          </div>
        )}

        <button
          className="bg-gradient-to-br w-full !mb-[20px]  from-[#0073E5] to-[#3e00e9] !py-[30px] px-[100px] rounded-4xl cursor-pointer"
          onClick={handleGenerate}
        >
          <pre>generate token</pre>
        </button>

        <div className="fixed bottom-[70px]">
          <p className="text-gray-400 text-sm text-wrap max-[447px]:px-[20px] !py-[5px] !px-[10px] border border-gray-600 backdrop-blur-3xl rounded-3xl bg-gradient-to-br from-gray-600  to-black">
            copy token and do not share
          </p>
        </div>
      </div>
    </>
  );
}
