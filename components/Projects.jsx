import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import back from '../public/projects/backTrack.png'
import back2 from '../public/projects/backTweet.png'
import back3 from '../public/projects/backTrack.png'
import back4 from '../public/projects/backTrack.png'
import back5 from '../public/projects/backTrack.png'
import back6 from '../public/projects/backTrack.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-red-300'> 
                Projects
            </p>
                <h2 className=' uppercase text-white py-6'>What I Have <span className='text-red-500'>Built</span></h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem 
                    title="Twit-Wit" 
                    backgroundImg={back2}
                    projectUrl="/twit-wit"
                    title2 ="NextJS | Typescript | MongoDB"
                    />
                    
                    <ProjectItem 
                    title="TrackStacks" 
                    backgroundImg={back}
                    projectUrl="/trackstacks"
                    title2="React | Firebase | IOS"
                    />
                    <ProjectItem 
                    title="PokeVerse" 
                    backgroundImg={back3}
                    projectUrl="/trackstacks"/>
                    <ProjectItem 
                    title="Pathfinder" 
                    backgroundImg= {back4}
                    projectUrl="/trackstacks"/>
                    <ProjectItem 
                    title="Chillingo" 
                    backgroundImg={back5}
                    projectUrl="/trackstacks"/>
                    <ProjectItem 
                    title="WeatherAPI" 
                    backgroundImg={back6}
                    projectUrl="/trackstacks"/>
                </div>
        </div>
    </div>
  )
}

export default Projects