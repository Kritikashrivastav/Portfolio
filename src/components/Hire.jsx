import React, { useState, useEffect } from 'react';
import { Terminal, Code, Zap } from 'lucide-react';

function Hire() {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "I'm a Software Developer from the future.";

  useEffect(() => {
    let index = 0;
    let isTyping = true;
    let timer;

    const typeWriter = () => {
      if (isTyping) {
        if (index < fullText.length) {
          setTypewriterText(fullText.slice(0, index + 1));
          index++;
        } else {
          isTyping = false;
          timer = setTimeout(typeWriter, 2000); // Pause for 2 seconds when fully typed
          return;
        }
      } else {
        if (index > 0) {
          setTypewriterText(fullText.slice(0, index - 1));
          index--;
        } else {
          isTyping = true;
        }
      }

      timer = setTimeout(typeWriter, isTyping ? 100 : 50); // Type slower, erase faster
    };

    typeWriter();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900 text-green-400 font-mono">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center animate-pulse">
          Hire Me<span className="text-white">_</span>
        </h1>
        <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-green-400 shadow-lg shadow-green-400/20">
          <p className="text-xl md:text-2xl mb-4 h-20 md:h-10">{typewriterText}<span className="animate-blink">|</span></p>
          <p className="text-sm md:text-base">Ready to debug the matrix and code the impossible.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SkillCard icon={<Terminal className="w-8 h-8" />} title="Code Architect" description="Building digital skyscrapers with clean, efficient code" />
          <SkillCard icon={<Code className="w-8 h-8" />} title="Bug Exterminator" description="Tracking down and eliminating bugs with extreme prejudice" />
          <SkillCard icon={<Zap className="w-8 h-8" />} title="Tech Innovator" description="Pushing boundaries and exploring new frontiers in tech" />
        </div>
        <div className="text-center">
          <a href="#contact" className="bg-green-400 text-black font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-400 flex items-center justify-center transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400">
            Initiate Collaboration Sequence
          </a>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-green-400 hover:shadow-md hover:shadow-green-400/50 transition duration-300">
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="text-lg font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}

export default Hire;