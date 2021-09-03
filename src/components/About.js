// src/components/About.js

import React from "react";

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Levi.
              <br className="hidden lg:inline-block" />I'm a Software Engineer
            </h1>
            <p className="mb-8 leading-relaxed">
            I'm 22 years old, and I was born in southern Oregon. Growing up I always has a passion for technology, whether it was computer hardware, 3D animation, virtual reality, robotics, game development, or programming. I knew that I wanted to work with computers, so in highschool when I went to community college for a dual enrollment program, I started studying software engineering. I later transfered to Oregon Tech where I graduated with my bachelor’s in software engineering technology. Currently, I'm finishing up my 2nd internship to conclude the MECOP program.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="Picture of me"
              src="./pictureOfMe.png"
            />
          </div>
        </div>
      </section>
    );
  }