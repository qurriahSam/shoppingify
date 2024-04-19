export default function RenderAlert() {
  return (
    <div role='alert' className='alert alert-warning mb-3 shadow-md p-2'>
      <span className='loading loading-ring loading-md'></span>
      <span className='text-xs'>Spinning up a render server instance.</span>
    </div>
  );
}
