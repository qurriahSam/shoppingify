import './index.css';
import { listItems } from '../../server/data';
import { Item, Category } from '../../types/types';

function Search() {
  return (
    <div className='flex h-fit p-1 rounded-lg shadow border bg-base-100 focus-within:border-primary'>
      <i className='material-symbols-outlined text-neutral-600'>search</i>
      <input
        type='text'
        placeholder='Search item'
        className='input input-xs w-64 max-w-sm focus:border-0 outlineR focus-within:border-0'
      />
    </div>
  );
}

function DisplayItem({ item }: { item: Item }) {
  return (
    <button className='btn text-start font-normal flex h-fit w-28 md:w-32 p-1 m-2 rounded-lg shadow-lg text-sm bg-base-100'>
      <p className='me-1 p-1 w-16 text-xs'>{item.name}</p>
      <i className='material-symbols-outlined text-sm text-neutral-600'>add</i>
    </button>
  );
}

function Category({ categories }: { categories: Category }) {
  return (
    <div className='mt-10'>
      <h2 className='font-medium'>{categories.category}</h2>
      <div className='flex flex-wrap'>
        {categories.items.map((item, index) => (
          <DisplayItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className='lg:flex items-center mb-8'>
        <p className='mb-4 text-lg md:mb-0 md:text-2xl font-medium max-w-md'>
          <span className='text-primary'>Shoppingify</span> allows you take your shopping list
          wherever you go
        </p>
        <Search />
      </div>

      {listItems.map((item, index) => (
        <Category key={index} categories={item} />
      ))}
    </div>
  );
}
