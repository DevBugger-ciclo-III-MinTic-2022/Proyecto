import React from 'react';
import Sidebar from 'componentes/Siderbar';
import SidebarResponsive from 'componentes/SiderbarResponsive';

const PrivateLayout = ({ children }) => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex flex-col lg:flex-row flex-nowrap h-full w-full'>
        <Sidebar />
        <SidebarResponsive />
        <main className='flex w-full  overflow-y-scroll justify-center'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
