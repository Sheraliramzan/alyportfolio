import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import A1 from '../public/pathfinder/A1.png'
import A2 from '../public/pathfinder/A2.png'
import A3 from '../public/pathfinder/A3.png'
import A4 from '../public/pathfinder/A4.png'
import A5 from '../public/pathfinder/A5.png'
import A6 from '../public/pathfinder/A6.png'
import { motion } from 'framer-motion'

const Pathfinder = () => {
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
            <h1 className=" text-red-500 text-6xl font-bold mb-4">Pathfinder</h1>
            <p className='text-white text-sm mb-4'>This application was created for Users like young adults, who suffer at a young age of becoming homeless. This application helps users to donate as well as help these kids in need.  </p>
            <p className='text-white text-sm mb-4'>I was a front-end dev, who helped achieve the functionality between the client and the server, with help of NextJs, ReactJs. JavaScript elements were used also to create components, as well the an exclusive and easy to read design structure. 
            This was developed in a 4 man squad.</p>
            
            <p className='text-white mb-2'><span className='text-red-300'>Project Date:</span> January - May 2022</p>
            <p className='text-white  mb-2'><span className='text-red-300'>Role:</span>  Front-end Developer</p>
            
            <p className=" text-red-300 text-sm mb-8">Pathfinder App built with ReactJS | NextJS | JavaScript | GreenShock</p>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-stretch">
              <Link href="https://github.com/DesmandD3/finalApp" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-2 sm:mb-0">
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
            <Image src={A4} alt='Twit-Wit Background' width={200} height={200} />
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
            <p className='text-white text-sm mb-4'>The aim of this project was to develop a web application to help young adults who suffer from homelessness. The application enables users to donate and provide help to those in need. 
            As a front-end developer, My role in the project was to achieve the functionality between the client and the server using NextJs and ReactJs. I used JavaScript elements to create components, and also designed an exclusive and easy-to-read design structure. </p>
            <p className='text-white text-sm mb-4'>The project was developed by a 4-man squad, and the team worked together to create a functional and user-friendly web application. The application allows users to navigate easily and intuitively through the various sections and functions. With the help of the developed functionality, users can make donations, provide support, and help those who suffer from homelessness.
The design of the web application is both attractive and straightforward. The use of NextJs and ReactJs enabled you to create a responsive design that works well across all devices. The components you developed are user-friendly, and the design structure is intuitive, making it easy for users to find the information they need.</p>
        </div>
        <div className='mt-11 justify-between flex flex-col md:flex-row gap-4 md:gap-0 items-center'>
        <motion.div
            className='rounded-xl shadow-xl shadow-black'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={A6} alt='Twit-Wit Background' width={500} height={500} />
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

export default Pathfinder