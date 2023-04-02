import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Back from "./Back";
import Link from "next/link";

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
      <div className="max-w-7xl mx-auto h-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-100 mb-4">
            Welcome To My Portfolio
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Hey, I'm <span className="text-red-600">Aly</span>
          </h2>
          <h2 className="font-sans text-white text-2xl md:text-4xl mb-8">
            I'm a{" "}
            <span className="text-red-600 font-sans typewriter-text">
              {displayedText}
            </span>
          </h2>
          <p className="font-sans text-white max-w-3xl mx-auto mb-8 px-4 md:px-0">
            As a {fullText.toLowerCase()}, you possess a diverse range of
            technical skills and knowledge in {fullText.toLowerCase()} development. You are
            able to design and develop fully functional {fullText.toLowerCase()} applications
            from scratch, utilizing a variety of programming languages,
            frameworks, and tools.
          </p>
          <div className="flex items-center justify-between max-w-sm mx-auto mb-8">
            <Link href="https://www.linkedin.com/in/aly-ramzan-22018b266/" target="_blank">
            <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
              <FaLinkedin size={24} color="#fff"/>
            </div>
            </Link>
            <Link href="https://github.com/Sheraliramzan" target="_blank">
            <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
              <FaGithub size={24} color="#fff" />
            </div>
            </Link>
            <Link href="mailto:sheraliramzan36@gmail.com">
            <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
              <AiOutlineMail size={24} color="#fff" />
            </div>
            </Link>
            <Link href="https://www.instagram.com/alyramzan/" target="_blank">
            <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
              <FaInstagram size={24} color="#fff"/>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}




