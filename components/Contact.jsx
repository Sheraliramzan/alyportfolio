import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';


const Contact = () => {
  return (
    <div id='contact' className='w-full h-full overflow-y-scroll'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
         <div className='py-6 sm:py-12'>
                <p className='text-xl tracking-widest uppercase text-red-300'>
                 Projects
                </p>
                <h2 className='uppercase text-white py-6'>
                 Get In <span className='text-red-500'>Touch</span>
                </h2>
             <div className=' grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
                <div className='shadow-xl shadow-[#22262d] bg-black
                    bg-opacity-50 rounded-xl p-4'>
              <div className='p-4'>
                <div>
                  <img
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src='/assets/backl.jpg'
                    alt='/'
                  />
                </div>
                <div>
                  <h2 className='py-2 text-red-400'>Aly Ramzan</h2>
                  <p className='text-red-500'>Full-Stack Developer</p>
                  <p className='py-4 text-white'>
                    I am available for Full-time | Freelance positions. Let's
                    Talk!
                  </p>
                </div>
                <p className='uppercase text-red-500'>Connect with me</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <Link href="https://www.linkedin.com/in/aly-ramzan-22018b266/" target="_blank">
                  <div className='rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300'>
                    <FaLinkedin size={24} color="#fff" />
                  </div>
                  </Link>
                  <Link href="https://github.com/Sheraliramzan" target="_blank">
                  <div className='rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300'>
                    <FaGithub size={24} color="#fff" />
                  </div>
                  </Link>
                  <Link href="mailto:sheraliramzan36@gmail.com" target="_blank">
                  <div className='rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={24} color="#fff" />
                  </div>
                  </Link>
                  <Link href="https://www.instagram.com/alyramzan/" target="_blank">
                  <div className='rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300'>
                    <FaInstagram size={24} color="#fff" />
                  </div>
                  </Link>
                </div>
              </div>
             </div>
              <div className='flex flex-row'>
                 <div className='flex-1 w-full h-auto shadow-xl bg-black bg-opacity-50 shadow-[#22262d] rounded-xl lg:p-4 flex-grow-1 min-h-0'>
                    <div className='p-10'>
                    <div>
                       <img
                        className='rounded-xl hover:scale-105 ease-in duration-300 w-[600px] flex'
                        src='/assets/Me2.png'
                        alt='Contact image'
                    />
                      </div>
                      <div className='p-4 mt-4 flex flex-col items-start'>
                      <h2 className='text-xl font-bold text-red-400'>Contact Me</h2>
                      <p className='text-white mt-2'>Phone: 604-760-2908</p>
                      <p className='text-white mt-2'>Address: 13308 central ave, Surrey, BC</p>
                      <p className='text-white mt-2'>Email: Sheraliramzan36@gmail.com </p>
                    </div>
                    </div>
                  </div>
            </div>
                
            </div>
      </div>
      <div className='flex justify-center py-8 md:py-12'>
      <Link href='/'>
        <div className='bg-red-500 rounded-full shadow-lg shadow-red-200 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
          <HiOutlineChevronDoubleUp color='white' size={30} />
        </div>
      </Link>
    </div>
    </div>
    </div>
  );
};

export default Contact;