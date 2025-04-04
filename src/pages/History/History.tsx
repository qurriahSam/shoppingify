import { useDispatch, useSelector } from 'react-redux';
import { HistoryListTitle, Status } from '../../types/types';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import getHistory from '../../store/history/reducers/getHistoryAsync';
import { useNavigate } from 'react-router-dom';
import { clearHistoryItems } from '../../store/historyItems/historyItemsSlice';

function ListHistorySkeleton() {
  return (
    <div className=' grid my-5 h-12 px-5 items-center grid-rows-2 md:grid-rows-none md:grid-cols-4 lg:grid-cols-3 w-full m-2 rounded-lg shadow-lg bg-base-100'>
      <div className='skeleton h-4 w-1/2 md:col-span-2'></div>
      <div className='md:col-span-2 lg:col-span-1 flex justify-between text-xs text-start items-center'>
        <span className='flex text-neutral-200 items-center pe-3'>
          <i className='material-symbols-outlined me-1'>event_note</i>
          <div className='skeleton h-4 w-32'></div>
        </span>

        <div className='skeleton h-4 w-28'></div>

        <i className='material-symbols-outlined text-neutral-200 font-sm'>
          chevron_right
        </i>
      </div>
    </div>
  );
}

function ListHistory({ history }: { history: HistoryListTitle }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearHistoryItems());
    navigate(`${history._id}`);
  };
  return (
    <button
      className='btn text-start grid font-normal h-fit grid-rows-2 md:grid-rows-none md:grid-cols-4 lg:grid-cols-3 w-full m-2 rounded-lg shadow-lg text-sm bg-base-100'
      onClick={handleClick}
    >
      <p className='text-start me-1 p-1 md:col-span-2'>{history.title}</p>
      <div className='md:col-span-2 lg:col-span-1 flex justify-between text-xs text-start'>
        <span className='flex text-neutral-500'>
          <i className='material-symbols-outlined'>event_note</i>
          <p className='p-1'>{new Date(history.date).toDateString()}</p>
        </span>
        {history.status === 'complete' ? (
          <div className='badge badge-accent badge-outline m-1 badge-sm lg:badge-md'>
            {history.status}
          </div>
        ) : (
          <div className='badge badge-error badge-outline m-1 badge-sm lg:badge-md'>
            {history.status}
          </div>
        )}

        <i className='material-symbols-outlined text-neutral-600 font-sm'>
          chevron_right
        </i>
      </div>
    </button>
  );
}

export default function History() {
  const listHistory = useSelector((state: RootState) => state.history);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (listHistory.status === Status.initial) {
      if (user._id) dispatch(getHistory(user._id));
    }
  }, [dispatch, listHistory.status, user]);

  return (
    <div>
      <p className='mb-4 text-lg md:mb-0 md:text-2xl font-medium max-w-md'>
        History
      </p>

      {listHistory.status === Status.initial
        ? [1, 2, 3, 4, 5, 6, 7].map((num) => <ListHistorySkeleton key={num} />)
        : listHistory.historyList.map((history, index) => (
            <ListHistory key={index} history={history} />
          ))}
    </div>
  );
}
