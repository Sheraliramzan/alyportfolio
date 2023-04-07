import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Back from "./Back";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const fullTexts = [
    "Front-end Web Developer",
    "UX/UI Designer",
    "Mobile Developer",
    "Full-Stack Web Developer",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTextIndex((textIndex) => (textIndex + 1) % fullTexts.length);
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, [fullTexts]);

  const fullText = fullTexts[textIndex];

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div id="home" className="w-full h-screen text-center sm:pt-5">
      <div className="max-w-[1240px] mx-auto h-full flex flex-col sm:flex-row justify-center items-center px-4 sm:px-6 lg:px-8 ">
        <div className="text-center sm:text-left sm:w-1/2">
          <p className="uppercase text-sm tracking-widest text-gray-100 mb-4">
            Welcome To My Portfolio
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Hey, I'm <span className="text-red-600">Aly Ramzan</span>
          </h2>
          <h2 className="font-sans text-white text-2xl md:text-4xl mb-8">
            I'm a{" "}
            <span className="text-red-600 font-sans typewriter-text">
              {displayedText}
            </span>
          </h2>
          <p className="font-sans text-white max-w-3xl mx-auto mb-8 px-4 md:px-0">
            As a {fullText.toLowerCase()}, I possess a diverse range of
            technical skills and knowledge in {fullText.toLowerCase()} development. I am
            able to design and develop fully functional {fullText.toLowerCase()} applications
            from scratch, utilizing a variety of programming languages,
            frameworks, and tools.
          </p>
          <div className="fixed top-[40%] z-50 right-5 space-y-4 flex-col items-end justify-end max-w-sm mx-auto  hidden sm:flex">
            <div className="absolute bottom-[215px] left-1/2 bg-white h-full w-1 transform -translate-x-1/2"></div>
            <a href="https://www.linkedin.com/in/aly-ramzan-22018b266/" target="_blank">
             <div className="rounded-full shadow-lg shadow-red-200 p-2 bg-white cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin className="text-black" size={24} />
              </div>
            </a>
            <a href="https://github.com/Sheraliramzan" target="_blank">
              <div className="rounded-full shadow-lg shadow-red-200 p-2 bg-white cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="text-black" size={24} />
             </div>
            </a>
            <a href="mailto:sheraliramzan36@gmail.com" target="_blank">
              <div className="rounded-full shadow-lg shadow-red-200 p-2 bg-white cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="text-black" size={24} />
              </div>
           </a>
          <a href="https://www.instagram.com/alyramzan/" target="_blank">
              <div className="rounded-full shadow-lg shadow-red-200 p-2 bg-white cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram className="text-black" size={24} />
              </div>
            </a>
            <div className="absolute top-[214px] left-1/2 bg-white h-full w-1 transform -translate-x-1/2"></div>
          </div>
        </div>
        <div className="flex justify-center items-center sm:w-1/2 mt-8 sm:mt-0">
          <motion.div
            className="rounded-full overflow-hidden"
            whileHover={{ scale: 1.2, opacity: 0.5, rotate: 360 }}
            transition={{ duration: 1}}
          >
            <Image src="/assets/Me2.png" alt="/" width={300} height={300} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}




