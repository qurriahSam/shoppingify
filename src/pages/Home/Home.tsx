import './index.css';
import { Item, Category, Status, ShoppingItemCategory } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import fetchCategories from '../../store/category/reducers/fetchItemsAsyncReducer';
import { addItemToList } from '../../store/shoppingList/shoppingListSlice';
import Search from '../../components/ui/Search/Search';
import DisplayItem from '../../components/ui/Home/DisplayItem';

function Category({ categories }: { categories: Category }) {
  const dispatch = useDispatch<AppDispatch>();
  const addItemToShoppingList = (item: Item) => {
    const itemWithCategory: ShoppingItemCategory = {
      _id: categories._id,
      category: categories.category,
      items: [{ _id: item._id, name: item.name, count: 1, complete: false }],
    };
    dispatch(addItemToList(itemWithCategory));
  };
  return (
    <div className='mt-10'>
      <h2 className='font-medium'>{categories.category}</h2>
      <div className='flex flex-wrap'>
        {categories.items.map((item, index) => (
          <DisplayItem key={index} item={item} addItemToShoppingList={addItemToShoppingList} />
        ))}
      </div>
    </div>
  );
}

function CategorySkeleton() {
  function DisplayItemSkeleton() {
    return (
      <div className='skeleton flex h-11 w-28 md:w-32 p-3 m-2 rounded-lg shadow-lg justify-between'>
        <div className='skeleton me-1 p-1 w-16 h-4'></div>
        <i className='material-symbols-outlined text-sm text-neutral-600'>add</i>
      </div>
    );
  }
  return (
    <div className='mt-10'>
      <div className='skeleton h-5 w-28 mb-3'></div>
      <div className='flex flex-wrap'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <DisplayItemSkeleton key={item} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const nuCategories = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (nuCategories.status === Status.initial) {
      dispatch(fetchCategories());
    }
  });

  return (
    <div>
      <div className='lg:flex items-center mb-8'>
        <p className='mb-4 text-lg md:mb-0 md:text-2xl font-medium max-w-md'>
          <span className='text-primary'>Shoppingify</span> allows you take your shopping list
          wherever you go
        </p>
        <Search />
      </div>
      {nuCategories.status != Status.updated ? (
        <>
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
        </>
      ) : (
        nuCategories.data?.map((category) => <Category key={category._id} categories={category} />)
      )}
    </div>
  );
}
