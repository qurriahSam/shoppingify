import { ShoppingItemCategory } from '../../../types/types';

export default function CheckList({
  shoppingList,
  setShoppingList,
}: {
  shoppingList: ShoppingItemCategory[];
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingItemCategory[]>>;
}) {
  return (
    <>
      <h2 className='my-5 font-medium'>Shopping List</h2>
      <div className='w-full'>
        {shoppingList.length === 1 ? (
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
                    />
                    <p className=''>{item.name}</p>
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
