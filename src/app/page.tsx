'use client';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';

import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import ProjectsSection from './pages/ProjectsSection';
import SkillsSection from './pages/SkillsSection';
import ContactSection from './pages/ContactSection';
import JourneySection from './pages/JourneySection';
import SocialMediaSection from './pages/SocialMediaSection';

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <HeroSection />
      <SocialMediaSection />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
    </main>
    </>
  );
}
