import React from 'react'

function About() {
  return (
    <div className='flex justify-center'>
      <div className='w-full  min-h-[50vh] max-h-[80vh] lg:max-h-none   overflow-auto py-20 bg-zinc-200 rounded-b-3xl md:rounded-b-none rounded-tl-3xl rounded-tr-3xl text-[#16423C]'>
        <h1 className='font-syncopate text-3xl sm:tracking-tighter md:text-7xl text-center pb-4'>A Lil About Me</h1>
        <p
          className='font-mono sm:tracking-tighter text-lg md:text-[2vw] md:leading-[3vw] px-7 md:px-20 py-2'>Helloo! I'm Kritika Shrivastav a Software Developer who is currently on a quest for knowledge—armed with a laptop, a water addiction, and an ever-growing list of 'how-to' YouTube videos.
          <br />
          A recent MCA graduate and Before diving into the depths of my master's, I completed my BCA

          <br />
          Feel free to explore my portfolio and don’t hesitate to reach out if you’d like to collaborate—or if you just want to share your favorite programming memes!</p>
      </div>
    </div>
  )
}

export default About