import { HistoryListItems } from '../../../types/types';
import DisplayHistItem from './DisplayHistItem';

export default function DisplayCategory({ histList }: { histList: HistoryListItems }) {
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
