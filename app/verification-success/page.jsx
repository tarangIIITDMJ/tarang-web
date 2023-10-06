"use client";
import { useEffect } from "react";
import { verifyEmail } from "../utils/apis";
import { useSearchParams } from "next/navigation";

function VerificationSuccess() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  useEffect(() => {
    const verifyEmailHandler = async () => {
      try {
        const response = await verifyEmail(code);
        if (response.status === 200) {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (code) {
      verifyEmailHandler();
    }
  }, [code]);
  return <div>User Verified!!</div>;
}

export default VerificationSuccess;
