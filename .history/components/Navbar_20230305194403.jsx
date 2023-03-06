import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa";

export default function Navbar () {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }
    return(
        <div className="fixed w-full h-20 bg-black shadow-xl shadow-white z-[100]">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image 
                    src="/../public/assets/logo.png" 
                    alt="/" 
                    width={125} 
                    height={50}
                />
                <div>
                    <ul className=" hidden md:flex ">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b hover: text-white">Home</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b text-white">About</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b text-white">Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b text-white">Projects</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b text-white">Contact</li>
                        </Link>

                    </ul>
                     <div onClick={handleShow} className="md:hidden">
                         <AiOutlineMenu size={25}/>
                    </div>
                </div>
                <div className={show ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""}>
                    <div className={show ? 
                    "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-300 p-10 ease-in duration-500" : 
                    "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                        <div>
                            <div className="flex w-full items-center justify-between">
                                <Image 
                                src="/../public/assets/logo.png" 
                                alt="/" 
                                width={87} 
                                height={35}
                                />
                                <div onClick={handleShow} className="bg-slate-500 rounded-full shadow-lg shadow-black p-3 cursor-pointer">
                                    <AiOutlineClose size={25}/>
                                </div>
                            </div>
                            <div className="border-b border-black my-4">
                                <p className="w-[85%] md:w-[90%] py-4">Let's code something outstanding</p>
                            </div>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link href="/">
                                    <li className="py-4 text-sm">Home</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">About</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">Skills</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">Projects</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">Contact</li>
                                </Link>
                            </ul>
                            <div className="pt-40">
                                <p className="uppercase tracking-widest text-red-600">Connect with me</p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaInstagram />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}