import React from "react"

export default function Banner() {
  return (
    <>
      {/* <div className='h-screen'>
        <div className="bg-[url(@/public/images/sky.jpg)] bg-center bg-fixed h-screen">
          <p className="text-3xl font-medium text-mediumBlue text-center relative top-55">
            Underwater Civil Engineering Specialist
          </p>
          <h1 className="text-9xl font-extrabold text-darkBlue relative text-center top-60">
            SUBSEA MARINE
          </h1>
        </div>

        <div className="bg-[url(@/public/images/ocean.png)] bg-cover relative h-screen bottom-190">
          <p className=' relative top-150 '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
            a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established
            fact that a reader will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content here', making it look
            like readable English. Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
            
          </p>
        </div>
      </div> */}
      <section className="relative h-screen overflow-scroll">
        {/* SKY BACKGROUND */}
        <div className="absolute inset-0 bg-[url('/images/sky.jpg')] bg-cover bg-center bg-fixed" />

        {/* HERO TEXT */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
          <p className="text-3xl font-medium text-mediumBlue mb-4">
            Underwater Civil Engineering Specialist
          </p>

          <h1 className="text-8xl md:text-9xl font-extrabold text-darkBlue">SUBSEA MARINE</h1>
        </div>

        {/* OCEAN SECTION (with text inside) */}
        <div
          className="
          absolute bottom-0 left-0
          w-full h-full
          bg-[url('/images/ocean.png')]
          bg-cover bg-top
          z-20
          flex items-end
          translate-y-40
        "
        >
          <div className="max-w-7xl mx-auto px-6 text-yellow grid grid-cols-3 items-center h-auto">
            <div className="text-yellow">
              <p className="text-2xl font-bold text-nowrap"># Established on August 1978</p>
              <p className="text-xl text-balance">
                Over 45 years of experience in underwater civil and marine engineering
              </p>
            </div>
            <div className="text-7xl text-darkBlue font-extrabold w-1/2 text-center leading-20 mx-auto">
              WHO WE ARE
            </div>
            <div>
              <p className="text-2xl font-bold text-nowrap"># Professional Partnerships</p>
              <p className="text-xl text-balance">
                Strong collaboration history with ports, government bodies, and engineering firms.
              </p>
              <p className="text-2xl font-bold text-nowrap"># Specialist Team & Equipment</p>
              <p className="text-xl text-balance">
                Equipped with a highly trained diving team, marine engineers, and specialised
                equipment for underwater works.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-nowrap"># Professional Partnerships</p>
          <p className="text-xl text-balance">
            Strong collaboration history with ports, government bodies, and engineering firms.
          </p>

          <p className="text-2xl font-bold text-nowrap"># Specialist Team & Equipment</p>
          <p className="text-xl text-balance">
            Equipped with a highly trained diving team, marine engineers, and specialised equipment
            for underwater works.
          </p>
        </div>
      </section>

    </>
  );
}
