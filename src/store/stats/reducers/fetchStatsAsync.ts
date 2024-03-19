import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ShoppingItemCategory, ShoppingList, Status } from '../../../types/types';

const fetchStats = createAsyncThunk(
  'stats/fetchStats',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async () => {
    //const URL = process.env.REACT_APP_API_URL;
    try {
      const response = await axios('http://localhost:3000/stats');
      if (response.data === null) {
        return {
          status: Status.initial,
          categories: [],
          months: {},
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cats = response.data.categories.map((cat: any) => ({ ...cat, items: {} }));

      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      const monthsData: { [key: string]: number } = {
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
      };

      response.data.shoppingLists.forEach((shoppingList: ShoppingList) => {
        const date = new Date(shoppingList.date);
        const month = months[date.getMonth()];

        shoppingList.list.forEach((shoppingItemCat: ShoppingItemCategory) => {
          shoppingItemCat.items.forEach((item) => {
            if (item.complete) {
              monthsData[month] += item.count;
              cats.forEach((cat: { category: string }, index: number) => {
                if (cat.category === shoppingItemCat.category) {
                  if (cats[index].items[`${item.name}`]) {
                    cats[index].items[`${item.name}`] =
                      cats[index].items[`${item.name}`] + item.count;
                  } else {
                    cats[index].items = { ...cats[index].items, [`${item.name}`]: item.count };
                  }
                }
              });
            }
          });
        });
      });
      return { status: Status.updated, categories: cats, months: monthsData };
    } catch (error) {
      console.log(error);
    }
  }
);

export default fetchStats;
