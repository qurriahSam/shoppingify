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
  _id: string;
  name: string;
  complete: boolean;
  count: number;
}

export interface HistoryListItems {
  category: string;
  items: HistoryItem[];
  _id: string;
}

export interface HistoryListItemsFull {
  title: HistoryListTitle;
  status: Status;
  goods: HistoryListItems[];
}

export interface HistoryListTitle {
  _id: string;
  title: string;
  date: string;
  status: string;
}

export interface IHistoryState {
  _id: string;
  stateStatus: Status;
  title: string;
  list: HistoryListItems[];
  status: string;
  current: boolean;
  date: string;
  __v: number;
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
  userId: string;
  update: Status;
  title: string;
  list: ShoppingItemCategory[];
  status: string;
  current: boolean;
  date: string;
  __v: number;
}
