import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import {
  SiFlask, SiBootstrap, SiTailwindcss, SiAdobephotoshop,
  SiSqlite
} from 'react-icons/si';

function Skills() {
  return (
    <div>
      <h1 className='text-5xl text-center md:text-7xl leading-none tracking-tight font-mono py-10 text-zinc-200'>Skills</h1>
      <div className=' border-t-2 border-zinc-800'>

        <div className=" mx-10 md:mx-0 pt-5 md:pt-10 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-3 gap-7 md:gap-10 ">
          <div className="flex flex-col items-center">
            <FaReact size={50} className="md:size-[90px] lg:size-[90px]" color="#61DBFB" />
            <span className="text-base md:text-xl text-zinc-200">React</span>
          </div>

          <div className="flex flex-col items-center">
            <FaPython size={50} className="md:size-[90px] lg:size-[90px]" color="#3776AB" />
            <span className="text-base md:text-xl text-zinc-200">Python</span>
          </div>

          <div className="flex flex-col items-center">
            <FaJsSquare size={50} className="md:size-[90px] lg:size-[90px]" color="#F7DF1E" />
            <span className="text-base md:text-xl text-zinc-200">JavaScript</span>
          </div>

          <div className="flex flex-col items-center">
            <SiFlask size={50} className="md:size-[90px] lg:size-[90px]" color="#B23A32" />
            <span className="text-base md:text-xl text-zinc-200">Flask</span>
          </div>

          <div className="flex flex-col items-center">
            <FaHtml5 size={50} className="md:size-[90px] lg:size-[90px]" color="#E34C26" />
            <span className=" text-base md:text-xl text-zinc-200">HTML5</span>
          </div>

          <div className="flex flex-col items-center">
            <FaCss3Alt size={50} className="md:size-[90px] lg:size-[90px]" color="#1572B6" />
            <span className="text-base md:text-xl text-zinc-200">CSS3</span>
          </div>

          <div className="flex flex-col items-center">
            <SiBootstrap size={50} className="md:size-[90px] lg:size-[90px]" color="#563D7C" />
            <span className="text-base md:text-xl text-zinc-200">Bootstrap</span>
          </div>

          <div className="flex flex-col  items-center">
            <SiTailwindcss size={50} className="md:size-[90px] lg:size-[90px]" color="#38B2AC" />
            <span className="text-base md:text-xl text-zinc-200">Tailwind CSS</span>
          </div>

          <div className="flex flex-col items-center">
            <SiSqlite size={50} className="md:size-[90px] lg:size-[90px]" color="#003B57" />
            <span className="text-base md:text-xl text-zinc-200">SQLite3</span>
          </div>

          <div className="flex flex-col items-center">
            <SiAdobephotoshop size={50} className="md:size-[90px] lg:size-[90px]" color="#31A8FF" />
            <span className="text-base md:text-xl text-zinc-200">Adobe Photoshop</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;



