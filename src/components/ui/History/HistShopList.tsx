import { useDispatch, useSelector } from 'react-redux';
import { HistoryItem, HistoryListItems, Status } from '../../../types/types';
import { AppDispatch, RootState } from '../../../store/store';
import { useNavigate, useParams } from 'react-router-dom';
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

function HistShoppingListSkeleton() {
  function ItemsSkeleton() {
    return (
      <div className='mb-4'>
        <div className='skeleton h-4 w-20 mb-2'></div>
        <div className='flex flex-wrap'>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className='flex flex-wrap items-center p-3 m-2 rounded-lg shadow-lg bg-base-100 w-fit'
            >
              <div className='skeleton h-3 w-16 me-3'></div>
              <div className='skeleton h-4 w-4 me-1 p-1'></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className='skeleton w-32 h-5 mb-2'></div>
      <span className='flex text-neutral-300 items-center mb-5'>
        <i className='material-symbols-outlined text-xs mr-1'>event_note</i>
        <div className='skeleton h-3 w-20'></div>
      </span>
      {[1, 2, 3, 4].map((i) => (
        <ItemsSkeleton key={i} />
      ))}
    </div>
  );
}

export default function HistShopList() {
  const historyListItems = useSelector((state: RootState) => state.historyItems);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleClick = () => navigate('/app/history');

  useEffect(() => {
    if (id && historyListItems.stateStatus === Status.initial) {
      dispatch(getHistoryItems(id));
    }
  });

  return (
    <div>
      <button
        className='btn btn-link text-sm no-underline hover:no-underline'
        onClick={handleClick}
      >
        <i className='material-symbols-outlined text-sm font-semibold'>arrow_back</i>Back
      </button>
      {historyListItems.stateStatus === Status.initial ? (
        <HistShoppingListSkeleton />
      ) : (
        <>
          <h2 className='mb-2 font-medium'>{historyListItems.title}</h2>
          <span className='flex text-neutral-500'>
            <i className='material-symbols-outlined text-xs mr-1'>event_note</i>
            <p className='text-xs font-medium'>{new Date(historyListItems.date).toDateString()}</p>
          </span>
          <div>
            {historyListItems.list.map((good, index) => (
              <DisplayCategory key={index} histList={good} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
