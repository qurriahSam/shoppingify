export interface Item {
  _id: string;
  name: string;
}

export interface Category {
  _id: string;
  category: string;
  items: Item[];
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
  name: string;
  date: string;
  status: string;
}
