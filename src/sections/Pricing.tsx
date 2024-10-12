import { CheckIcon } from "@/assets";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return <section className="py-24 bg-white">
    <div className='container'>
      <div className='section-heading'>
        <h2 className='section-title'>Pricing</h2>
        <p className='section-description mt-5'>Free forever. Upgrade for unlimited tasks, better security and exclusive features.</p>
      </div>
      <div className='mt-10 flex flex-col gap-6 items-center lg:flex-row lg:items-end lg:justify-center lg:gap-10 xl:gap-14 '>
        {
          pricingTiers.map(({title, monthlyPrice, buttonText, popular, inverse, features}) => (
            <div key={title} className={cn("p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full", {
              "text-white bg-black border-black": inverse === true
            })}>
              <div className='flex justify-between'>
                <h3 className={cn('text-black/50 font-bold text-lg', {
                  "text-white/60": inverse === true
                })}>{title}</h3>
                {
                  popular && (
                    <div className="inline-flex px-4 py-1.5 rounded-xl text-sm border border-white/20">
                      <span className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium'>Popular</span>
                    </div>
                  )
                }
              </div>

              <div className='flex gap 1 items-baseline mt-[30px]'>
                <span className='text-4xl font-bold tracking-tight leading-none'>${monthlyPrice}</span>
                <span className={cn('text-black/50 tracking-tight font-bold', {
                  "text-white/50": inverse === true
                })}>/month</span>
              </div>

              <button className={cn('btn btn-primary w-full mt-[30px]', {
                "bg-white text-black": inverse === true
              })}>{buttonText}</button>

              <ul className='flex flex-col gap-5 mt-8'>
                {
                  features.map((feature) => (
                    <li key={feature} className="text-sm flex items-center gap-4">
                      <CheckIcon className='h-6 w-6' />
                      <span>{feature}</span>
                    </li>
                  ))
                }
              </ul>



            </div>
          ))
        }
      </div>
    </div>
  </section>
};
