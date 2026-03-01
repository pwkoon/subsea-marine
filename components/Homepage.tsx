'use client';

import { useEffect, useRef, useState } from 'react';
import Banner from './Banner';
import Services from './Services';
import Navbar from './Navbar';
import Clients from './Clients';

function Homepage() {
  const triggerRef = useRef(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowNav(window.scrollY > 800);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    console.log('CLIENT WORKING');
  }, []);

  return (
    <>
      <Banner />
      <Navbar show={showNav} />
      <Services ref={triggerRef} />
      <Clients />
    </>
  );
}

export default Homepage;
