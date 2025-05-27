'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Komponen skill bar minimalis
function SkillBar({ label, percentage }: { label: string; percentage: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-yellow-500 rounded-full"
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center relative">
        {/* Image Section (1/3) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/3 flex items-center justify-center"
        >
          <div className="w-80 h-[30rem] bg-white shadow-md rounded-[20px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white bg-opacity-15 backdrop-blur-md rounded-[20px] z-0" />
            <Image
              src="/profile/photo_hero4.jpeg"
              alt="About Me Image"
              width={316}
              height={316}
              priority
              className="rounded-[20px] object-cover z-10"
            />
          </div>
        </motion.div>

        {/* Text Section (2/3) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-2/3 relative"
        >
          {/* Garis di samping kanan teks */}
          <div className="flex items-center mb-4">
            <h2 className="text-3xl font-bold text-gray-900 bg-white pr-4 relative z-10">Why Me??</h2>
            <div className="flex-grow h-1 bg-yellow-500 rounded-full ml-2"></div>
          </div>

          <p className="text-lg text-gray-600">
            I’m a passionate and dedicated mobile developer with extensive experience in building high-quality applications for both Android and iOS platforms. My expertise includes proficiency in Flutter, React Native, and native development using Java and Swift. I have a strong background in developing intuitive and user-friendly mobile solutions, with a focus on performance, scalability, and code maintainability. Continuously learning new technologies and keeping up with industry trends allows me to deliver innovative solutions that meet and exceed user expectations.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            In my career, I have collaborated with cross-functional teams to deliver impactful mobile applications for a diverse range of clients. I thrive in dynamic environments and possess excellent problem-solving skills, enabling me to tackle complex technical challenges. My goal is to create seamless, engaging experiences that resonate with users while optimizing the functionality of the app. With a strong sense of ownership, I am always committed to delivering results that align with business goals and enhance user satisfaction.
          </p>

          {/* Skill Indicators */}
          <div className="mt-10 space-y-6">
            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Soft Skills</h3>
              <SkillBar label="Communication" percentage={90} />
              <SkillBar label="Teamwork" percentage={85} />
              <SkillBar label="Adaptability" percentage={80} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
