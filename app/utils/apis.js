import axios from "axios";
export const login = (email, password) => {
  console.log({ email, password });
  return axios.post("https://tarang-backend.onrender.com/api/login", {
    email,
    password,
  });
};

export const register = (userDetails) => {
  return axios.post("https://tarang-backend.onrender.com/api/register", {
    ...userDetails,
  });
};

// export const getProfile = () => {
//   return axios.get("http://localhost:5000/api/profile");
// };
