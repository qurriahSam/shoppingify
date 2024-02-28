import { ChangeEvent, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store/store';
import DisplayItem from '../Home/DisplayItem';
import { Category, Item, ShoppingItemCategory } from '../../../types/types';
import { addItemToList } from '../../../store/shoppingList/shoppingListSlice';

function SearchCategory({ categories }: { categories: Category }) {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();

  const searchTerm = searchParams.get('item') || '';

  const addItemToShoppingList = (item: Item) => {
    const itemWithCategory: ShoppingItemCategory = {
      _id: categories._id,
      category: categories.category,
      items: [{ _id: item._id, name: item.name, count: 1, complete: false }],
    };
    dispatch(addItemToList(itemWithCategory));
  };
  return (
    <div className='flex flex-wrap'>
      {categories.items
        .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((item, index) => (
          <DisplayItem key={index} item={item} addItemToShoppingList={addItemToShoppingList} />
        ))}
    </div>
  );
}

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const nuCategories = useSelector((state: RootState) => state.category);
  const item = searchParams.get('item') || '';

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    text ? setSearchParams({ item: text }) : setSearchParams({});
  };

  return (
    <>
      <div
        className='btn w-full lg:w-2/5 p-2 rounded-lg shadow border bg-base-100 justify-start focus-within:border-primary'
        onClick={() => (document?.getElementById('searchModal') as HTMLDialogElement)?.showModal()}
      >
        <i className='material-symbols-outlined text-neutral-600'>search</i>
        <span className='text-neutral-600 font-normal text-xs'>Search</span>
      </div>
      <dialog id='searchModal' className='modal'>
        <div className='modal-box'>
          <form className='flex' onSubmit={handleSubmit}>
            <div>
              <i className='material-symbols-outlined text-neutral-600'>search</i>
            </div>
            <input
              type='text'
              placeholder='Search item'
              className='input input-xs w-full focus:border-0 outlineR focus-within:border-0'
              value={item}
              onChange={handleSearch}
            />
          </form>
          <div className='divider mt-0'></div>

          <div className='container'>
            {nuCategories.data?.map((category) => (
              <SearchCategory key={category._id} categories={category} />
            ))}
          </div>
        </div>

        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
