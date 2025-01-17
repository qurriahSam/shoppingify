import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ShoppingItemCategory,
  ShoppingList,
  Status,
} from '../../../types/types';

const fetchStats = createAsyncThunk(
  'stats/fetchStats',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async () => {
    const URL = process.env.API_URL;
    try {
      const response = await axios(`${URL}/stats`);
      if (response.data === null) {
        return {
          status: Status.initial,
          categories: [],
          months: [],
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cats = response.data.categories.map((cat: any) => ({
        ...cat,
        items: {},
      }));

      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      let monthsData: { month: string; count: number }[] = [
        { month: 'Jan', count: 0 },
        { month: 'Feb', count: 0 },
        { month: 'Mar', count: 0 },
        { month: 'Apr', count: 0 },
        { month: 'May', count: 0 },
        { month: 'Jun', count: 0 },
        { month: 'Jul', count: 0 },
        { month: 'Aug', count: 0 },
        { month: 'Sep', count: 0 },
        { month: 'Oct', count: 0 },
        { month: 'Nov', count: 0 },
        { month: 'Dec', count: 0 },
      ];

      response.data.shoppingLists.forEach((shoppingList: ShoppingList) => {
        const date = new Date(shoppingList.date);
        const month = months[date.getMonth()];

        shoppingList.list.forEach((shoppingItemCat: ShoppingItemCategory) => {
          shoppingItemCat.items.forEach((item) => {
            if (item.complete) {
              monthsData = monthsData.map((m) => {
                if (m.month === month.slice(0, 3)) {
                  m.count += item.count;
                  return m;
                }
                return m;
              });
              cats.forEach((cat: { category: string }, index: number) => {
                if (cat.category === shoppingItemCat.category) {
                  if (cats[index].items[`${item.name}`]) {
                    cats[index].items[`${item.name}`] =
                      cats[index].items[`${item.name}`] + item.count;
                  } else {
                    cats[index].items = {
                      ...cats[index].items,
                      [`${item.name}`]: item.count,
                    };
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
