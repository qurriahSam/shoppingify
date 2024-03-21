import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Status } from '../../types/types';
import fetchStats from '../../store/stats/reducers/fetchStatsAsync';

function sortObjectValuesAscending(obj: { [key: string]: number }) {
  // Extract values into an array
  const values = Object.values(obj);
  values.sort((a, b) => b - a);
  const top3Values = values.slice(0, 3);

  const sortedArr: { name: string; count: number }[] = [];

  for (const item in obj) {
    top3Values.forEach((num) => {
      if (obj[item] === num) {
        sortedArr.push({ name: item, count: num });
      }
    });
  }
  return sortedArr;
}

function StatsSkeleton({ title }: { title: string }) {
  function ItemsSkel() {
    return (
      <>
        <div className='w-full'>
          <div className='flex justify-between mb-4'>
            <div className='skeleton w-24 h-4'></div>
            <div className='skeleton w-8 h-4'></div>
          </div>
          <div className='skeleton w-full h-3 mb-6'></div>
        </div>
      </>
    );
  }
  return (
    <>
      <h2 className='mb-4'>{title}</h2>
      <ItemsSkel />
      <ItemsSkel />
      <ItemsSkel />
    </>
  );
}

export default function Stats() {
  const stats = useSelector((state: RootState) => state.stats);
  const dispatch = useDispatch<AppDispatch>();

  function getTopItems() {
    let itemsCombined: { [key: string]: number } = {};
    stats.categories.forEach((cat) => {
      itemsCombined = { ...itemsCombined, ...cat.items };
    });
    const total = Object.values(itemsCombined).reduce((total, num) => total + num);
    const sortedItems = sortObjectValuesAscending(itemsCombined);
    return { items: sortedItems, total: total };
  }

  function getTopCategories() {
    const totals = stats.categories
      .map((cat) => {
        let tot = 0;
        for (const num in cat.items) {
          if (Object.prototype.hasOwnProperty.call(cat.items, num)) {
            tot += cat.items[num];
          }
        }
        return { category: cat.category, total: tot };
      })
      .sort((a, b) => b.total - a.total);
    let catTotal = 0;
    totals.forEach((cat) => (catTotal += cat.total));
    const topThree = totals.slice(0, 3);

    return { totals: topThree, catTotal: catTotal };
  }

  useEffect(() => {
    if (stats.status != Status.updated) {
      dispatch(fetchStats());
    }
  });

  return (
    <>
      <div className='flex justify-around flex-col md:flex-row font-medium'>
        <div className='w-full md:mr-16'>
          {stats.status === Status.initial ? (
            <StatsSkeleton title='Top Items' />
          ) : (
            <>
              <h2 className='mb-4'>Top Items</h2>
              {getTopItems().items.map((item, index) => {
                return (
                  <div key={index} className='w-full'>
                    <div className='flex justify-between mb-4 text-sm'>
                      <p>{item.name}</p>
                      <p>{Math.round((item.count / getTopItems().total) * 100)}%</p>
                    </div>
                    <progress
                      className='progress progress-primary w-full block mb-4'
                      value={Math.round((item.count / getTopItems().total) * 100)}
                      max='100'
                    ></progress>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className='w-full'>
          {stats.status === Status.initial ? (
            <StatsSkeleton title='Top Categories' />
          ) : (
            <>
              <h2 className='mb-4'>Top Categories</h2>
              {getTopCategories().totals.map((item, index) => {
                return (
                  <div key={index} className='w-full'>
                    <div className='flex justify-between mb-4 text-sm'>
                      <p>{item.category}</p>
                      <p>{Math.round((item.total / getTopCategories().catTotal) * 100)}%</p>
                    </div>
                    <progress
                      className='progress progress-primary w-full block mb-4'
                      value={Math.round((item.total / getTopCategories().catTotal) * 100)}
                      max='100'
                    ></progress>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <h2 className='font-medium my-10 text-lg'>Monthly Summary</h2>
      <ResponsiveContainer width='90%' height='40%'>
        <LineChart width={500} height={100} data={stats.months} margin={{ left: 0 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='count' name='Items' stroke='#f59e0b' strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
