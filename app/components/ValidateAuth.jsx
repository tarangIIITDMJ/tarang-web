import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { getUser } from "../utils/apis";

const ValidateAuth = ({ children }) => {
  const { isAuth, isloading, setIsAuth, setUser, setIsLoading } =
    useAuthStore();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getUser();
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
  if (isloading) return <div>Loading...</div>;
  else if (isAuth) return children;
  else return <div>Not Authenticated</div>;
};
export default ValidateAuth;
