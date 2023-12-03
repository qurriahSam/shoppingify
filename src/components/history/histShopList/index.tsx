import { historyListItems } from '../../../server/data';
import { HistoryItem, HistoryListItems /* HistoryListItemsFull */ } from '../../../types/types';

function DisplayHistItem({ item }: { item: HistoryItem }) {
  return (
    <div className='text-start font-normal flex flex-wrap p-2 m-2 rounded-lg shadow-lg text-sm bg-base-100 w-fit'>
      <p className='me-1 p-1'>{item.item.name}</p>
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

export default function HistShopList(/* { histListTitle }: { histListTitle: HistoryListItemsFull } */) {
  return (
    <div>
      <button className='btn btn-link text-sm no-underline hover:no-underline'>
        <i className='material-symbols-outlined text-sm font-semibold'>arrow_back</i>Back
      </button>
      <h2 className='mb-2 font-medium'>{historyListItems.title.name}</h2>
      <span className='flex text-neutral-500'>
        <i className='material-symbols-outlined text-xs mr-1'>event_note</i>
        <p className='text-xs font-medium'>{historyListItems.title.date}</p>
      </span>
      <div>
        {historyListItems.goods.map((good, index) => (
          <DisplayCategory key={index} histList={good} />
        ))}
      </div>
    </div>
  );
}
