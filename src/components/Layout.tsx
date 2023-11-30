import { ReactNode } from 'react';
import SideNav from './sidenav';
import Drawer from './shopping/drawer';

export default function SiteWrapper({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-screen flex-row md:overflow-hidden'>
      <div>
        <SideNav />
      </div>
      <div className='px-6 md:px-12 py-8 w-full md:w-2/3 lg:w-3/4 overflow-y-auto bg-base-200'>
        {children}
      </div>
      <div className='hidden md:w-1/3 lg:w-1/4 md:block'>
        <Drawer />
      </div>
    </div>
  );
}
