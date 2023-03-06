import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>My Portfolio | Hero Page</title>
      </Head>
      <div className="max-w-screen-lg w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between py-8 md:py-12 rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-2">
              My name is Aly Ramzan
            </h1>
            <p className="text-white text-xl md:text-sm my-4">
              I am a frontend developer with experience in React, Next.js, and
              Tailwind. Check out my projects and skills below!
            </p>
            <div className="mt-4">
              <Link href="/projects">
                <button className="text-white hover:bg font-medium py-2 px-4 rounded">
                  View my projects
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <motion.div
                className="h-full w-full bg-gray-300 rounded-full shadow-lg overflow-hidden"
                whileHover={{ scale: 0.9}}
                whileTap={{ scale: 0.5 }}
              >
                <Image
                  className="rounded-full"
                  src="/../public/assets/Aly.png"
                  alt="Hero Image"
                  width={300}
                  height={300}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
