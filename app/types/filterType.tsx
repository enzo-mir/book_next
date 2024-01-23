export type filterType = {
  date: "old" | "recent";
  platform: "frontendmentor" | "personnal" | "all";
  type: "frontend" | "fullstack" | "all";
  search: string;
};

export type filter_store_type = {
  filter: filterType;
  setFilter(val: filterType): void;
};
