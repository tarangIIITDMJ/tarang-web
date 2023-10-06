"use client";
import { useEffect } from "react";
import { veryfyEmail } from "../utils/apis";

function VerificationSuccess() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  useEffect(() => {
    const verifyEmailHandler = async () => {
      try {
        const response = await veryfyEmail(code);
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
  return <div>page</div>;
}

export default VerificationSuccess;
