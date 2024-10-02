import React from 'react'

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className='bg-zinc-900 w-full h-screen pt-1'>
      <div className='textstructure mt-40 md:mt-64 flex items-center md:items-start flex-col md:flex-col gap-2 md:gap-0 md:px-20 pb-5 sm:mb-10 md:mb-32'>
        {["Kritika", "Shrivastav", "Software Developer"].map((item, index) => {
          return <div className='masker' key={index}>
            <h1 className={`uppercase tracking-tighter font-poppins  ${index === 2
              ? "font-mono leading-[7vw] md:leading-none font-bold text-[1.9vw] md:text-[2vw] md:ml-[25vw]"
              : "text-[6vw] leading-[7vw]"
              }`}>
              {item}
            </h1>
          </div>

        })}
      </div>
      <div className='border-t-[1px] font-lato border-zinc-800 flex flex-col md:flex-row justify-between items-center  pt-7 pb:5 md:pb-10 px-10 md:px-20 '>
        {["Crafting Innovative Solutions Through Code", "Expertise in Modern Technologies and Frameworks", "Bridging Design and Functionality with Technical Skills"].map((item, index) => <p className='text-[1.5vw] md:text-[1.1vw] font-light sm:mx-2 leading-none mb-4 md:mb-0'>{item}

        </p>)}
      </div>
    </div>
  )
}

export default LandingPage