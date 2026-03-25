"use client";

import TokenBtn from "../components/UI/TokenBtn";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginPage = () => {
  const [email , setEmail] = useState("");
  const [code , setCode] = useState("")
  const [step , setStep] = useState<"email" | "code">("email");
  const [loading , setLoading] = useState(false);
  const router = useRouter();

  const sendCode= async () => {
    if(!email) {
      toast.error("Please enter a valid email");
      return;
    }
    setLoading(true)

    const res = await fetch("/api/auth/send-code" , {
      method:"POST",
      body: JSON.stringify({ email })
    })

    setLoading(false)

    if(res.ok) {
      toast.success("Code Successfully sent to email");
      setStep("code");
    } else {
      toast.error("Something went wrong")
    }
  }

  const verifyCode = async () => {
    if (!code) {
      toast.error("Enter code");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/auth/verify-code", {
      method: "POST",
      body: JSON.stringify({ email, code }),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Logged in 🎉");
      router.push("/crypto")
    } else {
      toast.error("Invalid code");
    }
  };


  return (
    <>
      <section className="h-screen bg-gradient-to-br from-[#000] to-red-950">
        <div className="container">
          <div className="flex items-center justify-center h-full">
            <div className="max-w-[400px] w-full">

              <div className="flex items-center flex-col gap-[20px] mb-8">
                <h2
                    className="text-center text-white text-4xl"
                    style={{ fontSize: "clamp(1.1rem,6vw,2.25rem)" }}
                >
                  &mdash; Welcome Back &mdash;
                </h2>

                <p className="text-center text-xs text-gray-400">
                  Login with email code
                </p>
              </div>

              {step === "email" && (
                  <>
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="!mb-5 !py-3 !px-5 bg-transparent rounded-2xl w-full outline-none border border-gray-500 text-white"
                    />

                    <button
                        onClick={sendCode}
                        disabled={loading}
                        className="w-full !py-3 rounded-xl bg-purple-600 text-white hover:bg-pink-500 transition"
                    >
                      {loading ? "Sending..." : "Send code"}
                    </button>
                  </>
              )}

              {step === "code" && (
                  <>
                    <input
                        placeholder="XXX-XXX"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="!mb-5 !py-3 !px-5 bg-transparent rounded-2xl w-full outline-none border border-gray-500 text-white"
                    />

                    <button
                        onClick={verifyCode}
                        disabled={loading}
                        className="w-full !py-3 rounded-xl bg-green-600 text-white hover:bg-green-400 transition"
                    >
                      {loading ? "Checking..." : "Login"}
                    </button>
                  </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
