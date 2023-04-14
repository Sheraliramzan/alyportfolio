import Image from 'next/image'
import React from 'react'
import A1 from '../public/taskmas/A1.png'
import Link from 'next/link'
import Head from 'next/head'
import A2 from '../public/taskmas/A2.png'
import A3 from '../public/taskmas/A3.png'
import  A4 from '../public/taskmas/A4.png'
import A5 from '../public/taskmas/A5.png'
import { motion } from 'framer-motion'

const TaskMas= () => {
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
            <h1 className=" text-red-500 text-6xl font-bold mb-4">TaskMas</h1>
            <p className='text-white text-sm mb-4'>Your todo list app is a web application built using the Angular framework and Bootstrap styling. The app provides a simple and intuitive interface for users to create and manage tasks. 
            The layout is clean and user-friendly, with a responsive design that works well on a range of devices.</p>
            <p className='text-white text-sm mb-4'>Tasks in the list are displayed with their description, priority level, and a checkbox indicating whether the task has been completed. 
            Users can mark tasks as complete by clicking on the checkbox, and completed tasks are visually differentiated from incomplete tasks. </p>
            
            <p className='text-white mb-2'><span className='text-red-300'>Project Date:</span> April 2023</p>
            <p className='text-white  mb-2'><span className='text-red-300'>Role:</span> Front-end Developer</p>
            
            <p className=" text-red-300 text-sm mb-8"> Todo List App was built with NextJS | Angular | Bootstarp</p>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-stretch">
              <Link href="https://github.com/Sheraliramzan/todo-app" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-2 sm:mb-0">
                View Code
              </Link>
              <Link href="https://todo-app-teal-tau.vercel.app/" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
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
            <p className='text-white text-sm mb-4'>The app also provides options for users to edit and delete existing tasks. When a user clicks on an existing task in the list, a modal window appears with the task details pre-filled. 
            Users can make changes to the task description, and then save or cancel their changes.

</p>
            <p className='text-white text-sm mb-4'>This todo list app provides a simple and effective way for users to manage their tasks and stay organized. 
            With its clean interface and responsive design, it is sure to be a hit with anyone looking for a straightforward task management solution.</p>

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

export default TaskMas