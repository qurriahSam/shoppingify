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
  const [inputError, setInputError] = useState({
    name: false,
    category: false,
    disableForm: false,
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

    if (newItem.name === '' && newItem.category === '') {
      setInputError(() => ({ ...inputError, name: true, category: true }));
      return;
    }
    if (newItem.name === '') {
      setInputError(() => ({ ...inputError, name: true }));
      return;
    }
    if (newItem.category === '') {
      setInputError(() => ({ ...inputError, category: true }));
      return;
    }
    setInputError(() => ({ ...inputError, disableForm: true }));
    dispatch(addItem(newItem)).then(() => {
      setInputError(() => ({ ...inputError, disableForm: false }));
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
              Name<span className='text-error'>*</span>
            </label>
            <input
              id='name'
              type='text'
              placeholder='Enter a name'
              className={
                'input input-md placeholder:text-xs w-full border-2 focus:border-primary focus:outline-0 focus-within:outline-0 ' +
                `${inputError.name ? 'input-error' : 'border-base-300'}`
              }
              onChange={updateNewItem}
              value={newItem.name}
              disabled={inputError.disableForm}
            />
            {inputError.name && (
              <div className='label'>
                <span className='label-text-alt text-[10px] text-error font-semibold'>
                  Name cannot be blank
                </span>
              </div>
            )}
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
              disabled={inputError.disableForm}
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
              disabled={inputError.disableForm}
            />
          </div>
          <div>
            <label htmlFor='category' className='label-text text-xs font-medium'>
              Category<span className='text-error'>*</span>
            </label>

            <select
              id='category'
              onChange={updateCategory}
              value={newItem.category}
              className={
                'select select-md w-full text-xs max-w-xs border-2 focus:border-primary focus:outline-0 focus-within:outline-0 ' +
                `${inputError.category ? 'input-error' : 'border-base-300'}`
              }
              disabled={inputError.disableForm}
            >
              <option>--Select Category--</option>
              {store.data.map((catGroup) => {
                return <option key={catGroup._id}>{catGroup.category}</option>;
              })}
            </select>
            {inputError.category && (
              <div className='label'>
                <span className='label-text-alt text-[10px] text-error font-bold'>
                  Select category
                </span>
              </div>
            )}
          </div>
        </div>
        <div className='flex mb-5 justify-center p-4'>
          <button
            className='btn btn-link no-underline me-6 hover:no-underline'
            onClick={(e) => e.preventDefault()}
            disabled={inputError.disableForm}
          >
            cancel
          </button>
          <button className='btn btn-md btn-primary' disabled={inputError.disableForm}>
            {inputError.disableForm ? (
              <span className='loading loading-dots loading-md'></span>
            ) : (
              'Save'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
