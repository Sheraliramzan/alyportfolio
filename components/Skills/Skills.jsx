import React from "react";
import Image from "next/image";
import { data } from "./data";

export default function Skills() {
  console.log(data);
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-red-300">Skills</p>
        <h2 className="py-4 text-white uppercase">What I <span className="text-red-500">Do</span></h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => {
            return (
                <div className="p-2 shadow-xl shadow-gray-600 bg-neutral-600
                bg-opacity-50 rounded-xl hover:scale-105 ease-in duration-300 z-99 glow-on-hover" key={item.id}>
                <div className="grid grid-cols-2 gap-4 justify-center items-center mr-5">
                  <div className="m-auto py-2">
                    <Image src={item.image} alt="/" width={75} height={75} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-lg text-white font-mono">{item.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
