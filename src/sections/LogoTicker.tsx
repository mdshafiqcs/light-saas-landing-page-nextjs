"use client";
import Image from "next/image";

import { acmeLogo, apexLogo, echoLogo, pulseLogo, quantumLogo, celestialLogo } from "@/assets";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return <section className='py-8 md:py-12 bg-white'>
    <div className='container'>
    <div className='overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] '>
      <motion.div 
      className="flex gap-14 flex-none"
      animate={{
        translateX: "-50%"
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }}
      >
        <Image src={acmeLogo} alt="Acme Logo" className='logo-ticker-image'/>
        <Image src={apexLogo} alt="Apex Logo" className='logo-ticker-image' />
        <Image src={echoLogo} alt="Echo Logo" className='logo-ticker-image'/>
        <Image src={pulseLogo} alt="Pulse Logo" className='logo-ticker-image'/>
        <Image src={quantumLogo} alt="Quantum Logo" className='logo-ticker-image'/>
        <Image src={celestialLogo} alt="Celestial Logo" className='logo-ticker-image'/>
        <Image src={acmeLogo} alt="Acme Logo" className='logo-ticker-image'/>
        <Image src={apexLogo} alt="Apex Logo" className='logo-ticker-image' />
        <Image src={echoLogo} alt="Echo Logo" className='logo-ticker-image'/>
        <Image src={pulseLogo} alt="Pulse Logo" className='logo-ticker-image'/>
        <Image src={quantumLogo} alt="Quantum Logo" className='logo-ticker-image'/>
        <Image src={celestialLogo} alt="Celestial Logo" className='logo-ticker-image'/>
      </motion.div>
    </div>
    </div>
  </section>
};
