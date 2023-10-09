"use client";
import Loading from "@/app/loading";
import React, { useEffect, useState } from "react";

export default function PreLoader({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return <>{isVisible ? <Loading /> : children}</>;
}
