// src/components/Education

import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { educations } from "../data";

export default function Education() {
    return (
        <section id="education">
            <div className="container px-5 py-10 mx-auto text-center">
                <AcademicCapIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Education
                </h1>
                <div className="flex flex-wrap m-4">
                    {educations.map((educations) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded flex">

                                <div className="mx-auto">
                                    <img
                                        alt="testimonial"
                                        src={educations.image}
                                    />
                                </div>
                                <div className="mx-auto">

                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font text-3xl text-white">
                                            {educations.school}
                                        </span>
                                        <span className="text-lightBlue text-2x1 uppercase">
                                            {educations.degree}
                                        </span>
                                        <span className="text-lightBlue text-2x1 uppercase">
                                            GPA:
                                            {educations.gpa}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}