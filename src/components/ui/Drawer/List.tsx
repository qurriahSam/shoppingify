import { useState } from 'react';
import wine from '../../../assets/source.svg';
import CheckList from './CheckList';
import CreateList from './CreateList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

function ListSave({ toggleEditMode }: { toggleEditMode: () => void }) {
  return (
    <form className='flex mt-2 h-fit w-fit rounded-lg shadow border bg-base-100 focus-within:border-primary'>
      <input
        type='text'
        placeholder='Enter a name'
        className='input input-xs max-w-sm focus:border-0 outlineR focus-within:border-0'
      />
      <button className='btn btn-primary btn-sm' onClick={toggleEditMode}>
        Save
      </button>
    </form>
  );
}

function CancelComplete({ toggleEditMode }: { toggleEditMode: () => void }) {
  return (
    <div className='flex justify-center'>
      <button className='btn btn-link no-underline hover:no-underline' onClick={toggleEditMode}>
        cancel
      </button>
      <button className='btn btn-primary'>Save</button>
    </div>
  );
}

export default function List({ toggleNewItem }: { toggleNewItem: () => void }) {
  const shoppingList = useSelector((state: RootState) => state.shoppingList);
  const [editMode, setEditMode] = useState(true);

  const toggleEditMode = () => setEditMode(!editMode);

  return (
    <div className='p-5 h-full flex flex-col'>
      <div>
        <div className='bg-secondary rounded-[2.5rem] relative w-[16rem] h-32'>
          <div className='absolute right-1 top-4 w-[10rem] '>
            <p className='mb-3 font-semibold text-neutral-300'>Did you find what you need?</p>
            <button className='btn btn-primary btn-sm px-5' onClick={toggleNewItem}>
              Add Item
            </button>
          </div>
        </div>
        <img src={wine} alt='' className='absolute top-0.5' />
      </div>
      <div className='grow'>
        {editMode ? (
          <CreateList shoppingList={shoppingList} toggleEditMode={toggleEditMode} />
        ) : (
          <CheckList shoppingList={shoppingList} toggleEditMode={toggleEditMode} />
        )}
      </div>
      {editMode ? (
        <ListSave toggleEditMode={toggleEditMode} />
      ) : (
        <CancelComplete toggleEditMode={toggleEditMode} />
      )}
    </div>
  );
}
