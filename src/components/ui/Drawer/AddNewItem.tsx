import { ChangeEvent, useState } from 'react';

interface INewItem {
  _id: null | string;
  category: string;
  name: string;
  image: null | string;
  note: null | string;
}

export default function AddNewItem() {
  const [newItem, setNewItem] = useState<INewItem>({
    _id: null,
    category: '',
    name: '',
    image: null,
    note: null,
  });

  const updateNewItemInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.id;
    setNewItem({ ...newItem, [key]: value });
  };
  const updateNewItemCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const key = e.target.id;

    console.log(key, value);

    //setNewItem({ ...newItem, category: value, _id: key });
  };

  return (
    <div className='p-5 h-full'>
      <h2 className='font-semibold mb-4'>Add a new Item</h2>
      <form className='form-control h-full flex flex-col justify-between'>
        <div>
          <div className='mb-4'>
            <label htmlFor='name' className='label-text text-xs font-medium'>
              Name:
            </label>
            <input
              id='name'
              type='text'
              placeholder='Enter a name'
              className='input input-md placeholder:text-xs w-full border-2 border-base-300 focus:border-primary focus:outline-0 focus-within:outline-0'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='note' className='label-text text-xs font-medium'>
              Note (optional):
            </label>
            <textarea
              id='note'
              placeholder='Enter a note'
              className='textarea textarea-md placeholder:text-xs w-full border-2 border-base-300 focus:border-primary focus:outline-0 focus-within:outline-0'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='image' className='label-text text-xs font-medium'>
              Image (optional):
            </label>
            <input
              id='image'
              type='text'
              placeholder='Enter a url'
              className='input input-md placeholder:text-xs w-full border-2 border-base-300 focus:border-primary focus:outline-0 focus-within:outline-0'
            />
          </div>
          <div>
            <label htmlFor='category' className='label-text text-xs font-medium'>
              Category:
            </label>

            <select
              onChange={updateNewItemCategory}
              className='select select-md w-full text-xs max-w-xs border-2 border-base-300 focus:border-primary focus:outline-0 focus-within:outline-0'
            >
              <option disabled selected>
                Enter a category
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>New</option>
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
