// Projects.js
import React from 'react';
import Cards from './Cards'; // Import the Card component

const projectData = [
  {
    image: '/project portfolio.png',
    description: 'I’ve created my portfolio using React and Tailwind CSS, highlighting my skills and projects. Explore to see my work, learn about my coding journey, and get a feel for my design aesthetics. Your feedback would be greatly appreciated!',
    altText: 'Portfolio Project'
  },
  {
    image: '/poject blog.png',
    description: 'I’ve developed a blog website using Bootstrap, Python, and Flask, featuring full CRUD operations. This project allows users to create, read, update, and delete posts seamlessly.',
    altText: 'Blog Project'
  },
  {
    image: '/project moviezilla.png',
    description: "I’ve built a static movie website using React, designed to display movie posters fetched from an API. While it’s currently a frontend-only project, it showcases my ability to integrate APIs and create an engaging user interface. Explore to see the movie posters and get a glimpse of my design skills!",
    altText: 'Moviezilla Project'
  },
  {
    image: '/project tomodachi.png',
    description: "I’ve developed a friend book application where you can view a layout, add friends, and see detailed descriptions for each friend. Users can also edit friend information for a more personalized experience. While this project focuses on layout and basic functionality, it showcases my skills in UI design and user interaction.",
    altText: 'FriendsBook Project'
  }
];

function Projects() {
  return (
    <div className='w-full py-20 bg-zinc-900 text-zinc-900'>
      <div className='text-center md:w-full px-20 border-zinc-800 border-b-[1px] pb-6'>
        <h1 className='text-zinc-200 text-5xl md:text-7xl leading-none tracking-tight font-mono pb-6'>My Works</h1>
      </div>
      <div className=" px-6 md:px-20 mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectData.map((project, index) => (
          <Cards
            key={index}
            image={project.image}
            description={project.description}
            altText={project.altText}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
