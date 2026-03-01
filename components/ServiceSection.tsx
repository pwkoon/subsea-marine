'use client';

import Image from 'next/image';
import { forwardRef, useEffect } from 'react';
import { motion, useAnimate, useInView } from 'framer-motion';

type Props = {
  service: {
    title: string;
    desc: string;
    image: string;
  };
};

const ServiceSection = forwardRef<HTMLDivElement, Props>(({ service }, ref) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (!isInView) return;

    animate('h2', { opacity: [0, 1], y: [24, 0] }, { duration: 0.6, ease: 'easeOut' });

    animate('p', { opacity: [0, 1], y: [24, 0] }, { duration: 0.6, ease: 'easeOut', delay: 0.15 });
  }, [isInView, animate]);

  return (
    <section
      ref={ref}
      className="relative min-h-[clamp(32rem,100vh,60rem)] flex items-center justify-center px-6 bg-center bg-cover"
      style={{ backgroundImage: `url(${service.image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full h-80 rounded-xl overflow-hidden"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover border-4 border-yellow"
          />
        </motion.div>

        {/* Text (animated) */}
        <div ref={scope} className="flex flex-col justify-center text-white">
          <h2 className="text-[clamp(1.2rem,2vw,3rem)] font-bold mb-4 opacity-0 text-darkBlue bg-yellow w-fit text-nowrap">
            {service.title}
          </h2>
          <p className="text-[clamp(0.9rem,2vw,1.25rem)] text-white/90 opacity-0">{service.desc}</p>
        </div>
      </div>
    </section>
  );
});

ServiceSection.displayName = 'ServiceSection';
export default ServiceSection;
