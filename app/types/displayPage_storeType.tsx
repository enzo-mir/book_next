type displayPage_type = "book" | "portfolio";

export type displayPage_store_type = {
  mainPage: displayPage_type;
  setMainPage(val: displayPage_type): void;
};
