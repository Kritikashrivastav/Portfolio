import React from 'react'

function Hire() {
  return (
    <div className='flex justify-center'>
      <div className='card w-[90vw] sm:w-[70vw] min-h-[50vh] max-h-[80vh] lg:max-h-none  rounded-3xl bg-white shadow-lg text-[#16423C] py-5 md:py-8 px-5 md:px-20 mt-20 -mb-10  overflow-auto'>
        <h1 className='text-2xl font-semibold md:font-light text-center md:text-7xl leading-none tracking-tight font-syncopate pb-5 md:pb-10 pt-5'>Hire me!</h1>

        <p className='font-mono sm:text-wrap sm:tracking-tighter text-base md:text-2xl  leading-relaxed pb-3'>
          Hello there! a fresh-faced Software Developer🚀
          <br />
          I may be new to the industry, but don't let my lack of experience fool you.<br /> I come equipped with a laptop, and a collection of "how-to" YouTube videos that could rival any university library.
          <br />
          If you're looking for someone who can:
          <ul className="list-disc list-inside">
            <li>Code like nobody's watching (because I’m still learning the best practices),</li>
            <li>Debug with the determination of a cat chasing a laser pointer,</li>
            <li>And bring a sprinkle of enthusiasm and creativity to your team,</li>
          </ul>
          <br />


        </p>
      </div>
    </div>

  )
}

export default Hire