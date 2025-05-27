'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const InfinitySlider = ({ isColor = false }: { isColor: boolean }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "/photo_hero.jpeg",
    "/photo_hero2.jpeg",
    "/photo_hero3.jpeg",
    "/photo_hero4.jpeg",
    "/photo_hero5.jpeg"
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const speed = 0.5;
    const scrollContainers = scrollContainer.querySelectorAll('.scroll-container');

    scrollContainers.forEach((container, index) => {
      const isEven = index % 2 === 0;
      let scrollAmount = isEven ? 0 : container.scrollHeight / 2;
      const maxScroll = container.scrollHeight / 2;

      const scrollLoop = () => {
        scrollAmount += isEven ? speed : -speed;

        if (isEven && scrollAmount >= maxScroll) {
          scrollAmount = 0;
        } else if (!isEven && scrollAmount <= 0) {
          scrollAmount = maxScroll;
        }

        container.scrollTop = scrollAmount;
        requestAnimationFrame(scrollLoop);
      };

      const content = container.innerHTML;
      container.innerHTML += content;

      setTimeout(() => {
        container.scrollTop = isEven ? 0 : container.scrollHeight / 2;
        scrollLoop();
      }, 0);
    });
  }, []);

  return (
    <div
      ref={scrollRef}
      className={`absolute inset-0 z-0 flex items-center justify-center overflow-hidden ${
        isColor ? '' : 'grayscale'
      }`}
    >
      <div className="flex gap-10">
        {Array.from({ length: 5 }).map((_, colIdx) => {
          const isEven = colIdx % 2 === 0;
          const imageSet = isEven ? images : [...images].reverse();
          return (
            <div
              key={colIdx}
              className={`scroll-container flex flex-col gap-6 items-center w-80 h-screen overflow-y-hidden ${
                colIdx % 2 === 0 ? 'mt-12' : '-mt-12'
              }`}
            >
              {[...imageSet, ...imageSet].map((src, imgIdx) => (
                <div key={imgIdx} className="flex flex-col items-center justify-center z-10">
                  <div className="w-80 h-120 bg-white shadow-md rounded-[20px] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white bg-opacity-15 backdrop-blur-md rounded-[20px] z-0" />
                    <Image
                      src={src}
                      alt={`Foto ${imgIdx}`}
                      width={316}
                      height={316}
                      priority
                      className="rounded-[20px] object-cover z-10"
                    />
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function HeroSection() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const fullText = "Mobile Developer";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(fullText.substring(0, textIndex + 1));
        setTextIndex((prev) => prev + 1);
        if (textIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setTypedText(fullText.substring(0, textIndex - 1));
        setTextIndex((prev) => prev - 1);
        if (textIndex - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [textIndex, isDeleting]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center relative bg-gray-200 overflow-hidden"
    >
      <InfinitySlider isColor={false} />

      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          WebkitMaskImage: `radial-gradient(circle 400px at ${cursorPos.x}px ${cursorPos.y}px, black 0%, transparent 80%)`,
          maskImage: `radial-gradient(circle 400px at ${cursorPos.x}px ${cursorPos.y}px, black 0%, transparent 80%)`,
        }}
      >
        <InfinitySlider isColor={true} />
      </div>

      <div className="text-center relative z-20">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-400">
          Hi, I'm a <span className="text-yellow-600">{typedText}|</span>
        </h1>
        <p className="mt-2 text-lg text-white">
        I'm a passionate mobile developer dedicated to building intuitive, <br /> high-performance apps for Android and iOS. With a strong foundation <br />in Flutter and React Native, I turn ideas into impactful digital solutions that users love.
        </p>
      </div>
    </section>
  );
}
