import { create } from "zustand";

const useUserStore = create((set) => ({
  userId: null,
  nickname: null,

  setUserInfo: (userId, nickname) =>
    set({ userId: userId, nickname: nickname }),
  clearUserInfo: () => set({ userId: null, nickname: null }),
}));

export default useUserStore;
