'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiArrowRight } from 'react-icons/fi';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/pages/projects' },
  { label: 'Achievements', path: '/pages/achievements' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-shadow ${
          scrolled ? 'bg-white shadow-md' : 'bg-gray-800 text-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-yellow-600">MyPortfolio</h1>

          <ul className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.path}>
                  <span
                    className={`cursor-pointer font-medium transition-colors duration-300 ${
                      scrolled
                        ? 'text-gray-800 hover:text-yellow-600'
                        : 'text-white hover:text-yellow-400'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/CV-HansAgungSitinjak.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition duration-300"
              >
                Download CV
              </a>
            </li>
          </ul>

          <button
            className="md:hidden text-2xl text-yellow-600"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>
      </motion.nav>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[999] p-6 flex flex-col gap-6 md:hidden"
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="self-end text-yellow-600 text-2xl"
          aria-label="Close Sidebar"
        >
          <FiArrowRight />
        </button>

        <ul className="flex flex-col gap-4 mt-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.path}>
                <span
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-800 font-medium hover:text-yellow-600 transition-colors duration-300"
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <a
          download="CV-HansAgungSitinjak.pdf"
          className="mt-auto px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition duration-300 text-center"
        >
          Download CV
        </a>
      </motion.div>
    </>
  );
}
