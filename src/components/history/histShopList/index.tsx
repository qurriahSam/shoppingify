function DisplayHistItem() {
  return (
    <div className='text-start font-normal flex flex-wrap p-2 m-2 rounded-lg shadow-lg text-sm bg-base-100 max-w-xs'>
      <p className='me-1 p-1'>cookies</p>
      <p className='me-1 p-1'>3pcs</p>
    </div>
  );
}
export default function HistShopList() {
  return (
    <div>
      <button className='btn btn-link text-sm no-underline hover:no-underline'>
        <i className='material-icons text-sm font-semibold'>arrow_back</i>Back
      </button>
      <h2 className='mb-2 font-medium'>Eeros farewel party</h2>
      <span className='flex text-neutral-500'>
        <i className='material-icons text-xs mr-1'>event_note</i>
        <p className='text-xs font-medium'>10 march 2023</p>
      </span>
      <div>
        <DisplayHistItem />
      </div>
    </div>
  );
}
