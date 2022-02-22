import React from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { VscChromeMinimize, VscChromeRestore } from 'react-icons/vsc';

import UnstyledLink from './links/UnstyledLink';

//type Props = {}

const links = [
  'File',
  'Edit',
  'Selection',
  'view',
  'Go',
  'Run',
  'Terminal',
  'Help',
];

export default function Header() {
  return (
    <header className='top-0 bg-[#04071d] px-6'>
      <div className='grid grid-cols-3 items-center justify-between'>
        {/**start menu items */}
        <div>
          <nav>
            <ul className='flex items-center'>
              {links.map((link, index) => (
                <li key={index}>
                  <UnstyledLink
                    className='py-2 px-2 text-xs text-white hover:bg-teal-50 hover:bg-opacity-20'
                    href='/'
                  >
                    {link}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/**start site title */}
        <div className='flex items-center justify-center'>
          <h2 className='text-xs font-normal capitalize text-white'>
            Welcome - The Jooankrah
          </h2>
        </div>
        {/**icons starts here */}
        <div>
          <div className='flex items-center justify-end space-x-4'>
            <VscChromeMinimize className='h-10 cursor-pointer text-sm text-white' />
            <VscChromeRestore className='h-10 cursor-pointer text-sm text-white' />
            <BsFillMoonFill className='h-10 cursor-pointer text-sm text-white' />
          </div>
        </div>
      </div>
    </header>
  );
}
