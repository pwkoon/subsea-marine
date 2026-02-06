'use client';

import { useRef, useState, useEffect } from 'react';
import ServiceSection from '@/components/ServiceSection';
import ServiceDots from '@/components/ServiceDots';
import { services } from '@/data/services';

export default function ServicesPage() {
  // const sectionRefs = services.map(() => useRef<HTMLDivElement>(null));
  // const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  // wk: not recommened in real word
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const [active, setActive] = useState(0);

  // detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex((ref) => ref.current === entry.target);
            if (index !== -1) setActive(index);
          }
        });
      },
      { threshold: 0.6 },
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative bg-lightBlue">
      <ServiceDots
        count={services.length}
        active={active}
        onClick={(i) =>
          sectionRefs[i].current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      />

      {services.map((service, i) => (
        <ServiceSection key={i} ref={sectionRefs[i]} service={service} />
      ))}
    </main>
  );
}
