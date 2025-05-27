'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { achievements } from '@/lib/data/achivement'; 

export default function AchievementsPage() {
  return (
    <section id="achievements" className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-yellow-600 mb-6"
      >
        My Achievements
      </motion.h2>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Here are some of the key milestones and certifications I've achieved throughout my career.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={ach.image}
              alt={ach.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-yellow-600 mb-2">{ach.title}</h3>
              <p className="text-sm text-gray-600">{ach.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
