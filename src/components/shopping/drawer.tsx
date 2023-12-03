import wine from '../../assets/source.svg';

export default function Drawer() {
  return (
    <div className='p-5'>
      <div className='bg-secondary rounded-[2.5rem] relative w-[16rem] h-32'>
        <div className='absolute right-1 top-4 w-[10rem] '>
          <p className='mb-3 font-semibold text-neutral-300'>Did you find what you need?</p>
          <button className='btn btn-primary btn-sm px-5'>Add Item</button>
        </div>
      </div>
      <img src={wine} alt='' className='absolute top-0.5' />
      <div>
        <h2 className='my-5 font-medium'>Shopping List</h2>
        <div className='w-full'>
          <p className='text-xs font-medium text-neutral-500 mb-3'>Fruit and Vegetable</p>
          <div className='grid grid-cols-4 text-sm'>
            <p className=''>Avocado</p>
            <div className='flex h-fit p-1 rounded-lg shadow border bg-base-100 focus-within:border-primary'>
              <button className='btn btn-link btn-xs px-0 mx-0 no-underline hover:no-underline'>
                <i className='material-symbols-outlined text-base'>add</i>
              </button>
              <input
                type='number'
                className='input input-xs w-12 max-w-sm focus:border-0 outlineR focus-within:border-0'
                value={3}
              />
              <button className='btn btn-link btn-xs px-0 mx-0 no-underline hover:no-underline'>
                <i className='material-symbols-outlined text-base'>remove</i>
              </button>
            </div>
            <button className='btn btn-link btn-xs px-0 mx-0 no-underline hover:no-underline'>
              <i className='material-symbols-outlined text-base'>do_not_disturb_on</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
