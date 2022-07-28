import React from 'react';
import {
  VscDebugAlt,
  VscFiles,
  VscSearch,
  VscSettingsGear,
  VscSourceControl,
} from 'react-icons/vsc';

//type Props = {}

export default function SideBar() {
  return (
    <div className='sticky top-10 left-0 z-10 w-12 border-[#102a44] bg-[#001122] pr-4 lg:w-14'>
      <div className='flex flex-col items-start justify-center'>
        <div className='border-l-2 border-l-slate-200 p-3'>
          <VscFiles className='h-6 w-6 cursor-pointer text-white' />
        </div>
        <div className='p-3'>
          <VscSearch className='h-6 w-6 cursor-pointer text-[#8BADC1]' />
        </div>
        <div className='p-3'>
          <VscSourceControl className='h-6 w-6 cursor-pointer text-[#8BADC1]' />
        </div>
        <div className='p-3'>
          <VscDebugAlt className='h-6 w-6 cursor-pointer text-[#8BADC1]' />
        </div>
      </div>
      {/**sidebar footer */}
      <div className='absolute bottom-0 flex flex-col items-start justify-center'>
        <div className='p-3'>
          <VscSettingsGear className='h-6 w-6 cursor-pointer text-[#8BADC1]' />
        </div>
      </div>
    </div>
  );
}
