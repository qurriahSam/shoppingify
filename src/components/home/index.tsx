import { listItems } from '../../server/data';
import { Item, Category } from '../../types/types';

function DisplayItem({ item }: { item: Item }) {
  return (
    <div className='flex w-fit p-4 m-3 rounded-lg shadow-lg text-sm'>
      <p className='me-6'>{item.name}</p>
      <button className='btn btn-circle btn-ghost btn-xs'>
        <i className='material-icons'>add</i>
      </button>
    </div>
  );
}

function Category({ categories }: { categories: Category }) {
  return (
    <div>
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
      <p className='text-2xl font-medium max-w-md mb-8'>
        <span className='text-warning'>Shoppingify</span> allows you take your shopping list
        wherever you go
      </p>
      {listItems.map((item, index) => (
        <Category key={index} categories={item} />
      ))}
    </div>
  );
}
