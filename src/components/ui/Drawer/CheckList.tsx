import { useDispatch } from 'react-redux';
import { ShoppingItemCategory } from '../../../types/types';
import { checkoutItemFromList } from '../../../store/shoppingList/shoppingListSlice';

export default function CheckList({ shoppingList }: { shoppingList: ShoppingItemCategory[] }) {
  const dispatch = useDispatch();

  return (
    <>
      <h2 className='my-5 font-medium'>Shopping List</h2>
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
