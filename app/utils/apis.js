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

export const registerEvent = (eventSlug, teamName) => {
  return axios.post(
    `https://tarang-backend.onrender.com/api/events/register`,
    {
      slug: eventSlug,
      teamName,
    },
    {
      withCredentials: true,
    }
  );
};

export const removeRegisteredEvent = (eventSlug) => {
  return axios.delete(`https://tarang-backend.onrender.com/api/events/remove`, {
    data: { slug: eventSlug },
    withCredentials: true,
  });
};

export const logout = () => {
  return axios.get("https://tarang-backend.onrender.com/api/logout", {
    withCredentials: true,
  });
};

export const verifyPayment = (tarangID) => {
  return axios.put(
    `https://tarang-backend.onrender.com/api/admin/verify`,
    {
      tarangID,
    },
    {
      withCredentials: true,
    }
  );
};

export const rejectPayment = (tarangID, comments) => {
  return axios.put(
    `https://tarang-backend.onrender.com/api/admin/reject`,
    {
      tarangID,
      rejectionReason: comments,
    },
    {
      withCredentials: true,
    }
  );
};

export const getUnverifiedUsers = () => {
  return axios.get(`https://tarang-backend.onrender.com/api/admin/unverified`, {
    withCredentials: true,
  });
};

export const getRejectedUsers = () => {
  return axios.get(`https://tarang-backend.onrender.com/api/admin/rejected`, {
    withCredentials: true,
  });
};

export const updateRejection = (tarangID) => {
  return axios.put(
    `https://tarang-backend.onrender.com/api/admin/updateRejection`,
    {
      tarangID,
    },
    {
      withCredentials: true,
    }
  );
};
