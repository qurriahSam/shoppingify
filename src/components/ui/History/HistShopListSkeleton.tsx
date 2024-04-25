export default function HistShoppingListSkeleton() {
  function ItemsSkeleton() {
    return (
      <div className='mb-4'>
        <div className='skeleton h-4 w-20 mb-2'></div>
        <div className='flex flex-wrap'>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className='flex flex-wrap items-center p-3 m-2 rounded-lg shadow-lg bg-base-100 w-fit'
            >
              <div className='skeleton h-3 w-16 me-3'></div>
              <div className='skeleton h-4 w-4 me-1 p-1'></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className='skeleton w-32 h-5 mb-2'></div>
      <span className='flex text-neutral-300 items-center mb-5'>
        <i className='material-symbols-outlined text-xs mr-1'>event_note</i>
        <div className='skeleton h-3 w-20'></div>
      </span>
      {[1, 2, 3, 4].map((i) => (
        <ItemsSkeleton key={i} />
      ))}
    </div>
  );
}
