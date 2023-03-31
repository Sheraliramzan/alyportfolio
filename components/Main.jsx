import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa";
import Back from "./Back";

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
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-100 ">
            Welcome To My Portfolio
          </p>
          <h2 className=" py-4 text-white">
            Hey, I'm <span className="text-red-600 ">Aly</span>
          </h2>
          <h2 className="font-sans py-4 text-white">
            I'm a{" "}
            <span className="text-red-600 font-sans typewriter-text">
              {displayedText}
            </span>
          </h2>
          <p className="font-sans py-4 text-white max-w-[70%] m-auto">
            As a {fullText.toLowerCase()}, you possess a diverse range of technical
            skills and knowledge in {fullText.toLowerCase()} development. You
            are able to design and develop fully functional {fullText.toLowerCase()} applications
            from scratch, utilizing a variety of programming languages,
            frameworks, and tools.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
              <FaLinkedin/>
            </div>
            <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
              <FaGithub/>
            </div>
            <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
              <AiOutlineMail/>
            </div>
            <div className="rounded-full shadow-lg shadow-red-200 p-6 cursor-pointer bg-red-500 hover:scale-110 ease-in duration-300">
              <FaInstagram/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




