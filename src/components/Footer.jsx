import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-[#10343a] py-10'>
      <div className='container flex items-center justify-center gap-6 mx-auto px-5'>
        <div className='linkedin p-5'>
          <a href="https://www.linkedin.com/in/kritika-shrivastav-9891aa2a4/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
        </div>
        <div>
          <a href="https://github.com/Kritikashrivastav" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
        </div>



      </div>
      <div className='mail text-zinc-200 flex items-center justify-center font-poppins text-base'>Kritikashrivastav99@gmail.com</div>
    </footer>
  )
}

export default Footer