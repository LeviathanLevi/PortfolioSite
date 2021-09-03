// src/components/Contact.js

import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Portland+Oregon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <div
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me 
          </h2>

          <div className="relative mb-4">
            <label className="leading-7 text-lg text-gray-400">
              Email: levileuthold@gmail.com
            </label>
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-lg text-gray-400">
              Phone: (541) 816-8776
            </label>
          </div>
          <div className="relative mb-4">
            <a href="https://www.linkedin.com/in/levi-leuthold-757b1018b/" className="underline leading-7 text-lg text-blue-400">
              LinkedIn
            </a>
          </div>
          <div className="relative mb-4">
            <a href="https://github.com/LeviathanLevi" className="underline leading-7 text-lg text-blue-400">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}