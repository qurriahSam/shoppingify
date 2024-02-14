import { ChangeEvent, useState } from 'react';
import wine from '../../../assets/source.svg';
import CheckList from './CheckList';
import CreateList from './CreateList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';

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

  const dispatch = useDispatch<AppDispatch>();

  const toggleEditMode = () => setEditMode(!editMode);

  function ListSave() {
    const saveShopping = () => {
      dispatch();
    };

    const setTitle = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      shoppingList.title = e.target.value;
    };

    return (
      <form className='flex mt-2 h-fit w-fit rounded-lg shadow border bg-base-100 focus-within:border-primary'>
        <input
          type='text'
          placeholder='Enter a name'
          className='input input-xs max-w-sm focus:border-0 outlineR focus-within:border-0'
          value={shoppingList.title}
          onChange={setTitle}
        />
        <button className='btn btn-primary btn-sm' onClick={toggleEditMode}>
          Save
        </button>
      </form>
    );
  }

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
      <div className='flex justify-between items-center'>
        <h2 className='my-5 font-medium'>Shopping List</h2>
        <button className='btn btn-link btn-xs no-underline text-neutral hover:no-underline'>
          {editMode ? (
            <i className='material-symbols-outlined text-base' onClick={toggleEditMode}>
              close
            </i>
          ) : (
            <i className='material-symbols-outlined text-base' onClick={toggleEditMode}>
              edit
            </i>
          )}
        </button>
      </div>
      <div className='grow overflow-y-auto'>
        {editMode ? (
          <CreateList shoppingList={shoppingList} toggleEditMode={toggleEditMode} />
        ) : (
          <CheckList shoppingList={shoppingList} toggleEditMode={toggleEditMode} />
        )}
      </div>
      {editMode ? <ListSave /> : <CancelComplete toggleEditMode={toggleEditMode} />}
    </div>
  );
}
