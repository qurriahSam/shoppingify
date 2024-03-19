import { useDispatch } from 'react-redux';
import { ShoppingList, Status } from '../../../types/types';
import { checkoutItemFromList } from '../../../store/shoppingList/shoppingListSlice';

function CheckListSkeleton() {
  function ItemSkeleton() {
    return (
      <div className='flex justify-between py-2'>
        <div className='flex'>
          <div className='skeleton h-6 w-6 rounded-full me-4'></div>
          <div className='skeleton h-4 w-28 mt-1'></div>
        </div>
        <div className='skeleton h-7 w-12'></div>
      </div>
    );
  }
  return (
    <div>
      <div className='skeleton h-4 w-20 mb-3'></div>
      {[1, 2, 3, 4].map((item) => (
        <ItemSkeleton key={item} />
      ))}
      <div className='skeleton h-4 w-20 my-3'></div>
      {[1, 2, 3].map((item) => (
        <ItemSkeleton key={item} />
      ))}
    </div>
  );
}

//TODO: add popup to confirm cancling of list

export default function CheckList({ shoppingList }: { shoppingList: ShoppingList }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className='w-full'>
        {shoppingList.update === Status.initial ? (
          <CheckListSkeleton />
        ) : shoppingList.list?.length === 0 ? (
          <p className='text-xs font-medium text-neutral-500 mb-3'>list is empty</p>
        ) : (
          shoppingList.list?.map((itemCat) => (
            <div key={itemCat._id}>
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
                      readOnly
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
            </div>
          ))
        )}
      </div>
    </>
  );
}
