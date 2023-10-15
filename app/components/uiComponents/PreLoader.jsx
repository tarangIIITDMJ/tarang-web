"use client";
import React, { useEffect, useState } from "react";
import Customloader from "./Customloader";

export default function PreLoader() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 1100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <>{isVisible && <Customloader />}</>;
}
