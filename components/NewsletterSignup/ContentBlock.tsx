import { ReactNode } from 'react'

export default function NewsletterSignupContentBlock({ children }: { children: ReactNode }) {
  return <div className="pl-10 pr-16 flex flex-col gap-6">
    { children }
  </div>
}