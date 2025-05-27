'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa';

const journeySteps = [
  {
    icon: <FaGraduationCap className="text-yellow-600 text-2xl" />,
    title: 'SMA Santa Theresia - Air Molek',
    description: 'graduated as a student majoring in Mathematics and Natural Sciences (MIPA)',
    year: '2019 - 2021',
    image: '/achivement/sma-logo.webp',
  },
  {
    icon: <FaGraduationCap className="text-yellow-600 text-2xl" />,
    title: 'Institut Teknologi DEL',
    description: 'Majoring in Software Engineering Technology.',
    year: '2021 - Present',
    image: '/achivement/institut-logo.png',
  },
  {
    icon: <FaLaptopCode className="text-yellow-600 text-2xl" />,
    title: 'Rakamin Academy - Fullstack Developer',
    description: 'Shifted to Flutter & React Native, building cross-platform apps.',
    year: '2023',
    image: '/achivement/Rakamin-logo.png',
  },
  {
    icon: <FaLaptopCode className="text-yellow-600 text-2xl" />,
    title: 'Rakamin Academy - DataAnalyst Developer',
    description: 'Shifted to Flutter & React Native, building cross-platform apps.',
    year: '2023',
    image: '/achivement/Rakamin-logo.png',
  },
  {
    icon: <FaLaptopCode className="text-yellow-600 text-2xl" />,
    title: 'Sanbercode Bootcamp - Flutter Developer',
    description: 'Shifted to Flutter & React Native, building cross-platform apps.',
    year: '2023',
    image: '/achivement/sanbercode-logo.png',
  },
  {
    icon: <FaLaptopCode className="text-yellow-600 text-2xl" />,
    title: 'Digistar Bootcamp - React Native Developer',
    description: 'Shifted to Flutter & React Native, building cross-platform apps.',
    year: '2023',
    image: '/achivement/digistar-logo.jpeg',
  },
  {
    icon: <FaLaptopCode className="text-yellow-600 text-2xl" />,
    title: 'Sanbercode Bootcamp - React Native Developer',
    description: 'Shifted to Flutter & React Native, building cross-platform apps.',
    year: '2023',
    image: '/achivement/sanbercode-logo.png',
  },
  {
    icon: <FaRocket className="text-yellow-600 text-2xl" />,
    title: 'Aleph Labs Indonesia - IOS Developer Intern',
    description: 'Started building products under ToluTech Studio.',
    year: '2024',
    image: '/achivement/aleph-logo.png',
  },
  {
    icon: <FaLaptopCode className="text-yellow-600 text-2xl" />,
    title: 'Udemy Bootcamp - React Native Developer',
    description: 'Shifted to Flutter & React Native, building cross-platform apps.',
    year: '2025',
    image: '/achivement/udemy-logo.png',
  },
  {
    icon: <FaLaptopCode className="text-yellow-600 text-2xl" />,
    title: 'Udemy Bootcamp - React Native Developer',
    description: 'Shifted to Flutter & React Native, building cross-platform apps.',
    year: '2025',
    image: '/achivement/udemy-logo.png',
  },
];

// Aturan posisi kustom berdasarkan index
const getIsLeft = (index: number) => {
  if (index <= 1) return index % 2 === 0; // kiri-kanan
  if (index >= 2 && index <= 3) return true; // kanan-kanan
  if (index >= 4 && index <= 6) return false; // kiri-kiri-kiri
  if (index >= 8 && index <= 9) return false; // kanan-kanan
  return true; // index 9 → kiri
};

export default function JourneySection() {
  return (
    <section id="journey" className="bg-yellow-50 py-20 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-5">Milestones</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
        Every journey begins with a single step. This section outlines the key moments that shaped my career in technology — from my academic foundation to my professional growth, and finally to building my own path through freelancing and entrepreneurship. These milestones reflect my passion, persistence, and continuous learning in the world of software development.
      </p>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full z-0 rounded-full" />

        <div className="space-y-16 relative z-10">
          {journeySteps.map((step, index) => {
            const isLeft = getIsLeft(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex justify-between items-center w-full flex-col md:flex-row ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="bg-white border-l-4 border-yellow-400 text-gray-800 px-2 py-1 rounded-xl shadow-lg w-full md:w-[45%] flex gap-3 items-center">
                  {step.image && (
                    <Image
                      src={step.image}
                      alt="Step image"
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-3 mb-1 font-semibold text-yellow-700">
                      {step.icon}
                      <span>{step.title}</span>
                    </div>
                    <span className="text-sm font-medium text-yellow-500">{step.year}</span>
                    <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Icon Center */}
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 text-white rounded-full z-10 border-4 border-white shadow-lg animate-pulse my-6 md:my-0">
                  {step.icon}
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
