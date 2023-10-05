import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuth: false,
  user: null,
  isloading: true,
  setIsAuth: (isAuth) => set({ isAuth }),
  setUser: (user) => set({ user }),
  setIsLoading: (isloading) => set({ isloading }),
}));
