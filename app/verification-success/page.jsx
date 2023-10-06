<<<<<<< Updated upstream
import { useEffect } from "react";
import { veryfyEmail } from "../utils/apis";
=======
"use client";
import { useEffect } from "react";
import { verifyEmail } from "../utils/apis";
import { useSearchParams } from "next/navigation";
>>>>>>> Stashed changes

function VerificationSuccess() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  useEffect(() => {
    const verifyEmailHandler = async () => {
      try {
<<<<<<< Updated upstream
        const response = await veryfyEmail(code);
=======
        const response = await verifyEmail(code);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  return <div>page</div>;
=======
  return <div>User Verified!!</div>;
>>>>>>> Stashed changes
}

export default VerificationSuccess;
