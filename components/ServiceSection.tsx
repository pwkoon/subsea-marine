'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  service: {
    title: string;
    desc: string;
    image: string;
  };
};

const ServiceSection = forwardRef<HTMLDivElement, Props>(({ service }, ref) => {
  return (
    <section ref={ref} className="h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 max-w-6xl w-full"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full h-80 rounded-xl overflow-hidden"
        >
          <Image src={service.image} alt={service.title} fill className="object-cover" />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
          <p className="text-lg text-gray-600">{service.desc}</p>
        </div>
      </motion.div>
    </section>
  );
});

ServiceSection.displayName = 'ServiceSection';
export default ServiceSection;
