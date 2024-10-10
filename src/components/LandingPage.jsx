import React from 'react';

const LandingPage = () => {
  const headerItems = ["KRITIKA", "SHRIVASTAV", "SOFTWARE DEVELOPER"];
  const footerItems = [
    "Crafting Innovative Solutions Through Code",
    "Expertise in Modern Technologies and Frameworks",
    "Bridging Design and Functionality with Technical Skills"
  ];

  return (
    <div className="bg-zinc-900 w-full min-h-screen flex flex-col justify-between  items-center md:items-start">
      {/* Header */}
      <header className="pt-20 mt-24 md:pt-32 px-6 md:px-20 w-full text-center md:text-left">
        {headerItems.map((item, index) => (
          <h1
            key={index}
            className={`font-light md:font-bold font-monoton md:font-audiowide tracking-wider ${index === 2
                ? "text-sm md:text-2xl lg:text-4xl mt-2 md:ml-48 text-teal-700"
                : "text-4xl md:text-5xl lg:text-7xl  text-zinc-200"
              }`}
          >
            {item}
          </h1>
        ))}
      </header>

      {/* Image for small screens */}
      <div className="md:hidden mt-10 mx-auto w-4/5 max-w-sm">
        <img
          src="/s.jpg"
          alt="Hello World Image"
          className="w-full h-[400px] rounded-lg object-cover opacity-50"
          loading="lazy"
        />
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-teal-900 to-transparent opacity-30" />

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-800 py-8 px-6 md:px-20 w-full text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm md:text-base">
          {footerItems.map((item, index) => (
            <p key={index} className="text-zinc-300 hover:text-teal-400 transition-colors">
              {item}
            </p>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;