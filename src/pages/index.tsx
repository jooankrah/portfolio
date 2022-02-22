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
      <div className='h-full min-h-screen'>
        {/**header */}
        <Header />
        <main className='flex h-screen max-h-full bg-gray-200'>
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
