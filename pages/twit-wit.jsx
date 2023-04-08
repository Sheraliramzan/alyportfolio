import Image from 'next/image'
import React from 'react'
import login from '../public/twit/Login.png'
import Link from 'next/link'
import Head from 'next/head'
import noti from '../public/twit/noti.png'
import profile from '../public/twit/profile.png'
import code1 from '../public/twit/code1.png'
import code2 from '../public/twit/code2.png'
import { motion } from 'framer-motion'

const TwitWit = () => {
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
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <motion.div
            className='rounded-xl shadow-xl shadow-gray-700'
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, loop: Infinity, repeatDelay: 1 }}
             whileHover={{ scale: 1.2, transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 } }}
            whileTap={{ scale: 0.8, transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 } }}
            >
                <Image src={login} alt="Twit-Wit Background" width={600} height={600} />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 max-w-md rounded-xl shadow-xl shadow-gray-700 bg-black/80 py-6 px-6">
            <h1 className=" text-red-500 text-6xl font-bold mb-4">Twit-Wit</h1>
            <p className='text-white text-sm mb-4'>Twit-Wit is a full-stack Twitter clone that was built entirely by  myself. 
            I used a variety of cutting-edge technologies, including Next.js, Tailwind CSS, Prisma, MongoDB, and NextAuth.js 
            to create a polished and feature-rich application.</p>
            <p className='text-white text-sm mb-4'>By leveraging these technologies and implementing industry best practices, I was able to design a visually appealing and responsive user interface, establish a scalable and robust data model, 
            and provide secure authentication and authorization for users. </p>
            
            <p className='text-white mb-2'><span className='text-red-300'>Project Date:</span> January - March 2023</p>
            <p className='text-white  mb-2'><span className='text-red-300'>Role:</span> Full-Stack Developer</p>
            
            <p className=" text-red-300 text-sm mb-8">A Twitter clone built with Next.js | Tailwind | Typescript | Prisma and MongoDB.</p>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-stretch">
              <Link href="https://github.com/Sheraliramzan/twit-wit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-2 sm:mb-0">
                View Code
              </Link>
              <Link href="https://twit-wit.vercel.app/" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                View Project
              </Link>
            </div>
          </div>
        </div>
        <div>
            <h3 className=" text-red-500 text-4xl font-bold mb-4 uppercase">Visuals</h3>
        </div>
        <div className='mt-11 justify-between flex flex-col md:flex-row gap-4 md:gap-0'>
        <motion.div
            className='rounded-xl shadow-xl shadow-black w-full md:w-auto'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={noti} alt='Twit-Wit Background' width={520} height={500} />
         </motion.div>
         <motion.div
            className='rounded-xl shadow-xl shadow-black w-full md:w-auto'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={profile} alt='Twit-Wit Background' width={500} height={500} />
         </motion.div>
        </div>
        <div>
            <h3 className=" text-red-500 text-4xl font-bold mb-4 mt-11 uppercase">Project Overview</h3>
            <p className='text-white text-sm mb-4'>Twit-Wit is a full-stack Twitter clone built using modern web technologies, including Next.js, Tailwind CSS, Prisma, MongoDB, and NextAuth.js. 
            The project includes both the front-end and back-end, with a visually appealing and responsive user interface, a robust and scalable data model, 
            and secure user authentication and authorization. Users can create an account, sign in securely, post tweets, follow and unfollow other users, 
            view and like tweets, and edit their profile information.</p>
            <p className='text-white text-sm mb-4'>The project also features advanced functionality such as real-time tweet updates and dynamic user suggestions based on interests. 
            Overall, Twit-Wit is a polished and impressive project that showcases the developer's proficiency in full-stack development and modern web technologies.</p>

        </div>
        <div className='mt-11 justify-between flex flex-col md:flex-row gap-4 md:gap-0'>
        <motion.div
            className='rounded-xl shadow-xl shadow-black w-full md:w-auto'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={code1} alt='Twit-Wit Background' width={500} height={500} />
         </motion.div>
         <motion.div
            className='rounded-xl shadow-xl shadow-black w-full md:w-auto'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={code2} alt='Twit-Wit Background' width={500} height={500} />
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

export default TwitWit