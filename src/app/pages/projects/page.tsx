'use client';

import { motion } from 'framer-motion';
import ProjectCard from './projectCard';
import { projects } from '@/lib/data/project';

export default function ProjectsPage() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-yellow-600 mb-6"
      >
        My Projects
      </motion.h2>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Beberapa karya saya yang mencerminkan keahlian dalam membangun aplikasi digital dengan fitur-fitur inovatif dan desain modern.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}
