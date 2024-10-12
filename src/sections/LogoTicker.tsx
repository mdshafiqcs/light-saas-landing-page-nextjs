import Image from "next/image";

import { acmeLogo, apexLogo, echoLogo, pulseLogo, quantumLogo, celestialLogo } from "@/assets";


export const LogoTicker = () => {
  return <section className='py-8 md:py-12 bg-white'>
    <div className='container'>
    <div className='overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] '>
      <div className="flex gap-14 flex-none">
        <Image src={acmeLogo} alt="Acme Logo" className='logo-ticker-image'/>
        <Image src={apexLogo} alt="Apex Logo" className='logo-ticker-image' />
        <Image src={echoLogo} alt="Echo Logo" className='logo-ticker-image'/>
        <Image src={pulseLogo} alt="Pulse Logo" className='logo-ticker-image'/>
        <Image src={quantumLogo} alt="Quantum Logo" className='logo-ticker-image'/>
        <Image src={celestialLogo} alt="Celestial Logo" className='logo-ticker-image'/>
      </div>
    </div>
    </div>
  </section>
};
