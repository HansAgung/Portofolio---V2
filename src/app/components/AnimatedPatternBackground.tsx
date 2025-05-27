'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Memperbaiki tipe, menjadikan borderRadius opsional
type PatternItem = {
  shape: string;
  backgroundColor: string;
  width: string;
  height: string;
  borderRadius?: string;  // Menjadikan borderRadius opsional
  borderTop?: string;
  borderLeft?: string;
  borderBottom?: string;
};

export default function ElegantAnimatedPatternBackground() {
  const [order, setOrder] = useState<PatternItem[]>(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 3000); // Durasi lebih lama untuk transisi yang lebih lembut
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul style={container}>
      {order.map((shape, index) => (
        <motion.li
          key={`${shape.backgroundColor}-${index}`}
          layout
          transition={spring}
          style={{ ...item, ...shape }}
        />
      ))}
    </ul>
  );
}

const initialOrder: PatternItem[] = [
  { shape: 'line', backgroundColor: '#3b3b3b', width: '100%', height: '2px', borderRadius: '0' },
  { shape: 'triangle', backgroundColor: '#0f4c75', width: '0', height: '0', borderTop: '100px solid transparent', borderBottom: '100px solid transparent', borderLeft: '100px solid #0f4c75' },
  { shape: 'wave', backgroundColor: '#f3f4f6', width: '120px', height: '60px', borderRadius: '50%' },
  { shape: 'rectangle', backgroundColor: '#2e2e2e', width: '140px', height: '80px', borderRadius: '8px' },
  { shape: 'line', backgroundColor: '#4a4a4a', width: '80%', height: '2px', borderRadius: '0' },
  { shape: 'wave', backgroundColor: '#324a5f', width: '120px', height: '60px', borderRadius: '50%' },
  { shape: 'rectangle', backgroundColor: '#1c1c1c', width: '160px', height: '100px', borderRadius: '8px' },
  { shape: 'triangle', backgroundColor: '#5a5a5a', width: '0', height: '0', borderTop: '100px solid transparent', borderBottom: '100px solid transparent', borderLeft: '100px solid #5a5a5a' }
];

/**
 * Utility shuffle function
 */
function shuffle([...array]: PatternItem[]): PatternItem[] {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * Animation transition config
 */
const spring = {
  type: 'spring',
  damping: 25,
  stiffness: 250,
};

/**
 * Style for pattern container
 */
const container: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', // Grid dengan kolom yang fleksibel
  gridTemplateRows: 'repeat(auto-fill, 150px)', // Menyesuaikan tinggi
  gap: '20px', // Memberikan jarak antar elemen
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 0,
  opacity: 0.12,
};

/**
 * Style for pattern items
 */
const item: React.CSSProperties = {
  flexShrink: 0,
  transition: 'all 1s ease-in-out',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Menambahkan bayangan lembut untuk kedalaman
};
