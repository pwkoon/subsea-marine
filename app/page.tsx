// import Footer from '@/components/Footer';
// import Navbar from '@/components/Navbar';
'use client';

import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
    const triggerRef = useRef(null);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        setShowNav(window.scrollY > 800);
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
  
  return (
    <>
      <Navbar show={showNav} />
      <Banner />
      <Services ref={triggerRef} />
    </>
  );
}
