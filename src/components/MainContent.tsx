import Image from 'next/image';
import React from 'react';
import { GrFacebook, GrInstagram, GrLinkedin } from 'react-icons/gr';
import Fade from 'react-reveal/Fade';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Typist from 'react-typist';

import 'react-tabs/style/react-tabs.css';

//type Props = {};

export default function MainContent() {
  return (
    <Tabs className=''>
      <TabList className='sticky top-10 z-10 flex flex-grow items-center bg-[#061852] text-white shadow-sm shadow-gray-500'>
        <Tab className='cursor-pointer !rounded-none border-r-[0.5px] border-r-gray-700 bg-[#061852] px-10 py-2 text-sm lowercase'>
          Home.html
        </Tab>
        <Tab className='cursor-pointer !rounded-none border-r-[0.5px] border-r-gray-700 bg-[#061852] px-10 py-2 text-sm lowercase'>
          About Me.html
        </Tab>
        <Tab className='cursor-pointer !rounded-none border-r-[0.5px] border-r-gray-700 bg-[#061852] px-10 py-2 text-sm lowercase'>
          Skills.html
        </Tab>
        <Tab className='cursor-pointer !rounded-none border-r-[0.5px] border-r-gray-700 bg-[#061852] px-10 py-2 text-sm lowercase'>
          Portfolio.html
        </Tab>
        <Tab className='cursor-pointer !rounded-none border-r-[0.5px] border-r-gray-700 bg-[#061852] px-10 py-2 text-sm lowercase'>
          Contact.html
        </Tab>
      </TabList>

      <TabPanel className='bg-black'>
        <div className=' flex h-full flex-col items-center justify-center space-y-6 p-4'>
          <Fade left ssrFadeout>
            <div className='relative h-[300px] w-[300px] rounded-full'>
              <Image
                className='rounded-full'
                src='/images/header-background.jpg'
                alt='Jonathan Nsiah'
                layout='fill'
                priority
              />
            </div>
          </Fade>
          <div className='z-10'>
            <Typist
              className='TypistExample-header'
              avgTypingDelay={200}
              startDelay={1500}
              //  onTypingDone={this.onHeaderTyped}
            >
              <h4 className='text-center font-custom text-7xl capitalize text-gray-300'>
                Jonathan Nsiah.
              </h4>
            </Typist>
            <Fade bottom ssrFadeout>
              <div>
                {/* <p className='text-gray-300 text-2xl text-center'>Hello! Akwaaba</p> */}
                <div className='bg-black p-2 text-center opacity-80'>
                  <p className='font-[Montserrat] text-xl capitalize text-white'>
                    software engineer Based In{' '}
                    <span className='text-yellow-500'>Ghana.</span>
                  </p>
                </div>
                <div className='mt-5 flex items-center justify-center space-x-4'>
                  <GrFacebook className='h-6 w-6 cursor-pointer text-gray-300 transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-500' />
                  <GrInstagram className='h-6 w-6 cursor-pointer text-gray-300 transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-500' />
                  <GrLinkedin className='h-6 w-6 cursor-pointer text-gray-300 transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-500' />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </TabPanel>
      <TabPanel className='bg-[#132766]'>
        <div className='mx-auto flex max-w-5xl justify-around space-x-16 p-4 pt-12'>
          <Fade left ssrFadeout>
            <div className='relative h-32 w-32'>
              <Image
                className='rounded-full'
                src='/images/header-background.jpg'
                alt='Jonathan Nsiah'
                layout='fill'
              />
            </div>
          </Fade>
          <div className='flex-1'>
            <Fade right ssrFadeout>
              {/**About Me */}
              <div className='mb-4'>
                <h2 className='mb-1 text-center font-[Montserrat] text-2xl capitalize text-white underline'>
                  About Me
                </h2>
                <p className='text-justify text-gray-400'>
                  Hi there! I am Jonathan! A{' '}
                  <span className='font-bold text-yellow-500'>
                    fullstack developer
                  </span>{' '}
                  with about{' '}
                  <span className='font-bold text-yellow-500'>three years</span>{' '}
                  of experience building software using some of the very modern
                  and current tools and technology. As a Full Stack developer,
                  I&apos;ve worked with startups and large corporations to help
                  build scalable software products for themselves and their
                  clients.
                </p>
              </div>
              {/**Education */}
              <div className='mb-4'>
                <h2 className='mb-2 text-center font-[Montserrat] text-2xl capitalize text-white underline'>
                  Education
                </h2>

                <h5 className='font-[Montserrat] text-lg font-bold uppercase text-gray-300'>
                  UDACITY
                </h5>
                <p className='italic text-gray-400'>
                  Nanodegree, AWS Cloud Developer •July 2021
                </p>

                <h5 className='mt-3 font-[Montserrat] text-lg font-bold uppercase text-gray-300'>
                  University for Development Studies - Ghana
                </h5>
                <p className='italic text-gray-400'>
                  Bachelor&apos;s Degree, Computer Science •November 2017
                </p>
              </div>

              {/**Work Experience */}
              <div>
                <h2 className='mb-2 text-center font-[Montserrat] text-2xl capitalize text-white underline'>
                  Work Experience
                </h2>

                <h5 className='font-[Montserrat] text-lg font-bold uppercase text-gray-300'>
                  Amalitech Gmbh
                </h5>
                <p className='italic text-gray-400'>
                  Software Engineer •November 2020 - Present
                </p>

                <h5 className='mt-3 font-[Montserrat] text-lg font-bold uppercase text-gray-300'>
                  University of Energy and Natural Resources - Ghana
                </h5>
                <p className='italic text-gray-400'>
                  Web Assistant •April 2019 - November 2020
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </TabPanel>
      <TabPanel className='bg-[#132766]'>
        <h2>Any content 3</h2>
      </TabPanel>
      <TabPanel className='bg-[#132766]'>
        <h2>Any content 4</h2>
      </TabPanel>
      <TabPanel className='bg-[#132766]'>
        <h2>Any content 5</h2>
      </TabPanel>
    </Tabs>
  );
}
