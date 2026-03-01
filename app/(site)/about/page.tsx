import Image from "next/image";

function About() {
  return (
    <>
      <div className="bg-mediumBlue">
        <div className="flex items-center py-30 justify-around">
          {/* This is section of the top photo */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 md:gap-5">
            <div className="hidden md:flex w-54 h-77">
              <Image
                src="/images/subsea5.webp"
                className="border-4 border-r-yellow border-b-yellow"
                width={300}
                height={300}
                alt="Subsea5"
              />
            </div>
            <div className="relative w-60 h-80 lg:w-90 lg:h-120 lg:col-span-2 mx-auto">
              <Image
                src="/images/subsea7.webp"
                fill
                className="object-cover border-4 border-l-yellow border-b-yellow"
                alt="Subsea7"
              />
            </div>
            <div className="hidden md:flex relative w-54 h-77 lg:top-80 lg:w-40 lg:h-60">
              <Image
                src="/images/subsea10.webp"
                fill
                className="object-contain border-4 border-l-yellow border-t-yellow"
                alt="Subsea10"
              />
            </div>
          </div>
        </div>
        <div className="relative bottom-40 md:bottom-50 lg:bottom-60">
          <p className="text-[clamp(3rem,9vw,10rem)] font-extrabold text-darkBlue text-center">
            about <span className="text-transparent [-webkit-text-stroke:3px_#1C2E4A]">us</span>
          </p>
          <p className="mx-auto w-55 md:w-1/2 text-yellow font-normal text-[clamp(0.9rem,2vw,1.5rem)] pb-10">
            Subsea Marine was established in 1978, at a time when Malaysia&apos;s marine and
            underwater engineering industry was still in its infancy.
          </p>
          <p className="mx-auto w-55 md:w-1/2 text-yellow font-normal text-[clamp(0.9rem,2vw,1.5rem)] pb-10">
            Since then, the company has evolved into a{' '}
            <span className="bg-darkBlue font-bold">trusted and experienced service provider </span>
            in the field of underwater civil engineering and marine support services.
          </p>
          <p className="mx-auto w-55 md:w-1/2 text-yellow font-normal text-[clamp(0.9rem,2vw,1.5rem)] pb-10">
            Over the decades, Subsea Marine has successfully undertaken and completed numerous
            complex and high-risk projects, serving both public and private sectors across Malaysia.
          </p>
          <p className="mx-auto w-55 md:w-1/2 text-yellow font-normal text-[clamp(0.9rem,2vw,1.5rem)] pb-10">
            Our work spans a wide range of services including{' '}
            <span className="bg-darkBlue font-bold">underwater inspections</span>,
            <span>cutting and demolition</span>,{' '}
            <span className="bg-darkBlue font-bold">pipeline installations</span>,{' '}
            <span className="bg-darkBlue font-bold">structural salvage</span>, and{' '}
            <span className="bg-darkBlue font-bold">marine recovery operations</span>.
          </p>
        </div>
      </div>
    </>
  );
}

export default About
