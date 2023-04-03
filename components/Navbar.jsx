import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa";

export default function Navbar () {

    const [show, setShow] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    useEffect(() => {
       const handleShadow = () => {
        if(window.scrollY >= 90){
            setShadow(true);
        }else{
            setShadow(false);
        }
       }
         window.addEventListener("scroll", handleShadow);
    }, []);
    return(
        <div className={shadow ? 'fixed top-0 w-full h-21 p-6 shadow-xl shadow-gray-500 z-[100] bg-black' : "fixed top-0 w-full h-21 p-6  z-[100] bg-black"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                <Image 
                    src="/assets/logo.png" 
                    alt="/" 
                    width={105} 
                    height={50}
                />
                </Link>
                <div>
                    
                    <ul className=" hidden md:flex ">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:text-red-600 text-white">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:text-red-600 text-white">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:text-red-600 text-white">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:text-red-600 text-white">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:text-red-600 text-white">Contact</li>
                        </Link>

                    </ul>
                   
                     <div onClick={handleShow} className="md:hidden ml-[150px]">
                         <AiOutlineMenu className="" size={35}/>
                    </div>
                </div>
                <div className={show ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""}>
                    <div className={show ? 
                    "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-500 p-10 ease-in duration-500" : 
                    "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                        <div>
                            <div className="flex w-full items-center justify-between">
                                <Link href="/">
                                <Image 
                                src="/assets/logo.png" 
                                alt="/" 
                                width={87} 
                                height={35}
                                />
                                </Link>
                                <div onClick={handleShow} className="bg-gray-500 rounded-full shadow-lg shadow-black p-3 cursor-pointer">
                                    <AiOutlineClose size={25}/>
                                </div>
                            </div>
                            <div className="border-b border-black my-4">
                                <p className="w-[85%] md:w-[90%] py-4 font-bold text-white">Let's code something outstanding</p>
                            </div>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link href="/">
                                    <li onClick={()=> setShow(false)} className="py-4 text-sm font-bold text-white">Home</li>
                                </Link>
                                <Link href="/#about">
                                    <li onClick={()=> setShow(false)} className="py-4 text-sm font-bold text-white ">About</li>
                                </Link>
                                <Link href="/#skills">
                                    <li onClick={()=> setShow(false)} className="py-4 text-sm font-bold text-white">Skills</li>
                                </Link>
                                <Link href="/#projects">
                                    <li onClick={()=> setShow(false)} className="py-4 text-sm font-bold text-white">Projects</li>
                                </Link>
                                <Link href="/#contact">
                                    <li onClick={()=> setShow(false)} className="py-4 text-sm font-bold text-white">Contact</li>
                                </Link>
                            </ul>
                            <div className="pt-40">
                                <p className="uppercase tracking-widest text-red-600 font-bold">Connect with me</p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                    <Link href="https://www.linkedin.com/in/aly-ramzan-22018b266/" target="_blank">
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer bg-white hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                    </Link>
                                    <Link href="https://github.com/Sheraliramzan" target="_blank">
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer bg-white hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                    </Link>
                                    <Link href="https://www.instagram.com/alyramzan/" target="_blank">
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer bg-white hover:scale-105 ease-in duration-300">
                                        <FaInstagram />
                                    </div>
                                    </Link>
                                    <Link href="mailto:sheraliramzan36@gmail.com" target="_blank" >
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer bg-white hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}