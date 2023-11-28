import { ReactNode } from 'react';
import SideNav from './sidenav';

export default function SiteWrapper({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-screen flex-row md:overflow-hidden'>
      <div>
        <SideNav />
      </div>
      <div className='px-6 md:px-12 py-8 w-full md:overflow-y-auto'>{children}</div>
    </div>
  );
}
