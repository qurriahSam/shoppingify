import { useDispatch, useSelector } from 'react-redux';
import { HistoryItem, HistoryListItems } from '../../../types/types';
import { AppDispatch, RootState } from '../../../store/store';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getHistoryItems } from '../../../store/historyItems/reducers/getHistoryItems';

function DisplayHistItem({ item }: { item: HistoryItem }) {
  return (
    <div className='text-start font-normal flex flex-wrap p-2 m-2 rounded-lg shadow-lg text-sm bg-base-100 w-fit'>
      <p className='me-1 p-1'>{item.name}</p>
      <p className='me-1 p-1 text-primary'>{item.count}</p>
    </div>
  );
}

function DisplayCategory({ histList }: { histList: HistoryListItems }) {
  return (
    <div>
      <p className='font-medium'>{histList.category}</p>
      <div className='flex flex-wrap'>
        {histList.items.map((item, index) => (
          <DisplayHistItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function HistShopList() {
  const historyListItems = useSelector((state: RootState) => state.historyItems);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(getHistoryItems(id));
    }
  });

  return (
    <div>
      <button className='btn btn-link text-sm no-underline hover:no-underline'>
        <i className='material-symbols-outlined text-sm font-semibold'>arrow_back</i>Back
      </button>
      <h2 className='mb-2 font-medium'>{historyListItems.title}</h2>
      <span className='flex text-neutral-500'>
        <i className='material-symbols-outlined text-xs mr-1'>event_note</i>
        <p className='text-xs font-medium'>date</p>
      </span>
      <div>
        {historyListItems.list.map((good, index) => (
          <DisplayCategory key={index} histList={good} />
        ))}
      </div>
    </div>
  );
}
