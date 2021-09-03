// src/components/Experience

import React from "react";
import { OfficeBuildingIcon, UserIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto text-center">
        <UserIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {experiences.map((experiences) => (
            <div className="p-4 md:w-1/2 w-full">

                
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <OfficeBuildingIcon className="block w-8 text-gray-500 mb-4" />

              <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={experiences.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-xl text-white">
                      {experiences.companyName}
                    </span>
                    <span className="text-white text-md uppercase">
                      Software Engineer Intern
                    </span>
                    <span className="text-lightBlue text-sm uppercase">
                      {experiences.date}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed mb-6">{experiences.quote}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}