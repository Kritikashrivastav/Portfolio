import React from 'react';
import { User, Laptop, Youtube, Coffee } from 'lucide-react';

const AboutItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-2 mb-2">
    <Icon className="text-emerald-600" size={20} />
    <span>{text}</span>
  </div>
);

function About() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-64" src="/me.png" alt="Profile" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide font-lato text-sm text-emerald-900 font-semibold">Software Developer</div>
            <h1 className="mt-2 text-3xl leading-8 font-poppins font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Kritika Shrivastav
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-lato text-gray-500">
              On a quest for knowledge—armed with a laptop, a water addiction, and an ever-growing list of 'how-to' YouTube videos.
            </p>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-poppins font-medium text-gray-900">Quick Facts</h3>
              <div className="mt-2 text-base font-lato text-gray-500">
                <AboutItem icon={User} text="Recent MCA graduate" />
                <AboutItem icon={Laptop} text="BCA background" />
                <AboutItem icon={Youtube} text="Avid learner through online resources" />
                <AboutItem icon={Coffee} text="Fueled by curiosity (and probably coffee)" />
              </div>
            </div>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-lato font-medium rounded-md shadow-sm text-white bg-[#10343a] hover:bg-emerald-900">
                Explore My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;