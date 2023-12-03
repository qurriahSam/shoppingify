export default function CheckList() {
  return (
    <>
      <h2 className='my-5 font-medium'>Shopping List</h2>
      <div className='w-full'>
        <p className='text-xs font-medium text-neutral-500 mb-3'>Fruit and Vegetable</p>
        <div className='flex justify-between text-sm font-medium py-2'>
          <div className='flex'>
            <input type='checkbox' className='checkbox checkbox-primary checkbox-xs me-3 mt-0.5' />
            <p className=''>Avocado</p>
          </div>
          <div className='badge badge-primary badge-outline font-semibold'>6 pcs</div>
        </div>
        <div className='flex justify-between text-sm font-medium py-2'>
          <div className='flex'>
            <input type='checkbox' className='checkbox checkbox-primary checkbox-xs me-3 mt-0.5' />
            <p className=''>kiwi</p>
          </div>
          <div className='badge badge-primary badge-outline font-semibold'>6 pcs</div>
        </div>
        <div className='flex justify-between text-sm font-medium py-2'>
          <div className='flex'>
            <input type='checkbox' className='checkbox checkbox-primary checkbox-xs me-3 mt-0.5' />
            <p className=''>pinaples</p>
          </div>
          <div className='badge badge-primary badge-outline font-semibold'>6 pcs</div>
        </div>
      </div>
    </>
  );
}
