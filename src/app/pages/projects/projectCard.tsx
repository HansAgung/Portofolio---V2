'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Project = {
  slug: string;
  title: string;
  image: string;
  description: string;
  subtitle: string;
};

export default function ProjectCard({ slug, title, subtitle, image, description }: Project) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="relative w-full h-72 perspective"
    >
      <motion.div
        animate={{ rotateX: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full preserve-3d relative"
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-orange-400 rounded-xl shadow-md overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={500}
            height={400}
            className="w-full h-58 object-cover"
          />
          <div className="p-4 flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden transform rotate-x-180 bg-orange-300 text-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-center">{subtitle}</p>
          <br />
          <Link
            href={`projects/${slug}`}
            className="px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition duration-300"
          >
            Lihat Detail
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
