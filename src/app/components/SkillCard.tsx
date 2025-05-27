'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: string;
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: [0, 2, -2, 2, 0],
        transition: { duration: 0.4 },
      }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl flex flex-col items-center justify-center px-4 py-6 mx-2"
    >
      <div className="mb-2" style={{ width: 64, height: 64, position: 'relative' }}>
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>
      <p className="text-sm font-semibold text-gray-700 text-center">{name}</p>
    </motion.div>
  );
}
