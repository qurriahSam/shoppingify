import { HistoryListTitle } from '../../types/types';
import { listHistory } from '../../server/data';

function ListHistory({ history }: { history: HistoryListTitle }) {
  return (
    <button className='btn text-start grid font-normal h-fit grid-rows-2 md:grid-rows-none md:grid-cols-4 lg:grid-cols-3 w-full m-2 rounded-lg shadow-lg text-sm bg-base-100'>
      <p className='text-start me-1 p-1 md:col-span-2'>{history.name}</p>
      <div className='md:col-span-2 lg:col-span-1 flex justify-between text-xs text-start'>
        <span className='flex text-neutral-500'>
          <i className='material-symbols-outlined'>event_note</i>
          <p className='p-1'>{history.date}</p>
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

        <i className='material-symbols-outlined text-neutral-600 font-sm'>chevron_right</i>
      </div>
    </button>
  );
}

export default function History() {
  return (
    <div>
      <p className='mb-4 text-lg md:mb-0 md:text-2xl font-medium max-w-md'>History</p>

      {listHistory.map((history, index) => (
        <ListHistory key={index} history={history} />
      ))}
    </div>
  );
}
