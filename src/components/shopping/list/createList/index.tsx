export default function CreateList() {
  return (
    <>
      <h2 className='my-5 font-medium'>Shopping List</h2>
      <div className='w-full'>
        <p className='text-xs font-medium text-neutral-500 mb-3'>Fruit and Vegetable</p>
        <div className='grid grid-cols-6 text-sm'>
          <p className='col-span-3 pt-1'>Avocado</p>
          <div className='flex h-fit w-fit rounded-lg shadow border focus-within:border-primary'>
            <button className='btn btn-link btn-xs col-span-2 px-0 mx-0 no-underline hover:no-underline'>
              <i className='material-symbols-outlined text-base'>add</i>
            </button>
            <input
              type='number'
              className='input input-xs w-10 max-w-sm focus:border-0 outlineR focus-within:border-0'
              value={300}
            />
            <button className='btn btn-link btn-xs px-0 mx-0 no-underline hover:no-underline'>
              <i className='material-symbols-outlined text-base'>remove</i>
            </button>
          </div>
          <button className='btn btn-link btn-xs col-start-6 px-0 mx-0 no-underline hover:no-underline'>
            <i className='material-symbols-outlined text-base'>do_not_disturb_on</i>
          </button>
        </div>
      </div>
    </>
  );
}
