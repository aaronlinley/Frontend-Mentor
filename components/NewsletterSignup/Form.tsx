'use client'

import { ChangeEvent, DetailedHTMLProps, FormHTMLAttributes, useState } from 'react'

type NewletterSignupFormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
  formIsValid: boolean
}

export default function NewsletterSignupForm({ formIsValid, ...props }: NewletterSignupFormProps) {
  const [emailAddress, setEmailAddress] = useState<string|null>(null);

  return <form {...props}>
    <div className="relative">
      <label htmlFor="email" className="block font-bold text-xs mb-3">Email address</label>
      <input
        required
        type="email"
        className={`block border rounded-lg py-3 px-6 w-full mb-6 outline-none ${!formIsValid ? "border-red-600 bg-red-100 text-red-500 placeholder:text-red-500" : "border-gray-300 placeholder:text-gray-400"}`}
        placeholder="email@company.com"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailAddress(e.currentTarget.value)}
      />
      {!formIsValid && <span className="text-xs text-red-400 block absolute top-0 right-0 font-bold">Valid email required</span>}
    </div>

    <input
      type="submit"
      value="Subscribe to monthly newsletter"
      className="bg-[#36384C] text-white rounded-lg w-full text-center py-4 font-bold hover:bg-gradient-to-r from-rose-500 to-orange-500 hover:shadow-xl hover:shadow-rose-200 cursor-pointer"
    />
  </form>
}