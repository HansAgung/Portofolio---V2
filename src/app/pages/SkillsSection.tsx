'use client';
import SkillCard from '../components/SkillCard';
import { useEffect, useRef } from 'react';

const skills = [
  { name: 'Flutter', icon: '/skills/flutter_icon.svg' },
  { name: 'React Native', icon: '/skills/react_icon.png' },
  { name: 'Kotlin', icon: '/skills/kotlin_icon.png' },
  { name: 'Swift', icon: '/skills/swift_icon.png' },
  { name: 'Firebase', icon: '/skills/firebase_icon.png' },
  { name: 'Dart', icon: '/skills/dart_icon.png' },
  { name: 'TypeScript', icon: '/skills/typescript_icon.png' },
];

export default function SkillsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 0.5;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  // Duplikat data untuk infinite effect
  const extendedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6">My Skills</h2>
      <div className="max-w-3xl mx-auto text-center px-4">
        <p className="text-lg text-gray-600 mb-10">
          Throughout my journey as a mobile developer, I've cultivated a well-rounded skill set that balances both technical expertise and interpersonal strengths. Below is a selection of my <span className="font-medium text-gray-800">hard skills</span> that support development execution, along with <span className="font-medium text-gray-800">soft skills</span> that enhance collaboration, leadership, and adaptability in team environments.
        </p>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden whitespace-nowrap relative w-full max-w-5xl mx-auto py-6"
      >
        {extendedSkills.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </div>
    </section>
  );
}
