import { Item } from '../../../types/types';

export default function DisplayItem({
  item,
  addItemToShoppingList,
}: {
  item: Item;
  addItemToShoppingList: (item: Item) => void;
}) {
  return (
    <button
      className='btn text-start font-normal flex h-fit w-28 md:w-32 p-1 m-2 rounded-lg shadow-lg text-sm bg-base-100'
      onClick={() => addItemToShoppingList(item)}
    >
      <p className='me-1 p-1 w-16 text-xs'>{item.name}</p>
      <i className='material-symbols-outlined text-sm text-neutral-600'>add</i>
    </button>
  );
}
