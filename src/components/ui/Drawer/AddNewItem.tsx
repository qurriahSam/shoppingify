import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import addItem from '../../../store/category/reducers/addItemAsyncReducer';

interface INewItem {
  categoryId: string;
  category: string;
  name: string;
  image: string;
  note: string;
}

export default function AddNewItem({ toggleNewItem }: { toggleNewItem: () => void }) {
  const [newItem, setNewItem] = useState<INewItem>({
    categoryId: '',
    category: '',
    name: '',
    image: '',
    note: '',
  });

  const store = useSelector((state: RootState) => state.category);

  const updateNewItem = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    const key = e.target.id;
    setNewItem({ ...newItem, [key]: value });
  };

  const updateCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const _id = store.data.filter((cats) => cats.category === e.target.value)[0]._id;
    setNewItem({ ...newItem, category: e.target.value, categoryId: _id });
  };

  const dispatch = useDispatch<AppDispatch>();

  const submitNewItem = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(addItem(newItem)).then(() => {
      toggleNewItem();
    });

    setNewItem({
      categoryId: '',
      category: '',
      name: '',
      image: '',
      note: '',
    });
  };

  return (
    <div className='p-5 h-full'>
      <h2 className='font-semibold mb-4'>Add a new Item</h2>
      <form className='form-control h-full flex flex-col justify-between' onSubmit={submitNewItem}>
        <div>
          <div className='mb-4'>
            <label htmlFor='name' className='label-text text-xs font-medium'>
              Name :
            </label>
            <input
              id='name'
              type='text'
              placeholder='Enter a name'
              className='input input-md placeholder:text-xs w-full border-2 border-base-300 focus:border-primary focus:outline-0 focus-within:outline-0'
              onChange={updateNewItem}
              value={newItem.name}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='note' className='label-text text-xs font-medium'>
              Note ( optional ) :
            </label>
            <textarea
              id='note'
              placeholder='Enter a note'
              className='textarea textarea-md placeholder:text-xs w-full border-2 border-base-300 focus:border-primary focus:outline-0 focus-within:outline-0'
              onChange={updateNewItem}
              value={newItem.note}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='image' className='label-text text-xs font-medium'>
              Image (optional) :
            </label>
            <input
              id='image'
              type='text'
              placeholder='Enter a URL'
              onChange={updateNewItem}
              value={newItem.image}
              className='input input-md placeholder:text-xs w-full border-2 border-base-300 focus:border-primary focus:outline-0 focus-within:outline-0'
            />
          </div>
          <div>
            <label htmlFor='category' className='label-text text-xs font-medium'>
              Category:
            </label>

            <select
              id='category'
              onChange={updateCategory}
              value={newItem.category}
              className='select select-md w-full text-xs max-w-xs border-2 border-base-300 focus:border-primary focus:outline-0 focus-within:outline-0'
            >
              <option>--Select Category--</option>
              {store.data.map((catGroup) => {
                return <option key={catGroup._id}>{catGroup.category}</option>;
              })}
            </select>
          </div>
        </div>
        <div className='flex mb-5 justify-center'>
          <button className='btn btn-link no-underline hover:no-underline'>cancel</button>
          <button className='btn btn-md btn-primary'>Save</button>
        </div>
      </form>
    </div>
  );
}
