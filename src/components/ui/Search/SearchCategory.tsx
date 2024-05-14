import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import DisplayItem from '../Home/DisplayItem';
import { Category, Item, ShoppingItemCategory } from '../../../types/types';
import { useSearchParams } from 'react-router-dom';
import { addItemToList } from '../../../store/shoppingList/shoppingListSlice';

export default function SearchCategory({ categories }: { categories: Category }) {
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