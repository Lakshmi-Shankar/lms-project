"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import DashboardLayout from "../components/layout/Dashboard";
import Button from "../components/global/Button";
import Input from "../components/global/Input";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/signup");
  // }, [router]);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Welcome to LMS</h1>
      <Input label="Your Name" placeholder="Enter name" />
      <Button variant="primary">Submit</Button>
    </DashboardLayout>
  );
}
