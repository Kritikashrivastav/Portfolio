import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 mt-20 rounded-tl-3xl rounded-tr-3xl bg-zinc-900  md:bg-[#10343a]'>
      <div className='relative w-full overflow-hidden border-t-2 border-b-2 border-zinc-400 pt-4 pb-4'>
        <motion.div
          initial={{ x: "50%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 16, repeat: Infinity }}
          className='whitespace-nowrap'
          style={{ display: 'inline-block' }}
        >
          <h1 className='text-[8vw] leading-none font-syncopate uppercase font-semibold inline-block'>
            Who Needs Experience When You Have Enthusiasm?
          </h1>


        </motion.div>
      </div>
    </div>

  )
}

export default Marquee