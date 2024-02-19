export interface Item {
  _id: string;
  name: string;
  note: string;
  image: string;
}

export enum Status {
  initial = 'initial',
  loading = 'loading',
  updated = 'updated',
  failed = 'failed',
}

export interface Category {
  _id: string;
  category: string;
  items: Item[];
  __v: number;
}

export interface HistoryItem {
  item: Item;
  count: number;
}

export interface HistoryListItems {
  category: string;
  items: HistoryItem[];
}

export interface HistoryListItemsFull {
  title: HistoryListTitle;
  goods: HistoryListItems[];
}

export interface HistoryListTitle {
  id: string;
  title: string;
  date: string;
  status: string;
}

//shopping list

export interface ShoppingItem {
  _id: string;
  name: string;
  count: number;
  complete: boolean;
}

export interface ShoppingItemCategory {
  _id: string;
  category: string;
  items: ShoppingItem[];
}

export interface ShoppingList {
  _id: string;
  update: Status;
  title: string;
  list: ShoppingItemCategory[];
  status: string;
  current: boolean;
  date: string;
  __v: number;
}
