import { create } from "zustand";
import { displayPage_store_type } from "../types/displayPage_storeType";

export const displayMainPage = create<displayPage_store_type>((set) => ({
  mainPage: "portfolio",
  setMainPage: (val) => set(() => ({ mainPage: val })),
}));
