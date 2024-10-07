import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message was sent by - ${formData.email}`);
  };

  return (
    <div id="contact" data-scroll data-scroll-speed=".6" className="rounded-3xl mx-4 sm:mx-10 md:mx-20 lg:mx-40 p-4 md:p-10 lg:p-20 bg-zinc-100 flex items-center justify-center overflow-hidden">
      <div className="container p-6 sm:p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 py-6 rounded-3xl bg-white shadow-lg">

        <div className="flex items-center justify-center">
          <img className="object-contain w-full h-[50vh] md:h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" src="/contact.png" alt="Contact Us" />
        </div>

        <div className="flex flex-col justify-center font-lato">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

            <div>
              <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 sm:p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className=" block text-base sm:text-lg font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full p-2 sm:p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Write your message here..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full borderfont-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg  text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 text-base md:text-lg 
           "
              >
                Connect
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
