import React from 'react'
import Carousel from './Carousel'


const slides = [
  "/isro.png",
  "/Py.png",
  "/nptel.png"
]


function ImgSlider() {
  return (
    <div className='border-t-2 flex justify-center items-center border-zinc-800'>
      <div className='w-full sm:h-full py-20 px-4 sm:px-8 lg:px-20'>
        <Carousel autoSlide={true} autoInterval={3000}>
          {slides.map((s, index) => (
            <img
              className='w-full h-auto md:h-[78vh] object-cover md:object-contain mx-auto'
              key={index}
              src={s}
              alt={`Slide ${index}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )

}

export default ImgSlider