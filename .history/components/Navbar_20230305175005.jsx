import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar () {
    return(
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image 
                    src="/../public/assets/logo.png" 
                    alt="/" 
                    width={125} 
                    height={50}
                />
                <div>
                    <ul>
                        <Link href="/">
                            <liHome
                        </Link>

                    </ul>
                </div>
            </div>
        </div>
    )
}