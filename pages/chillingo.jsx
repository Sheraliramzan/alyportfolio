import Image from 'next/image'
import React from 'react'
import A1 from '../public/chillingo/A1.png'
import Link from 'next/link'
import Head from 'next/head'
import A2 from '../public/chillingo/A2.png'
import A3 from '../public/chillingo/A3.png'
import  A4 from '../public/chillingo/A4.png'
import A5 from '../public/chillingo/A5.png'
import { motion } from 'framer-motion'

const Chillingo = () => {
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
            className='rounded-xl shadow-xl shadow-gray-700'
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, loop: Infinity, repeatDelay: 1 }}
             whileHover={{ scale: 1.2, transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 } }}
            whileTap={{ scale: 0.8, transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 } }}
            >
                <Image src={A1} alt="Twit-Wit Background" width={600} height={600} />
            </motion.div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 max-w-md rounded-xl shadow-xl shadow-gray-700 bg-black/80 py-6 px-6">
            <h1 className=" text-red-500 text-6xl font-bold mb-4">Chillingo</h1>
            <p className='text-white text-sm mb-4'> I was responsible for developing both the front-end and the back-end of this sound player application. I used ExpressJs and Sqlite3, Knex to create the backend and implemented a beautiful front-end layout to provide an excellent user experience.
     I utilized skills in developing the front-end using technologies like HTML, CSS, and JavaScript.</p>
            <p className='text-white text-sm mb-4'>For the back-end, I used ExpressJs to create a robust and scalable server-side application. I also used Sqlite3, Knex to store user data securely in a database. My expertise in these technologies allowed me to create a sound player application that is responsive, scalable, and provides an excellent user experience. </p>
            
            <p className='text-white mb-2'><span className='text-red-300'>Project Date:</span> September - December 2022</p>
            <p className='text-white  mb-2'><span className='text-red-300'>Role:</span> Full-Stack Developer</p>
            
            <p className=" text-red-300 text-sm mb-8">Chillingo was built with NextJS | Redux | ExpressJS | Sqlite3</p>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-stretch">
              <Link href="https://github.com/Sheraliramzan/Chillingo-music-player" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-2 sm:mb-0">
                View Code
              </Link>
            </div>
          </div>
        </div>
        <div>
            <h3 className=" text-red-500 text-4xl font-bold mb-4 uppercase">Codes</h3>
        </div>
        <div className='mt-11 justify-between flex flex-col md:flex-row gap-4 md:gap-0 items-center'>
        <motion.div
            className='rounded-xl shadow-xl shadow-black'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={A2} alt='Twit-Wit Background' width={500} height={500} />
         </motion.div>
         <motion.div
            className='rounded-xl shadow-xl shadow-black'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={A3} alt='Twit-Wit Background' width={430} height={500} />
         </motion.div>
        </div>
        <div>
            <h3 className=" text-red-500 text-4xl font-bold mb-4 mt-11 uppercase">Project Overview</h3>
            <p className='text-white text-sm mb-4'>This project aimed to develop a sound player application that allows users to listen to music and create their playlists. I, as a full-stack developer, were responsible for creating both the front-end and the back-end of the application using ExpressJs and Sqlite3, Knex.

I work on the front-end included implementing a beautiful and intuitive interface using HTML, CSS, and JavaScript. I developed features that allowed users to browse, search, and create playlists, making the user experience seamless and enjoyable.

</p>
            <p className='text-white text-sm mb-4'>On the back-end, I used ExpressJs to create a robust and scalable server-side application. I also utilized Sqlite3, Knex to store user data securely in a database. 
            My expertise in these technologies helped me create an efficient and secure back-end system that allows users to save their playlists and access them from any device.</p>

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

export default Chillingo