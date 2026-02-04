import Image from "next/image";

function About() {
  return (
    <>
      <div className="bg-mediumBlue">
        <div className="flex items-center py-30 justify-center">
          {/* This is section of the top photo */}
          <div className="grid grid-cols-4 gap-2">
            <div className="w-54 h-77">
              <Image src="/images/subsea5.png" width={300} height={300} alt="Subsea5" />
            </div>
            <div className="relative w-90 h-120 col-span-2 mx-auto">
              <Image src="/images/subsea7.png" fill className="object-cover" alt="Subsea7" />
            </div>
            <div className="relative top-60 w-54 h-60">
              <Image src="/images/subsea10.png" fill className="object-contain" alt="Subsea10" />
            </div>
          </div>
        </div>
        <div className="relative bottom-60">
          <p className="text-[clamp(3rem,9vw,10rem)] font-extrabold text-darkBlue text-center">
            about us
          </p>
          <p className="mx-auto w-1/2 text-yellow font-normal text-[clamp(0.9rem,2vw,1.5rem)] pb-10">
            Subsea Marine was established in 1978, at a time when Malaysia&apos;s marine and
            underwater engineering industry was still in its infancy.
          </p>
          <p className="mx-auto w-1/2 text-yellow font-normal text-[clamp(0.9rem,2vw,1.5rem)] pb-10">
            Since then, the company has evolved into a trusted and experienced service provider in
            the field of underwater civil engineering and marine support services.
          </p>
          <p className="mx-auto w-1/2 text-yellow font-normal text-[clamp(0.9rem,2vw,1.5rem)] pb-10">
            Over the decades, Subsea Marine has successfully undertaken and completed numerous
            complex and high-risk projects, serving both public and private sectors across Malaysia.
          </p>
          <p className="mx-auto w-1/2 text-yellow font-normal text-[clamp(0.9rem,2vw,1.5rem)] pb-10">
            Our work spans a wide range of services including underwater inspections, cutting and
            demolition, pipeline installations, structural salvage, and marine recovery operations
          </p>
        </div>
      </div>
    </>
  );
}

export default About
