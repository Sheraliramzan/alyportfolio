import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from r


export default function Home() {
  return (
    <>
      <Head>
        <title>Aly's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <main className='bg-white px-10 '>
        <section className="bg-white min-h-screen ">
        <nav className='py-10 mb-12 flex justify-between'>
          <Image/>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill/></li>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li><a href='#'>Resume</a></li>
          </ul>
        </nav>
        </section>
      </main>
    </>
  )
}
