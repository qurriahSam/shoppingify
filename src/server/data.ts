import { Category, HistoryListTitle, HistoryListItemsFull } from '../types/types';

export const listItems: Category[] = [
  {
    category: 'fruit and vegetables',
    items: [
      { id: '1', name: 'Avocado' },
      { id: '2', name: 'Bananas' },
      { id: '3', name: 'Cabbage' },
      { id: '4', name: 'skuma' },
      { id: '5', name: 'grapes' },
      { id: '1', name: 'Spaghetti 250g' },
      { id: '3', name: 'Cabbage' },
      { id: '4', name: 'cucumber' },
      { id: '5', name: 'grapes' },
      { id: '2', name: 'Bananas' },
    ],
  },
  {
    category: 'Beverages',
    items: [
      { id: '6', name: 'Soda Water 500ml' },
      { id: '7', name: 'Beer' },
      { id: '8', name: 'Water' },
      { id: '9', name: 'Wine' },
      { id: '10', name: 'Juice' },
    ],
  },
  {
    category: 'Meat & Fish',
    items: [
      { id: '1', name: 'Avocado' },
      { id: '2', name: 'Bananas' },
      { id: '3', name: 'Cabbage' },
      { id: '4', name: 'skuma' },
      { id: '5', name: 'grapes' },
      { id: '1', name: 'Avocados' },
      { id: '3', name: 'Cabbage' },
      { id: '4', name: 'skuma' },
      { id: '5', name: 'grapes' },
      { id: '2', name: 'Bananas' },
    ],
  },
  {
    category: 'pets',
    items: [
      { id: '1', name: 'Avocado' },
      { id: '2', name: 'Bananas' },
      { id: '3', name: 'Cabbage' },
      { id: '4', name: 'skuma' },
      { id: '5', name: 'grapes' },
      { id: '1', name: 'Avocados' },
      { id: '3', name: 'Cabbage' },
      { id: '4', name: 'skuma' },
      { id: '5', name: 'grapes' },
      { id: '2', name: 'Bananas' },
    ],
  },
];

export const listHistory: HistoryListTitle[] = [
  {
    id: '1',
    name: 'wedding',
    date: '3 March 2023',
    status: 'complete',
  },
  {
    id: '2',
    name: 'birthday',
    date: '3 April 2023',
    status: 'incomplete',
  },
  {
    id: '3',
    name: 'graduation',
    date: '3 May 2023',
    status: 'complete',
  },
  {
    id: '4',
    name: 'burial',
    date: '3 June 2023',
    status: 'complete',
  },
];

export const historyListItems: HistoryListItemsFull = {
  title: {
    id: '4',
    name: 'burial',
    date: '3 June 2023',
    status: 'completed',
  },
  goods: [
    {
      category: 'pets',
      items: [
        { count: 1, item: { id: '14', name: 'skuma' } },
        { count: 2, item: { id: '15', name: 'skuma' } },
        { count: 3, item: { id: '16', name: 'skuma' } },
        { count: 4, item: { id: '17', name: 'skuma' } },
        { count: 5, item: { id: '18', name: 'skuma' } },
        { count: 1, item: { id: '19', name: 'skuma' } },
        { count: 3, item: { id: '24', name: 'skuma' } },
        { count: 4, item: { id: '34', name: 'skuma' } },
        { count: 5, item: { id: '44', name: 'skuma' } },
        { count: 2, item: { id: '54', name: 'skuma' } },
      ],
    },
    {
      category: 'beverages',
      items: [
        { count: 1, item: { id: '14', name: 'skuma' } },
        { count: 2, item: { id: '15', name: 'skuma' } },
        { count: 3, item: { id: '16', name: 'skuma' } },
        { count: 4, item: { id: '17', name: 'skuma' } },
        { count: 5, item: { id: '18', name: 'skuma' } },
        { count: 1, item: { id: '19', name: 'skuma' } },
        { count: 3, item: { id: '24', name: 'skuma' } },
        { count: 4, item: { id: '34', name: 'skuma' } },
        { count: 5, item: { id: '44', name: 'skuma' } },
        { count: 2, item: { id: '54', name: 'skuma' } },
      ],
    },
    {
      category: 'meat & fish',
      items: [
        { count: 1, item: { id: '14', name: 'skuma' } },
        { count: 2, item: { id: '15', name: 'skuma' } },
        { count: 3, item: { id: '16', name: 'skuma' } },
        { count: 4, item: { id: '17', name: 'skuma' } },
        { count: 5, item: { id: '18', name: 'skuma' } },
        { count: 1, item: { id: '19', name: 'skuma' } },
        { count: 3, item: { id: '24', name: 'skuma' } },
        { count: 4, item: { id: '34', name: 'skuma' } },
        { count: 5, item: { id: '44', name: 'skuma' } },
        { count: 2, item: { id: '54', name: 'skuma' } },
      ],
    },
  ],
};
