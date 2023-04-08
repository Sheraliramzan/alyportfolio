import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import A1 from '../public/trackstacks/Asset1.png'
import A2 from '../public/trackstacks/Asset2.png'
import A3 from '../public/trackstacks/Asset3.png'
import A4 from '../public/trackstacks/Asset4.jpg'
import A5 from '../public/trackstacks/Asset5.jpg'
import A6 from '../public/trackstacks/Asset6.png'
import { motion } from 'framer-motion'

const Trackstacks = () => {
  return (
    <>
    <Head>
        <title>Aly | Full-Stack Developer</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
    <div className="p-8 mt-[100px] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <div className="md:w-1/2">
          <motion.div
          className="flex justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, loop: Infinity, repeatDelay: 1 }}
             whileHover={{ scale: 1.2, transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 } }}
            whileTap={{ scale: 0.8, transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 } }}
            >
                <Image src={A1} alt="Twit-Wit Background" width={230} height={200} />
            </motion.div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 max-w-md rounded-xl shadow-xl shadow-gray-700 bg-black/80 py-6 px-6">
            <h1 className=" text-red-500 text-6xl font-bold mb-4">TrackStacks</h1>
            <p className='text-white text-sm mb-4'>This application was created for Users, that suffer with ADHD, Where it helps in creating tasks. This task managing application helps users to complete tasks in a fun way, where users are rewarded to do so. </p>
            <p className='text-white text-sm mb-4'>I was a front and back end developer, who helped achieve the functionality between the client and the server, with help of NextJs, Express as well as Firebase. JavaScript elements were used also to create components, 
            as well the an exclusive and easy to read design structure. This was developed in a 6 man squad.</p>
            
            <p className='text-white mb-2'><span className='text-red-300'>Project Date:</span> September - December 2022</p>
            <p className='text-white  mb-2'><span className='text-red-300'>Role:</span>  Front-end | Back-end Developer</p>
            
            <p className=" text-red-300 text-sm mb-8">TrackStacks App built with ReactJS | NodeJS | JavaScript | Firebase</p>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-stretch">
              <Link href="https://github.com/SeanHLam/TrackStacks" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-2 sm:mb-0">
                View Code
              </Link>
            </div>
          </div>
        </div>
        <div>
            <h3 className=" text-red-500 text-4xl font-bold mb-4 uppercase">Visuals</h3>
        </div>
        <div className='mt-11 justify-between flex flex-col md:flex-row gap-4 md:gap-0 items-center'>
        <motion.div
            className='rounded-xl shadow-xl shadow-black'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={A2} alt='Twit-Wit Background' width={200} height={200} />
         </motion.div>
         <motion.div
            className='rounded-xl shadow-xl shadow-black'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={A6} alt='Twit-Wit Background' width={200} height={200} />
         </motion.div>
         <motion.div
            className='rounded-xl shadow-xl shadow-black'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={A3} alt='Twit-Wit Background' width={200} height={200} />
         </motion.div>
        </div>
        <div>
            <h3 className=" text-red-500 text-4xl font-bold mb-4 mt-11 uppercase">Project Overview</h3>
            <p className='text-white text-sm mb-4'>The application I worked on is a task management tool designed specifically for users with ADHD, aimed at helping them complete tasks in a fun and rewarding way. 
            As a front and back end developer, I was responsible for building the functionality that allows the client to communicate with the server. </p>
            <p className='text-white text-sm mb-4'>To accomplish this, I utilized Next.js, Express, and Firebase, as well as various JavaScript elements to create components and an easy-to-read design structure. 
            I worked on this project as part of a six-person team, and together I was able to create an effective and user-friendly tool to assist those with ADHD in managing their tasks..</p>

        </div>
        <div className='mt-11 justify-between flex flex-col md:flex-row gap-4 md:gap-0 items-center'>
        <motion.div
            className='rounded-xl shadow-xl shadow-black'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={A4} alt='Twit-Wit Background' width={500} height={500} />
         </motion.div>
         <motion.div
            className='rounded-xl shadow-xl shadow-black'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={A5} alt='Twit-Wit Background' width={500} height={500} />
         </motion.div>
        </div>
        <div className='justify-center items-center mt-8 flex'>
        <Link href="/#projects" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Back to Projects
              </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Trackstacks