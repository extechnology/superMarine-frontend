import { create } from "zustand";

type AuthTab = "login" | "register" | "reset";

interface ModalStore {
  isLoginOpen: boolean;
  activeTab: AuthTab;
  openLogin: (tab?: AuthTab) => void;
  closeLogin: () => void;
  setTab: (tab: AuthTab) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isLoginOpen: false,
  activeTab: "login",
  openLogin: (tab = "login") => set({ isLoginOpen: true, activeTab: tab }),
  closeLogin: () => set({ isLoginOpen: false }),
  setTab: (tab) => set({ activeTab: tab }),
}));
