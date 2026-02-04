import { FaPhoneAlt } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Footer() {
  return (
    <>
      <div
        className="
    @container 
    bg-yellow
    p-4 @[1000px]:p-20
    items-start
    text-center
  "
      >
        <div
          className="grid grid-cols-1
    @[1000px]:grid-cols-4"
        >
          <div className="pb-10">
            <h1 className="text-3xl font-bold">SUBSEA MARINE</h1>
          </div>

          <div className="mx-auto pb-10">
            <h2 className="text-2xl font-bold">Contact Us</h2>

            <div className="flex items-center gap-2 pt-5">
              <IoMailSharp />
              <p>subseamarine@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <p className="mx-auto">+60 12345678</p>
            </div>

            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-xl" />
              <p className="mx-auto">+60 12345678</p>
            </div>
          </div>

          <div className="mx-auto pb-10">
            <h2 className="text-2xl font-bold">Business Operations</h2>
            <p className="pt-5 mx-auto text-balance">
              8.30am - 5.30pm (Open Daily except Saturday, Sunday & Public Holiday)
            </p>
          </div>

          <div className="mx-auto pb-10">
            <h2 className="text-2xl font-bold">Office Address</h2>
            <p className="pt-5 mx-auto text-balance">
              somewhere somewhere somewhere somewhere somewhere somewhere
            </p>
          </div>
        </div>
      </div>
      <div className="bg-darkBrown">
        <p className="text-center text-white text-[clamp(0.75rem,2vw,1.5rem)] p-[clamp(0.5rem,4vw,0.75rem)]">
          © 2026 SUBSEA Marine Engineering (M) Sdn. Bhd.
        </p>
      </div>
    </>
  );
}
