import React from 'react';

const Cards = ({ title, image, description, altText }) => {
  return (
    <div className="bg-[#16423C] cards w-full h-full rounded-xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl flex flex-col">

      <div>
        <h2 className='flex justify-center items-center font-merriweather bg-white py-3'>{title}</h2>
      </div>

      <div className="rounded-t-xl aspect-w-16 aspect-h-9 flex items-center justify-center">
        <img
          className="object-cover w-full h-full rounded-t-xl"
          src={image}
          alt={altText}
        />
      </div>


      <div className="flex-grow p-4 sm:p-6 md:p-8 bg-zinc-100 rounded-b-xl">
        <p className="font-merriweather text-base sm:text-lg md:text-base tracking-wide leading-relaxed text-zinc-900">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
