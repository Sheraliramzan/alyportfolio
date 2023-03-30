import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'


const Contact = () => {
  return (
    <div className='w-full lg:h-screen overflow-y-scroll '>
        <div className='max-w-[1140px] m-auto px-2 py-6 w-full'>
        <p className='text-xl tracking-widest uppercase text-red-300'> 
                Projects
            </p>
                <h2 className='uppercase text-white py-6'>Get In <span className='text-red-500'>Touch</span></h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-red-500 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src='/assets/backl.jpg' alt='/' />
                            </div>
                            <div>
                                <h2 className='py-2 text-red-400 '>
                                    Aly Ramzan
                                </h2>
                                <p className='text-red-500'>Full-Stack Developer</p>
                                <p className='py-4 text-white'>I am available for Full-time | Freelance positions. Let's Talk! </p>
                            </div>
                            <p className='uppercase  text-red-500'>Connect with me</p>
                            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                                <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
                                <FaLinkedin/>
                                </div>
                                <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
                                <FaGithub/>
                                </div>
                                <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
                                 <AiOutlineMail/>
                                </div>
                                <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
                                 <FaInstagram/>
                                </div>
                            </div>                  
                        </div>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default Contact