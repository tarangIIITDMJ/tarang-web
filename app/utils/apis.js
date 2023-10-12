import axios from "axios";

export const login = (email, password) => {
  return axios.post(
    "https://tarang-backend.onrender.com/api/login",
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
};

export const register = (userDetails) => {
  return axios.post(
    "https://tarang-backend.onrender.com/api/register",
    {
      ...userDetails,
    },
    {
      withCredentials: true,
    }
  );
};

export const verifyEmail = (token) => {
  return axios.put(`https://tarang-backend.onrender.com/api/verify/${token}`);
};
export const getUser = () => {
  return axios.get("https://tarang-backend.onrender.com/api/user", {
    withCredentials: true,
  });
};

/* Events */
export const getAllEvents = () => {
  return axios.get("https://tarang-backend.onrender.com/api/events");
};

export const getEvent = (eventSlug) => {
  return axios.get(
    `https://tarang-backend.onrender.com/api/events/${eventSlug}`
  );
};

export const verifyPayment = (tarangID) => {
  return axios.put(
    `http://localhost:5000/api/admin/verify`,
    {
      tarangID,
    },
    {
      withCredentials: true,
    }
  );
};
