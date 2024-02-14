import { useDispatch } from 'react-redux';
import { ShoppingList } from '../../../types/types';
import {
  decreaseItemCount,
  increaseItemCount,
  removeItemFromList,
} from '../../../store/shoppingList/shoppingListSlice';

export default function CreateList({
  shoppingList,
  toggleEditMode,
}: {
  shoppingList: ShoppingList;
  toggleEditMode: () => void;
}) {
  const dispatch = useDispatch();

  return (
    <>
      <div className='w-full'>
        {shoppingList.list.map((itemColl) => {
          return (
            <div key={itemColl._id}>
              <p className='text-xs font-medium text-neutral-500 mb-3'>{itemColl.category}</p>
              {itemColl.items.map((item) => {
                return (
                  <div key={item._id} className='grid grid-cols-6 text-sm'>
                    <p className='col-span-3 pt-1 my-1'>{item.name}</p>
                    <div className='flex h-fit w-fit rounded-lg shadow border focus-within:border-primary my-1'>
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
                      <p className='mx-3 mt-1'>{item.count}</p>
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
                    <button
                      className='btn btn-link btn-xs col-start-6 px-0 mx-0 no-underline my-1 hover:no-underline'
                      onClick={() =>
                        dispatch(
                          removeItemFromList({
                            _id: itemColl._id,
                            category: itemColl.category,
                            items: [item],
                          })
                        )
                      }
                    >
                      <i className='material-symbols-outlined text-base'>do_not_disturb_on</i>
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
