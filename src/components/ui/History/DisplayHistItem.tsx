import { HistoryItem } from '../../../types/types';

export default function DisplayHistItem({ item }: { item: HistoryItem }) {
  return (
    <div className='text-start font-normal flex flex-wrap p-2 m-2 rounded-lg shadow-lg text-sm bg-base-100 w-fit'>
      <p className='me-1 p-1'>{item.name}</p>
      <p className='me-1 p-1 text-primary'>{item.count}</p>
    </div>
  );
}
