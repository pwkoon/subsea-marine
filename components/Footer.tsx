import { Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <div
      className="
    @container 
    bg-yellow
    grid grid-cols-1
    @[900px]:grid-cols-4
    p-4 @[900px]:p-10
    items-start
    text-center
  "
    >
      <div className="pb-10">
        <h1 className="text-3xl font-bold">SUBSEA MARINE</h1>
      </div>

      <div className="mx-auto pb-10">
        <h2>Contact Us</h2>

        <div className="flex items-center gap-2 pt-5">
          <Mail />
          <p>subseamarine@gmail.com</p>
        </div>

        <div className="flex items-center gap-2">
          <Phone />
          <p>+60 12345678</p>
        </div>

        <div className="flex items-center gap-2">
          <FaWhatsapp className="text-2xl" />
          <p>+60 12345678</p>
        </div>
      </div>

      <div className="mx-auto text-balance pb-10">
        <h2>Business Operations</h2>
        <p className="pt-5 @[600px]:w-1/2 @[600px]:mx-auto">
          8.30am – 5.30pm (Open Daily except Saturday, Sunday & Public Holiday)
        </p>
      </div>

      <div className="mx-auto text-balance pb-10">
        <h2>Office Address</h2>
        <p className="pt-5 @[600px]:w-1/2 @[600px]:mx-auto">
          somewhere somewhere somewhere somewhere somewhere somewhere
        </p>
      </div>
    </div>
  );
}
