"use client";
import Image from "next/image";

import { acmeLogo, apexLogo, echoLogo, pulseLogo, quantumLogo, celestialLogo } from "@/assets";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return <section className='py-8 md:py-12 bg-white'>
    <div className='container'>
    <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] '>
      <motion.div 
      className="flex gap-14 flex-none pr-14"
      initial={{ translateX: 0 }}
      animate={{
        translateX: "-50%"
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      >

        {
          images.concat(images).map(({src, alt}) => (
            <Image src={src} alt={alt} key={src.src} className='logo-ticker-image flex-none'/>
          ))
        }
        {
          images.concat(images).map(({src, alt}) => (
            <Image src={src} alt={alt} key={src.src} className='logo-ticker-image flex-none'/>
          ))
        }

      </motion.div>
    </div>
    </div>
  </section>
};
