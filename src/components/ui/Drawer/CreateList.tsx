import { useDispatch } from 'react-redux';
import { ShoppingItemCategory } from '../../../types/types';
import {
  decreaseItemCount,
  increaseItemCount,
} from '../../../store/shoppingList/shoppingListSlice';

export default function CreateList({
  shoppingList,
  toggleEditMode,
}: {
  shoppingList: ShoppingItemCategory[];
  toggleEditMode: () => void;
}) {
  const dispatch = useDispatch();

  return (
    <>
      <div className='flex justify-between items-center'>
        <h2 className='my-5 font-medium'>Shopping List</h2>
        <button className='btn btn-link btn-xs no-underline text-neutral hover:no-underline'>
          <i className='material-symbols-outlined text-base' onClick={toggleEditMode}>
            close
          </i>
        </button>
      </div>
      <div className='w-full'>
        {shoppingList.map((itemColl) => {
          return (
            <>
              <p key={itemColl._id} className='text-xs font-medium text-neutral-500 mb-3'>
                {itemColl.category}
              </p>
              <div className='grid grid-cols-6 text-sm'>
                {itemColl.items.map((item) => {
                  return (
                    <>
                      <p className='col-span-3 pt-1'>{item.name}</p>
                      <div className='flex h-fit w-fit rounded-lg shadow border focus-within:border-primary'>
                        <button
                          className='btn btn-link btn-xs col-span-2 px-0 mx-0 no-underline hover:no-underline'
                          onClick={() =>
                            dispatch(
                              increaseItemCount({
                                _id: itemColl._id,
                                category: itemColl.category,
                                items: [item],
                              })
                            )
                          }
                        >
                          <i className='material-symbols-outlined text-base'>add</i>
                        </button>
                        <p className='mx-3'>{item.count}</p>
                        <button
                          className='btn btn-link btn-xs px-0 mx-0 no-underline hover:no-underline'
                          onClick={() =>
                            dispatch(
                              decreaseItemCount({
                                _id: itemColl._id,
                                category: itemColl.category,
                                items: [item],
                              })
                            )
                          }
                        >
                          <i className='material-symbols-outlined text-base'>remove</i>
                        </button>
                      </div>
                      <button className='btn btn-link btn-xs col-start-6 px-0 mx-0 no-underline hover:no-underline'>
                        <i className='material-symbols-outlined text-base'>do_not_disturb_on</i>
                      </button>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
