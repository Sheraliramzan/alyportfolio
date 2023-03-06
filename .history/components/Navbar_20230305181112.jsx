import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

export default function Navbar () {
    return(
        <div className="fixed w-full h-20 bg-rose-50 shadow-xl z-[100]">
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
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>

                    </ul>
                     <div className="md:hidden">
                         <AiOutlineMenu size={35}/>
                    </div>
                </div>
                <div className="fixed left-0 top-0 w-full h-screen bg-black/60">
                    <div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}