import { ChangeEvent, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { RootState } from '../../../store/store';
import { Status } from '../../../types/types';
import SearchCategory from './SearchCategory';



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
      <button
        className='btn w-full lg:w-2/5 p-2 rounded-lg shadow border bg-base-100 justify-start focus-within:border-primary'
        onClick={() => (document?.getElementById('searchModal') as HTMLDialogElement)?.showModal()}
        disabled={nuCategories.status === Status.loading}
      >
        <i className='material-symbols-outlined text-neutral-600'>search</i>
        <span className='text-neutral-600 font-normal text-xs'>Search</span>
      </button>
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
