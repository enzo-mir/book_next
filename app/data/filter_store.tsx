import { create } from "zustand";
import { filter_store_type } from "../types/filterType";

export const filter_store = create<filter_store_type>((set) => ({
  filter: {
    date: "recent",
    type: "all",
    tags: [],
    search: "",
  },
  setFilter: (val) => set(() => ({ filter: val })),
}));
