import * as React from 'react';

import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Seo from '@/components/Seo';
import SideBar from '@/components/SideBar';

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo
        title='Akwaaba | Jonathan Nsiah'
        siteName='Jonathan Nsiah'
        description='Software Engineer | Personal Blog'
      />
      <div className='h-screen'>
        {/**header */}
        <Header />
        <main className='top-10 flex h-[calc(100vh_-_40px)] bg-gray-200'>
          {/**side Menu */}
          <SideBar />
          {/**Main Content */}
          <div className='flex-1'>
            <MainContent />
          </div>
        </main>
      </div>
    </>
  );
}
