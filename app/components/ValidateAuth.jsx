import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import axios from "axios";

const ValidateAuth = () => {
  const { isAuth, isloading, setIsAuth, setUser, setIsLoading } =
    useAuthStore();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/me", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setIsAuth(true);
          setUser(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [setIsAuth, setIsLoading, setUser]);
  return <></>;
};
export default ValidateAuth;
