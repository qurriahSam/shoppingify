import { ShoppingItemCategory } from '../../../types/types';

export default function CreateList({ shoppingList }: { shoppingList: ShoppingItemCategory[] }) {
  return (
    <>
      <div className='flex justify-between'>
        <h2 className='my-5 font-medium'>Shopping List</h2>
        <button className='btn btn-link btn-xs no-underline text-neutral hover:no-underline'>
          <i className='material-symbols-outlined text-base'>cancel</i>
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
                        <button className='btn btn-link btn-xs col-span-2 px-0 mx-0 no-underline hover:no-underline'>
                          <i className='material-symbols-outlined text-base'>add</i>
                        </button>
                        <input
                          type='number'
                          className='input input-xs w-10 max-w-sm focus:border-0 outlineR focus-within:border-0'
                          value={item.count}
                        />
                        <button className='btn btn-link btn-xs px-0 mx-0 no-underline hover:no-underline'>
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
