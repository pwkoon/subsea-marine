import React from "react"

export default function Banner() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* HERO */}
        <div className="relative w-full min-h-[clamp(32rem,100vh,60rem)]">
          {/* SKY */}
          <div className="absolute inset-0 bg-[url('/images/sky.jpg')] bg-cover bg-center" />

          {/* HERO TEXT */}
          <div
            className="
        relative z-10
        flex flex-col items-center justify-center text-center
        px-[clamp(1rem,4vw,2rem)]
        min-h-[clamp(24rem,70vh,40rem)]
      "
          >
            <p className="text-[clamp(1rem,2.5vw,1.75rem)] font-medium text-mediumBlue md:leading-0.5">
              Underwater Civil Engineering Specialist
            </p>

            <h1 className="text-[clamp(3rem,8vw,8rem)] font-extrabold text-darkBlue leading-10 md:leading-normal">
              SUBSEA MARINE
            </h1>
          </div>

          {/* 🌊 OCEAN OVERLAY */}
          <div
            className="
              absolute inset-x-0 bottom-0
              h-4/5 md:h-full
              bg-[url('/images/ocean.png')]
              bg-cover bg-top
              z-20
              pointer-events-none
              translate-y-2
            "
          />

          {/* OCEAN CONTENT (normal flow, NOT absolute) */}
          <div className="relative z-30">
            <div
              className="
              w-full
              max-w-[clamp(20rem,90vw,80rem)]
              mx-auto items-center
              px-[clamp(1rem,4vw,2rem)]
              py-[clamp(3rem,8vw,6rem)]
              grid md:grid-cols-3 gap-[clamp(2rem,6vw,4rem)]
              text-yellow text-center md:text-left
            "
            >
              <div>
                <p className="text-[clamp(2rem,4vw,5rem)] font-extrabold text-center text-darkBlue text-shadow-xl">
                  WHO WE ARE
                </p>
              </div>
              <div className="lg:flex-row items-center gap-[clamp(1.5rem,5vw,3rem)]">
                <div>
                  <p className="text-[clamp(0.9rem,2vw,1.5rem)] font-bold pb-2">
                    # Established on August 1978
                  </p>
                  <p className="text-[clamp(0.9rem,2vw,1.25rem)] leading-relaxed">
                    Over 45 years of experience in underwater civil and marine engineering
                  </p>
                </div>
              </div>
              <div className="flex md:flex-col items-center gap-[clamp(1.5rem,5vw,3rem)] text-balance">
                <div className="space-y-9">
                  <div>
                    <p className="text-[clamp(0.9rem,2vw,1.5rem)] font-bold pb-2">
                      # Professional Partnerships
                    </p>
                    <p className="text-[clamp(0.9rem,2vw,1.25rem)] leading-relaxed">
                      Strong collaboration history with ports, government bodies, and engineering
                      firms.
                    </p>
                  </div>

                  <div>
                    <p className="text-[clamp(0.9rem,2vw,1.5rem)] font-bold pb-2">
                      # Specialist Team & Equipment
                    </p>
                    <p className="text-[clamp(0.9rem,2vw,1.25rem)] leading-relaxed">
                      Equipped with a highly trained diving team, marine engineers, and specialised
                      equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
