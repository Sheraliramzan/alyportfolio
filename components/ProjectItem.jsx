import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, projectUrl, title2 }) => {
  return (
    <div className='
                    relative 
                    flex 
                    items-center 
                    justify-center 
                    w-full 
                    h-auto 
                    shadow-xl 
                    shadow-red-600 
                    rounded-xl 
                    p-4 
                    group 
                    hover:bg-gradient-to-r from-[#FF726F] to-[#DC143C]'>
                        <Image className='rounded-xl group-hover:opacity-30' src={backgroundImg} alt='/' width={400} height={400}  />
                        <div className='hidden group-hover:block absolute top-[34%] left-[50%] translate-x-[-50%] traslate-y-[-50%]'>
                            <h3 className='text-2xl text-red-900 tracking-wider text-center'>{title}</h3>
                            <p className='pb-4 pt-2 text-white text-center'>{title2}</p>
                            <Link href={projectUrl}>
                                <p className='text-center py-3 rounded-lg bg-white text-red-400 font-bold text-lg cursor-pointer '>More Info</p>
                            </Link>
                        </div>
                    </div>
  )
}

export default ProjectItem