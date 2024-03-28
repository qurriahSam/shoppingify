import { useState, useEffect } from 'react';
import SideNav from './ui/SideNav/SideNav';
import Drawer from '../pages/Drawer/drawer';
import { Outlet } from 'react-router-dom';
//import DrawerMob from './shopping/drawerMob';

export default function SiteWrapper() {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerToggle, setDrawerToggle] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function drawerToggleFunc() {
    setDrawerToggle(!drawerToggle);
  }

  return (
    <div className='flex h-screen flex-row md:overflow-hidden 2xl:container 2xl:mx-auto'>
      <div>
        <SideNav toggleDrawer={drawerToggleFunc} />
      </div>
      <div
        className={`px-6 md:px-9 py-8 md:w-2/3 lg:w-3/4 overflow-y-auto bg-base-200 scrollbar-thin scrollbar-thumb-stone-400 hover:scrollbar-thumb-stone-500 scrollbar-track-stone-300 ${
          !drawerToggle ? 'w-full' : 'hidden'
        }`}
      >
        <Outlet />
        <footer className='text-center mt-12 text-xs'>
          &copy;
          <a href='https://github.com/qurriahSam' className='text-blue-600'>
            Sam_Kuria{' '}
          </a>
          2024
        </footer>
      </div>
      {isMobile ? (
        <div
          className={
            drawerToggle ? 'w-full animate-in slide-in-from-right-72 bg-base-200' : 'hidden'
          }
        >
          <Drawer />
        </div>
      ) : (
        <div className='md:w-1/3 lg:w-1/4 bg-base-100'>
          <Drawer />
        </div>
      )}
    </div>
  );
}
