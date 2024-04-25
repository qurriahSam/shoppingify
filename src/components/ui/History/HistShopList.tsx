import { useDispatch, useSelector } from 'react-redux';
import { Status } from '../../../types/types';
import { AppDispatch, RootState } from '../../../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getHistoryItems } from '../../../store/historyItems/reducers/getHistoryItems';
import DisplayCategory from './DisplayCategory';
import HistShoppingListSkeleton from './HistShopListSkeleton';

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
