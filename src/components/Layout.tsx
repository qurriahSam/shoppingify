import { ReactNode } from 'react';
import SideNav from './sidenav';

export default function SiteWrapper({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div>
        <SideNav />
      </div>
      <div className='md:px-12 py-8'>{children}</div>
    </div>
  );
}
