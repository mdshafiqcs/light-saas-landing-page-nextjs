import { ArrowRight, Logo, MenuIcon } from "@/assets";
import Image from "next/image";


export const Header = () => {
  return (
    <header className='sticky top-0 z-20 backdrop-blur-sm'>
      <div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
        <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
        <div className='flex justify-center items-center gap-1'>
          <p>Get started for free</p>
          <ArrowRight className='h-4 w-4 inline-flex items-center justify-center' />
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <div className='flex justify-between items-center'>
          <Image src={Logo} width={40} height={40} alt="Saas Logo" />
          <MenuIcon className='w-5 h-5 md:hidden' />
          <nav className="hidden md:flex gap-6 items-center">
            <a href="">Home</a>
            <a href="">Features</a>
            <a href="">Customers</a>
            <a href="">Updates</a>
            <a href="">Help</a>
            <button className='btn btn-primary'>Get for free</button>
          </nav>
          </div>
        </div>

      </div>
    </header>
  );
};
