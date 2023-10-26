'use client'

import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { NewsletterSignupContainer, NewsletterSignupContentBlock, NewsletterSignupForm, NewsletterSignupList, NewsletterSignupTitle } from '@/components/NewsletterSignup'

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ['latin'] });

function NewsletterSignupSuccess({
  email,
  onClose
}: {
  email: string;
  onClose: () => void
}) {
  return <NewsletterSignupContainer width="32rem">
    <div className="py-12">
      <NewsletterSignupContentBlock>
          <NewsletterSignupTitle text="Thanks for subscribing!" />
          
          <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.</p>

          <button
            onClick={onClose}
            className="bg-[#36384C] text-white rounded-lg w-full text-center py-4 font-bold hover:bg-gradient-to-r from-rose-500 to-orange-500 hover:shadow-xl hover:shadow-rose-200 cursor-pointer"
          >
            Dismiss message
          </button>
      </NewsletterSignupContentBlock>
    </div>
  </NewsletterSignupContainer>
}

export default function NewsletterSignupPage() {
  const [emailAddress, setEmailAddress] = useState<string|null>(null);
  const [formIsValid, setFormIsValid] = useState<boolean>(true);
  const [formIsSubmitted, setFormIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setFormIsValid(true);
  }, [emailAddress, setFormIsValid]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    
    const form = event.target as HTMLFormElement;
    if(form.reportValidity()) {
      setFormIsSubmitted(true);
    }
  }

  const handleInvalidForm = (event: FormEvent) => {
    setFormIsValid(false);
  }

  if (formIsSubmitted) {
    return <NewsletterSignupSuccess email={emailAddress as string} onClose={() => setFormIsSubmitted(false)} />
  }

  return <NewsletterSignupContainer width="54rem">
    <div className="flex items-center justify-between">
      <NewsletterSignupContentBlock>
        <NewsletterSignupTitle text="Stay updated!" />

        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <NewsletterSignupList items={[
          "Product discovery and building what matters",
          "Measuring to ensure updates are a success",
          "And much more!"
        ]} />

        <NewsletterSignupForm onSubmit={handleSubmit} onInvalid={handleInvalidForm} formIsValid={formIsValid} />
      </NewsletterSignupContentBlock>

      <Image
        src="/assets/newsletter-signup/illustration-sign-up-desktop.svg"
        alt="Newsletter Signup Illustration"
        aria-role="presentation"
        width="400"
        height="594"
      />
    </div>
  </NewsletterSignupContainer>
}