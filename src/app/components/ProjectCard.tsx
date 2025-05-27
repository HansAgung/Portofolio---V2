'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
}

export default function ProjectCard({ title, image, description }: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      whileHover={{ rotate: [0, 1.5, -1.5, 1.5, 0], transition: { duration: 0.4 } }}
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer w-72 h-96 perspective"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-yellow-300 rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
            {title}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg p-4 transform rotate-y-180 backface-hidden flex items-center justify-center text-center">
          <p className="text-gray-800">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
