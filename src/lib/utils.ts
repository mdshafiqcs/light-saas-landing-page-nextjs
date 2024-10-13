import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import {twMerge} from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



export function constructMetadata({
  title = "Light SaaS - landing page design",
  description = 'landing page design with nextjs and tailwindcss',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  image = "/thumbnail.png",
  icons = "/favicon.ico"
}: {
  title?: string,
  description?: string,
  image?: string,
  icons?: string
} = {} ): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    icons,
    metadataBase: new URL("https://light-saas-landing-page-nextjs.vercel.app")
  }
}