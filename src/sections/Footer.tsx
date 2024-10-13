import { Logo, SocialX, SocialInsta, SocialLinkedIn, SocialPin, SocialYoutube } from "@/assets";
import Image from "next/image";


export const Footer = () => {
  return <footer className='py-10 bg-black text-[#BCBCBC] text-center text-sm'>
    <div className='container'>
      <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:absolute before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] ">
        <Image src={Logo} height={40} alt="SaaS Logo" className='relative' />
      </div>
      <nav className='mt-6 flex flex-col gap-6 md:flex-row md:justify-center'>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Customers</a>
        <a href="">Pricing</a>
        <a href="">Help</a>
        <a href="">Careers</a>
      </nav>
      <div className="flex justify-center gap-6 mt-6">
        <SocialX />
        <SocialInsta />
        <SocialLinkedIn />
        <SocialPin />
        <SocialYoutube />
      </div>
      <p className='mt-6'>&copy; {new Date().getFullYear()} You company, Inc. All rights reserved.</p>
    </div>
  </footer>
};
