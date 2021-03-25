import Box from "ui-box";

export interface Settings {
  _id: string;
  live: boolean;
}

export type DivProps = React.ComponentPropsWithoutRef<typeof Box>;

export type SortByType = "Relevance" | "Price Low-High" | "Price High-Low";
export const SORT_BY: { [key: string]: SortByType } = {
  Default: "Relevance",
  Relevance: "Relevance",
  PriceHigh: "Price High-Low",
  PriceLow: "Price Low-High",
};
export const SORT_BY_LIST = [
  SORT_BY.Relevance,
  SORT_BY.PriceHigh,
  SORT_BY.PriceLow,
];

export type ItemsPerPageType = 25 | 50 | 250 | 500;

export const ITEMS_PER_PAGE: { [key: string]: ItemsPerPageType } = {
  Default: 25,
  MIN: 25,
  MID: 50,
  MOST: 250,
  MAX: 500,
};

export const ITEMS_PER_PAGE_LIST = [
  ITEMS_PER_PAGE.MIN,
  ITEMS_PER_PAGE.MID,
  ITEMS_PER_PAGE.MOST,
  ITEMS_PER_PAGE.MAX,
];

export interface Preferences {
  sortBy: SortByType;
  itemsPerPage: ItemsPerPageType;
  viewImages: boolean;
  hideOOS: boolean;
}

export interface ImportProduct {
  sku?: string;
  upc?: string;
}
export interface Import {
  data: ImportProduct[];
}
