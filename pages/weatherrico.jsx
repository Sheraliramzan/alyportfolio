import Image from 'next/image'
import React from 'react'
import A1 from '../public/weather/A1.png'
import Link from 'next/link'
import Head from 'next/head'
import A2 from '../public/weather/A2.png'
import A3 from '../public/weather/A3.png'
import  A4 from '../public/weather/A4.png'
import A5 from '../public/weather/A5.png'
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
            <h1 className=" text-red-500 text-6xl font-bold mb-4">WeatherRico</h1>
            <p className='text-white text-sm mb-4'>I was the developer of this weather app, I utilized my skills in ReactJs to create a functional and user-friendly application. I implemented the Axios library to pull weather data from the Open Weather API, 
            and I utilized Tailwind CSS to create a clean and modern design.</p>
            <p className='text-white text-sm mb-4'>My expertise in ReactJs allowed me to implement the useState and useEffect hooks to manage state and lifecycle events. The useState hook was used to store the user input location as state, and the useEffect hook was implemented to trigger an API call to update the weather data every time the user input a new location.
I also implemented error handling in case of invalid location inputs, ensuring that the user is provided with clear and concise error messages. </p>
            
            <p className='text-white mb-2'><span className='text-red-300'>Project Date:</span> January - February 2023</p>
            <p className='text-white  mb-2'><span className='text-red-300'>Role:</span> Front-end Developer</p>
            
            <p className=" text-red-300 text-sm mb-8"> Weather App was built with NextJS | Axios | Tailwind | API | OpenWeather</p>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-stretch">
              <Link href="https://github.com/Sheraliramzan/WeatherRico" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-2 sm:mb-0">
                View Code
              </Link>
              <Link href="https://weather-rico.vercel.app/" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                View Project
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
            <Image src={A3} alt='Twit-Wit Background' width={500} height={500} />
         </motion.div>
        </div>
        <div>
            <h3 className=" text-red-500 text-4xl font-bold mb-4 mt-11 uppercase">Project Overview</h3>
            <p className='text-white text-sm mb-4'>This project was a weather app that allowed users to check current weather conditions for any location. 
            I, as the developer, utilized ReactJs to create the front-end of the application and utilized Axios to pull weather data from the Open Weather API. 
            I also used Tailwind CSS to create a modern and clean design for the application.

</p>
            <p className='text-white text-sm mb-4'>The application's front-end design was user-friendly and responsive, with clear and concise weather information displayed for each location inputted by the user. I implemented the useState and useEffect hooks to manage state and lifecycle events, allowing the application to update the weather data in real-time and display accurate information for each location.
I also utilized error handling to provide clear error messages in case of invalid location inputs. The application was designed to be accessible and easy to use for all users, regardless of their technical expertise.</p>

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