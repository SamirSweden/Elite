"use client";



const LoginContent = {
  btnText: "Login",
  textBottom: "Ryan"
}

export default function TokenBtn() {


  return (
    <>
      <div className="flex items-center w-full flex-col  ">

        <button
          className=" w-full font-mono transition transform duration-300 hover:-translate-y-3  !mb-[20px]  bg-white text-black !py-[30px] px-[100px] rounded-4xl cursor-pointer"
        >
          <pre>{LoginContent.btnText}</pre>
        </button>

        <div className="fixed bottom-[70px]">
          <p className="text-gray-400 text-sm text-wrap max-[447px]:px-[20px] !py-[5px] !px-[10px] border border-gray-600 backdrop-blur-3xl rounded-3xl bg-gradient-to-br from-gray-600  to-black">
            Elite.su &mdash; {LoginContent.textBottom}
          </p>
        </div>
      </div>
    </>
  );
}
