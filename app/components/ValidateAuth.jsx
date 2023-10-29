import { useAuthStore } from "../store/authStore";
import Loader from "./Loader";
import { usePathname, useRouter } from "next/navigation";

const ValidateAuth = ({ children }) => {
  const { isAuth, isloading, user } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  if (isloading) return <Loader />;
  else if (!isAuth) return router.push("/login");
  else if (isAuth && user.verifyToken != "*") {
    if (pathname == "/verify-email") return children;
    else return router.push("/verify-email");
  } else if (isAuth && user.verifyToken == "*") {
    if (pathname == "/verify-email") return router.push("/profile");
    else if (pathname.split('/')[1] == "/admin" && user.role != "admin")
      return router.push("/profile");
    else return children;
  }
};
export default ValidateAuth;
