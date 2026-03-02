'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const clients = [
  '/images/logo-subsea.png',
  '/images/logo-subsea.png',
  '/images/logo-subsea.png',
  '/images/logo-subsea.png',
  '/images/logo-subsea.png',
  '/images/logo-subsea.png',
];
const duplicatedClients = [...clients, ...clients, ...clients];

export default function Clients() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile(); // initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="bg-[url('/images/homepage3.jpg')] bg-cover bg-center min-h-[clamp(40rem,96vh,72rem)] flex flex-col items-center justify-center gap-[clamp(1.5rem,5vw,3rem)]">
        <div className="pt-[clamp(6rem,10vw,3rem)]">
          <p className="text-[clamp(2rem,4vw,5rem)] text-yellow font-extrabold">OUR CLIENTS</p>
        </div>

        {isMobile ? (
          // Mobile layout
          <div className="grid grid-cols-3 gap-5 px-5">
            {clients.map((client, index) => (
              <div key={index} className="relative w-30 h-40">
                <Image src={client} alt={`Client ${index}`} fill className="object-contain" />
              </div>
            ))}
          </div>
        ) : (
          // Tablet/Desktop layout
          <div className="infinite-scroll-container w-full overflow-hidden">
            <div className="infinite-scroll-track flex gap-8">
              {duplicatedClients.map((item, idx) => (
                <div key={idx} className="scroll-item relative w-40 h-40 shrink-0">
                  <Image src={item} alt={`Client ${idx}`} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
