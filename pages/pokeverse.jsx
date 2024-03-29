import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import A1 from '../public/poke/A1.png'
import A2 from '../public/poke/A2.png'
import A3 from '../public/poke/A3.png'
import A4 from '../public/poke/A4.png'
import A5 from '../public/poke/A5.png'
import A6 from '../public/poke/A6.png'
import { motion } from 'framer-motion'

const PokeVerse = () => {
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
            <h1 className=" text-red-500 text-6xl font-bold mb-4">PokeVerse</h1>
            <p className='text-white text-sm mb-4'>This application was created to attach Pokemon's API to our project using Axios, 
            as well as Tailwind was used for styling. I was the main lead in this project. </p>
            <p className='text-white text-sm mb-4'>In this project, playwright testing was used for testing, as well as firebase for the login of the user. 
            This application gave information of all the Pokemon's in the pokeverse. I inputed Axios to pull all the information from the API</p>
            
            <p className='text-white mb-2'><span className='text-red-300'>Project Date:</span> January - March 2023</p>
            <p className='text-white  mb-2'><span className='text-red-300'>Role:</span> Full-Stack Developer</p>
            
            <p className=" text-red-300 text-sm mb-8">PokeVerse was built with Next.js | Tailwind | Firebae | Axios.</p>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-stretch">
              <Link href="https://github.com/Sheraliramzan/PokemonFinal" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-2 sm:mb-0">
                View Code
              </Link>
              <Link href="https://pokemon-final-liart.vercel.app/" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                View Project
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
            <Image src={A2} alt='Twit-Wit Background' width={500} height={500} />
         </motion.div>
         <motion.div
            className='rounded-xl shadow-xl shadow-black'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={A4} alt='Twit-Wit Background' width={500} height={500} />
         </motion.div>
        </div>
        <div>
            <h3 className=" text-red-500 text-4xl font-bold mb-4 mt-11 uppercase">Project Overview</h3>
            <p className='text-white text-sm mb-4'>The web application is designed to allow users to browse and search information about various Pokemon in the Pokeverse. 
            The application uses the Pokemon API to retrieve data about different Pokemon, such as their names, types, abilities, stats, and more. 
            The data is then displayed in a visually appealing and user-friendly manner using Tailwind for styling.
            Users can interact with the application by searching for a specific Pokemon using the search bar or by browsing through a list of Pokemon. 
            The application provides detailed information about each Pokemon, including their base stats, moves, and evolutionary history.
            </p>
            <p className='text-white text-sm mb-4'>
            To ensure the quality and reliability of the application, you used Playwright for testing, which allows you to write automated tests to ensure that the application functions as expected. 
            Additionally, you used Firebase for user authentication, which allows users to create accounts and log in securely to access certain features of the application.
            </p>

        </div>
        <div className='mt-11 justify-between flex flex-col md:flex-row gap-4 md:gap-0 items-center'>
        <motion.div
            className='rounded-xl shadow-xl shadow-black'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={A5} alt='Twit-Wit Background' width={500} height={500} />
         </motion.div>
         <motion.div
            className='rounded-xl shadow-xl shadow-black'
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Image src={A6} alt='Twit-Wit Background' width={500} height={500} />
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

export default PokeVerse