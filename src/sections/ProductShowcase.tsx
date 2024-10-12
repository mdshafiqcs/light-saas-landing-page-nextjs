import { pyramidImage, tubeImage, productImage } from "@/assets";
import Image from "next/image";


export const ProductShowcase = () => {
  return <section className='py-24 overflow-x-clip'>
    <div className="container">
        <div className="max-w-[540px] xl:max-w-[640px] mx-auto">
          <div className='flex justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h2 className="text-center mt-5 text-3xl md:text-[54px] xl:text-[65px] md:leading-[60px] xl:leading-[78px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">A more efficient way to track progress</h2>
          <p className='text-center mt-5 text-[22px] leading-[30px] text-[#010D3E] tracking-tight'>Efforlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template</p>
          
        </div>
      <div className='relative'>
      <Image src={productImage} alt="product image" className="mt-10" />
        <Image src={pyramidImage} width={262} height={262} alt="pyramid image" className="hidden md:block absolute -top-32 -right-36" />
        <Image src={tubeImage} height={248} alt="tube image" className='hidden md:block absolute bottom-24 -left-36' />
      </div>
    </div>
  </section>
};
