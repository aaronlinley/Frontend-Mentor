import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })

export default function NewsletterSignupContainer({ width, children }: { width: string; children: ReactNode; }) {
  return <div className={`rounded-[34px] bg-white shadow-lg p-6 w-[${width}] mx-auto mt-14 text-[#36384C] ${roboto.className}`}>
    {children}
  </div>
}