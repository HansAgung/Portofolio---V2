'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsSection() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000); // Reset after animation
  };

  const projects = [
    {
      title: 'My Awesome App',
      image: '/project1.jpg',
      description: 'A mobile app built using Flutter with modern UI and authentication.',
    },
    {
      title: 'Task Tracker',
      image: '/project2.jpg',
      description: 'A productivity app to track tasks, built with React Native and Firebase.',
    },
    {
      title: 'EduKids',
      image: '/project3.jpg',
      description: 'An educational app for kids with gamified learning modules.',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-yellow-50">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-10">My Projects</h2>
      <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Over the years, I've had the opportunity to work on a wide variety of mobile applications, each with its own unique challenges and solutions. Below are some of the projects I’ve built, showcasing my expertise in creating intuitive, user-friendly apps with cutting-edge technology. I’m always excited to take on new challenges and push the boundaries of mobile development.
      </p>
      
      {/* Button with motion applied to parent div */}
      <div className="text-center mt-8">
        <motion.div
          onClick={handleClick}
          whileHover={{
            x: [0, 5, -5, 5, 0],
            rotate: [0, 1.5, -1.5, 1.5, 0],
            transition: { duration: 0.4, repeat: 1 },
          }}
          whileTap={{
            scale: 0.9,
            rotate: [0, 10, -10, 10, 0],
            transition: { duration: 0.2 },
          }}
          className="inline-block cursor-pointer"
        >
          <a
            href="#all-projects"
            className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-orange-400 to-red-500 shadow-xl inline-block"
          >
            See All Projects
          </a>
        </motion.div>
      </div>

      <br />

      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}
