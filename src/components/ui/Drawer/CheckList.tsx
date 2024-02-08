import { useDispatch } from 'react-redux';
import { ShoppingItemCategory } from '../../../types/types';
import { checkoutItemFromList } from '../../../store/shoppingList/shoppingListSlice';

export default function CheckList({
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
            edit
          </i>
        </button>
      </div>
      <div className='w-full'>
        {shoppingList.length === 0 ? (
          <p className='text-xs font-medium text-neutral-500 mb-3'>list is empty</p>
        ) : (
          shoppingList.map((itemCat) => (
            <>
              <p className='text-xs font-medium text-neutral-500 mb-3'>{itemCat.category}</p>
              {itemCat.items.map((item) => (
                <div key={item._id} className='flex justify-between text-sm font-medium py-2'>
                  <div className='flex'>
                    <input
                      type='checkbox'
                      className='checkbox checkbox-primary checkbox-xs me-3 mt-0.5'
                      checked={item.complete}
                      onClick={() =>
                        dispatch(
                          checkoutItemFromList({
                            _id: itemCat._id,
                            category: itemCat.category,
                            items: [item],
                          })
                        )
                      }
                    />
                    {!item.complete ? (
                      <p className=''>{item.name}</p>
                    ) : (
                      <s>
                        <p className=''>{item.name}</p>
                      </s>
                    )}
                  </div>
                  <div className='badge badge-primary badge-outline font-semibold'>
                    {item.count} pcs
                  </div>
                </div>
              ))}
            </>
          ))
        )}
      </div>
    </>
  );
}
