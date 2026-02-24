'use client';

import { motion } from 'framer-motion';

type Props = {
  count: number;
  active: number;
  onClick: (index: number) => void;
};

export default function ServiceDots({ count, active, onClick }: Props) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      <p className="text-yellow text-[clamp(0.9rem,2vw,1rem)]">our</p>
      {Array.from({ length: count }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onClick(i)}
          className={`
            w-3 h-3 rounded-full transition
            ${active === i ? 'bg-black scale-125' : 'bg-black/30'}
          `}
          whileHover={{ scale: 1.5 }}
          aria-label={`Go to service ${i + 1}`}
        />
      ))}
      <p className="text-yellow text-[clamp(0.9rem,2vw,1rem)]">services</p>
    </div>
  );
}
