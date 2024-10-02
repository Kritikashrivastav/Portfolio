import React, { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

function Carousel({ children: slides, autoSlide = false, autoInterval = 3000 }) {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const slideRef = useRef(null)

  const totalSlides = slides.length

  const goToSlide = (index) => {
    setCurrent(index)
    setIsTransitioning(true)
  }

  const prev = () => {
    goToSlide(current === 0 ? totalSlides : current - 1)
  }

  const next = () => {
    goToSlide(current === totalSlides ? 0 : current + 1)
  }

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoInterval)
    return () => clearInterval(slideInterval)
  }, [current, autoSlide, autoInterval])

  const handleTransitionEnd = () => {

    if (current === totalSlides) {
      setIsTransitioning(false)
      setCurrent(0)
    } else if (current === -1) {
      setIsTransitioning(false)
      setCurrent(totalSlides - 1)
    }
  }

  return (
    <div className='overflow-hidden relative'>
      <div
        ref={slideRef}
        className={`flex ${isTransitioning ? 'transition-transform duration-500' : ''}`}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateX(-${(current + 1) * 100}%)` }}
      >

        <div className='flex-shrink-0 w-full'>{slides[totalSlides - 1]}</div>

        {slides.map((slide, index) => (
          <div key={index} className='flex-shrink-0 w-full'>
            {slide}
          </div>
        ))}

        <div className='flex-shrink-0 w-full'>{slides[0]}</div>
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-2'>
        <button onClick={prev} className='p-1 rounded-full shadow text-gray-800 bg-white/80 hover:bg-white'>
          <ChevronLeft size={30} />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow text-gray-800 bg-white/80 hover:bg-white'>
          <ChevronRight size={30} />
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center sm:py-2 gap-2'>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`transition-all w-3 h-3 bg-zinc-800 rounded-full ${current === index ? 'p-2' : 'bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel

// ImgSlider.js remains the same
