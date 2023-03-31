import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';

const Contact = () => {
  return (
    <div className='w-full h-full overflow-y-scroll'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
         <div className='py-6 sm:py-12'>
                <p className='text-xl tracking-widest uppercase text-red-300'>
                 Projects
                </p>
                <h2 className='uppercase text-white py-6'>
                 Get In <span className='text-red-500'>Touch</span>
                </h2>
             <div className=' grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3'>
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
                  <div className='rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300'>
                    <FaLinkedin />
                  </div>
                  <div className='rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                  <div className='rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <div className='rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300'>
                    <FaInstagram />
                  </div>
                </div>
              </div>
             </div>
                <div className='col-span-1 sm:col-span-2 w-full h-auto shadow-xl bg-black
                    bg-opacity-50 shadow-[#22262d] rounded-xl lg:p-4'>
                <div className='p-4'>
                <form>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2 text-white'>
                        Name
                      </label>
                      <input className='border-2 rounded-lg p-3 flex border-red-300' type='text' />
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2 text-white'>
                        Phone Number
                      </label>
                      <input className='border-2 rounded-lg p-3 flex border-red-300' type='text' />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 text-white'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-red-300' type="email" />
                        </div>
                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 text-white'>Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-red-300' type="text" />
                        </div>
                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 text-white'>Message</label>
                        <textarea className='border-2 rounded-lg p-3 border-red-400'rows="10"></textarea>
                        </div>
                        <button className='w-full p-4 text-white mt-4'>Send Message</button>
                    </form>
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