"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function SocialMediaSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSpin = () => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const totalSteps = 50;
    let step = 0;
    const scrollHeight = scrollEl.scrollHeight;
    const singleStep = 30; // jumlah pixel per langkah

    const interval = setInterval(() => {
      scrollEl.scrollTop += singleStep; // geser ke bawah

      step++;
      if (step >= totalSteps) {
        clearInterval(interval);

        // Loop balik ke atas (buat efek circular)
        setTimeout(() => {
          scrollEl.scrollTop = 0;
        }, 500);
      }
    }, 30);
  };

  return (
    <section style={sectionStyle}>
      {/* Left: Intro */}
      <div style={leftStyle}>
        <h2 style={headingStyle}>My Social Media</h2>
        <p style={paragraphStyle}>
          Here are the platforms where you can reach out to me. Whether it’s for a project, a
          conversation, or collaboration—don’t hesitate to connect!
        </p>
        <p style={paragraphStyle}>
        Find our way to connect with each other
        </p>

        <button onClick={handleSpin} style={buttonStyle}>
          Tekan Saya
        </button>
      </div>

      {/* Right: Scrollable Cards */}
      <div style={rightStyle}>
        <div style={arrowWrapper}><FaArrowUp /></div>
        <div ref={scrollRef} style={scrollContainer}>
          <div style={container}>
            {socialMedia.map(({ icon, bgHue, bgHue2, label, href }, i) => (
              <Card
                key={label}
                i={i}
                icon={icon}
                hueA={bgHue}
                hueB={bgHue2}
                label={label}
                href={href}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
              />
            ))}
          </div>
        </div>
        <div style={arrowWrapper}><FaArrowDown /></div>
      </div>
    </section>
  );
}

interface CardProps {
  icon: string;
  hueA: number;
  hueB: number;
  label: string;
  href: string;
  i: number;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ icon, hueA, hueB, label, href, i }, ref) => {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
      <motion.div
        ref={ref}
        className={`card-container-${i}`}
        style={cardContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
      >
        <div style={{ ...splash, background }} />
        <motion.div style={card} variants={cardVariants} className="card">
        <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src={icon} alt={label} style={{ ...iconStyle, transition: "transform 0.3s ease" }} />
        </a>
        <div style={{ textAlign: "center", marginTop: 12 }}>
            <p style={{ fontSize: "1rem", fontWeight: "500", marginBottom: 6 }}>{label}</p>
            <p style={{ fontSize: "0.8rem", color: "#555" }}>
            {label.includes("@") ? "Email saya" :
            label.includes("wa.me") ? "Hubungi saya di WhatsApp" :
            label.includes("instagram") ? "Lihat galeri dan aktivitas saya" :
            label.includes("linkedin") ? "Jaringan profesional saya" :
            "Akun saya"}
            </p>
        </div>
        </motion.div>
        </motion.div>
    );
  }
);
Card.displayName = "Card";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const sectionStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100vh",
  boxSizing: "border-box",
};

const leftStyle: React.CSSProperties = {
  flex: "1",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#FDEF94",
};

const headingStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.6,
  marginBottom: 20,
};

const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
    background: "linear-gradient(to right, #f97316, #ef4444)", // Gradien dari oranye ke merah
    fontWeight: "600", // Font Bold
    transition: "opacity 0.3s ease, transform 0.3s ease", // Transisi untuk efek hover
  };

const rightStyle: React.CSSProperties = {
  flex: "2",
  backgroundColor: "#fef3c7",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 0",
  position: "relative",
};

const scrollContainer: React.CSSProperties = {
  overflowY: "scroll",
  scrollbarWidth: "none" as any,
  msOverflowStyle: "none" as any,
  height: "100%",
  width: "100%",
};

const container: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: 600,
  width: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "60px",
  padding: "20px 0",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  scrollSnapAlign: "center",
  width: "100%",
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  width: 250,
  height: 350,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#fff",
  padding: 20,
  textAlign: "center",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

const iconStyle: React.CSSProperties = {
  width: 80,
  height: 80,
  objectFit: "contain",
  marginBottom: 20,
};

const linkStyle: React.CSSProperties = {
  display: "inline-block",
};

const labelStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: "bold",
};

const arrowWrapper: React.CSSProperties = {
  fontSize: "1.5rem",
  color: "#888",
  margin: "10px 0",
};

const socialMedia = [
  {
    icon: "/mediasocial/email-logo.jpg",
    bgHue: 0,
    bgHue2: 20,
    label: "hansagung.sitinjak@gmail.com",
    href: "mailto:hansagung.sitinjak@gmail.com",
  },
  {
    icon: "/mediasocial/wa-logo.jpeg",
    bgHue: 130,
    bgHue2: 160,
    label: "+62 895 3369 59819",
    href: "https://wa.me/62895336959819",
  },
  {
    icon: "/mediasocial/instagram-logo.png",
    bgHue: 300,
    bgHue2: 330,
    label: "hans_agung23",
    href: "https://instagram.com/hans_agung23",
  },
  {
    icon: "/mediasocial/linkedin-logo.png",
    bgHue: 210,
    bgHue2: 240,
    label: "Hans Sitinjak",
    href: "https://www.linkedin.com/in/hans-agung-b81566279/ ",
  },
  {
    icon: "/mediasocial/github-logo.png",
    bgHue: 260,
    bgHue2: 290,
    label: "HansAgung",
    href: "https://github.com/HansAgung",
  },
];
