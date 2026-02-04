import React, { forwardRef } from 'react'

const servicesData = [
  { title: 'Underwater Civil Engineering', image: '4' },
  { title: 'Marine Salvage', image: '2' },
  { title: 'Pipeline Installation & Maintenance', image: '3' },
  { title: 'Diving Services', image: '1' },
];

const Services = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="relative">
      <div className="absolute inset-0 bg-[url('/images/homepage.png')] bg-cover bg-center min-h-[clamp(32rem,96vh,72rem)]" />
      <div
        className="
        relative z-10
        flex flex-col items-center justify-center text-center
        px-[clamp(1rem,4vw,2rem)]
        min-h-[clamp(24rem,70vh,40rem)] translate-y-40
      "
      >
        <div className="bg-mediumBlue/75 px-[clamp(3rem,8vw,8rem)] py-[clamp(3rem,8vw,8rem)]">
          <p className="text-[clamp(2rem,4vw,5rem)] text-darkBlue font-extrabold">OUR SERVICES</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="group relative w-56 h-44 md:h-84 overflow-hidden rounded-xl"
              >
                {/* Background image */}
                <div
                  className="
                      absolute inset-0
                      bg-cover bg-bottom
                      transition-transform duration-500 ease-out
                      group-hover:scale-110
                    "
                  style={{
                    backgroundImage: `url(/images/subsea${service.image}.png)`,
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-0" />

                {/* Text overlay */}
                <p
                  className="
                  w-full h-full flex items-center justify-center relative
                  p-4
                  text-xl font-bold text-yellow
                "
                >
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services
