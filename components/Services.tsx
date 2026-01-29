import React, { forwardRef } from 'react'

const Services = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="bg-black h-screen container-fluid">
      <h1 className='text-white'>Our Services</h1>
    </section>
  );
});

Services.displayName = 'Services';

export default Services
