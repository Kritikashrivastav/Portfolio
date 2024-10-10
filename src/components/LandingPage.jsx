import React from 'react';

const LandingPage = () => {
  const headerItems = ["Kritika", "Shrivastav", "Software Developer"];
  const footerItems = [
    "Crafting Innovative Solutions Through Code",
    "Expertise in Modern Technologies and Frameworks",
    "Bridging Design and Functionality with Technical Skills"
  ];

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="bg-zinc-900 w-full h-screen pt-1 relative overflow-hidden"
    >

      <div
        className="md:hidden absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-800 to-teal-950 z-[-1] "

        aria-label="Decorative gradient background for small screens"
      ></div>

      <div className="textstructure mt-40 md:mt-64 flex items-center md:items-start flex-col md:flex-col gap-2 md:gap-0 md:px-20 pb-5 sm:mb-10 md:mb-32">
        {headerItems.map((item, index) => (
          <div key={index} className="masker">
            <h1
              className={`uppercase tracking-tighter font-monoton md:font-audiowide ${index === 2
                ? " leading-[7vw] md:leading-none font-bold tracking-wide text-[4vw] md:text-[2vw] md:ml-[25vw]"
                : "text-[7vw] md:text-[6vw] leading-[7vw]"
                }`}
            >
              {item}
            </h1>
          </div>
        ))}
      </div>
      <div
        className="md:hidden mx-10  bg-no-repeat aspect-[20/30] rounded-2xl bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/s.jpg')", opacity: 0.5 }}
        aria-label="Decorative background image for small screens"
      ></div>

      {/* Footer items for medium screens and above */}
      <div className="hidden md:flex border-t-[1px] font-poppins border-zinc-800 flex-row justify-between gap-4 items-center pt-7  md:pb-10 px-10 md:px-20">
        {footerItems.map((item, index) => (
          <p key={index} className="text-base pb-10 mb-10 font-light sm:mx-2 ">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
