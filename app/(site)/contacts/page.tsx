import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';

function Contacts() {
  return (
    <div className="text-center relative w-full min-h-[clamp(32rem,100vh,60rem)] bg-mediumBlue py-10">
      <p className="text-[clamp(3rem,9vw,10rem)] font-extrabold text-darkBlue text-center pb-5">
        contact <span className="text-transparent [-webkit-text-stroke:3px_#1C2E4A]">us</span>
      </p>
      <div className="md:flex items-center justify-center w-2/3 mx-auto">
        <div className="bg-darkBlue text-yellow text-[clamp(0.9rem,2vw,1.8rem)] h-100 md:h-150">
          <p className="text-[clamp(0.9rem,2vw,3rem)] font-bold pt-15 pb-3">Contact Us</p>
          <div className="flex text-[clamp(0.9rem,2vw,1.5rem)] items-center justify-center gap-2 font-medium">
            <MdEmail /> subseamarine@gmail.com
          </div>
          <div className="flex text-[clamp(0.9rem,2vw,1.5rem)] items-center justify-center gap-2 font-medium">
            <MdPhone /> +6016-1234567
          </div>
          <div className="flex text-[clamp(0.9rem,2vw,1.5rem)] items-center justify-center gap-2 font-medium">
            <MdWhatsapp /> +6016-1234567
          </div>
          <p className="text-[clamp(0.9rem,2vw,3rem)] font-bold pt-15 pb-3">Business Operations</p>
          <p className="text-[clamp(0.9rem,2vw,1.5rem)] font-medium">
            8.30am - 5.30pm(Open Daily except Saturday, Sunday & Public Holiday)
          </p>
        </div>
        <div className="w-full h-100 md:h-150">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127428.6441426801!2d101.02336593372011!3d3.5540104338993173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc909ca3eb2721%3A0x44c4d78157b57be1!2s45400%20Sekinchan%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2ssg!4v1772117991886!5m2!1sen!2ssg"
            className="border-none w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
