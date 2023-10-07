"use client";

import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { getUser } from "../utils/apis";

export const CheckUser = () => {
  const { setIsAuth, setUser, setIsLoading } = useAuthStore();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getUser();
        if (res.status === 200) {
          setIsAuth(true);
          setUser(res.data.user);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        setIsAuth(false);
        setUser(null);
      }
    };
    checkAuth();
  }, [setIsAuth, setIsLoading, setUser]);
  return <></>;
};
