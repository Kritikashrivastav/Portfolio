import React, { useEffect, useState } from 'react'

function Eyes() {

  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    })
  })

  return (
    <div className='hidden md:block eyes w-full h-screen mb-20 overflow-hidden'>
      <div data-scroll data-scroll-speed="-.6" className=' relative w-full bg-contain h-full md:h-[44vw] mt-20 bg-no-repeat bg-center bg-[url("/bgeye.jpg")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-none bg-teal-800'>
            <div className='relative w-2/3 h-2/3 bg-zinc-100 rounded-full'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-5 md:w-10 h-5 md:h-10 bg-zinc-900 rounded-full'></div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-none bg-teal-800'>
            <div className='relative w-2/3 h-2/3 bg-zinc-100 rounded-full '>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-5 md:w-10 h-5 md:h-10 bg-zinc-900 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes