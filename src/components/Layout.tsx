import { ReactNode, useState, useEffect } from 'react';
import SideNav from './sidenav';
import Drawer from './shopping/drawer';
//import DrawerMob from './shopping/drawerMob';

export default function SiteWrapper({ children }: { children: ReactNode }) {
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
    console.log(drawerToggle);
  }

  return (
    <div className='flex h-screen flex-row md:overflow-hidden 2xl:container 2xl:mx-auto'>
      <div>
        <SideNav toggleDrawer={drawerToggleFunc} />
      </div>
      <div
        className={`px-6 md:px-12 py-8 md:w-2/3 lg:w-3/4 overflow-y-auto bg-base-200 ${
          !drawerToggle ? 'w-full' : 'hidden'
        }`}
      >
        {children}
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
