"use client";

import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

import { useRouter } from "next/navigation";

// app/login/page.js
export default function LoginPage() {
    const router = useRouter();
    return (
        <div className="flex min-h-screen flex-col justify-between bg-gray-100">
        {/* Centered Login Box */}
        <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-md">
            <h1 className="mb-6 text-center text-2xl font-bold text-gray-700">
                Login
            </h1>

            <form className="space-y-4">
                {/* Email */}
                <div>
                <Input label="Email" type="email" placeholder="Enter your email" />
                </div>

                {/* Password */}
                <div>
                <Input label="Password" type="password" placeholder="Enter your password" />
                </div>

                {/* Submit */}
                <Button onClick={() => router.push("/")}>
                Login
                </Button>
            </form>
            </div>
        </div>
        <Footer />
        </div>
  );
}
