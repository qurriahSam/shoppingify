export interface Item {
  id: string;
  name: string;
}

export interface Category {
  category: string;
  items: Item[];
}
