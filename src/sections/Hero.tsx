import { ArrowRight, CogImage } from "@/assets";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";


export const Hero = () => {
  return <section className='pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] '>
    <MaxWidthWrapper>
      <div>
        <div className=' text-sm inline-flex border border-[#222]/10 rounded-lg px-3 py-1 tracking-tight'>Version 2.0 is here</div>
        <h1 className='mt-6 text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text '>Pathway to productivity</h1>
        <p className='mt-6 tracking-tight text-[#010D3E] text-xl'>
        Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="mt-[30px] flex items-center gap-1">
          <button className='btn btn-primary'>Get for free</button>
          <button className='btn btn-text gap-1'>
            <span>Learn More</span>
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>
      </div>
      <div className='mt-20'>
        <Image src={CogImage} alt="Cog Image" />
      </div>
    </MaxWidthWrapper>
  </section>;
};



