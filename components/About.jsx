import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-14">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-red-300">About</p>
          <h2 className="py-4 text-white uppercase">Who I <span className="text-red-500">AM</span></h2>
          <p className="py-2 text-gray-50">
            As a full stack developer, you possess a wide range of technical skills and expertise across multiple areas of software
            development. I am proficient in both front-end and back-end development, with a deep understanding of web technologies,
            programming languages, and software architecture.
          </p>
          <p className="py-2 text-gray-50">
            On the front-end, I am skilled in HTML, CSS, JavaScript, TailwindCSS, and related frameworks like React, Next. I can design
            and develop responsive and user-friendly web interfaces that provide an optimal user experience. You also have experience
            with UI/UX design, responsive design, and cross-browser compatibility.
          </p>
          <p className="py-2 text-gray-50">
            On the back-end, I have expertise in server-side languages like Node.js, Python, and can work with databases like MySQL,
            MongoDB, or PostgreSQL. I are familiar with API development, authentication and authorization, data modeling, and
            server-side frameworks like Express.
          </p>
          <p className="py-2 text-gray-50">
            Overall, I have a passion for solving complex problems and delivering high-quality software solutions that meet the needs of
            clients and end-users. I am a lifelong learner, keeping up with the latest trends and technologies in the field to
            continually improve your skills and expertise.
          </p>
        </div>
        <div className="flex justify-center items-center">
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
};
