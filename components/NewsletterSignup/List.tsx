import Image from 'next/image'

export default function NewsletterSignupList({ items }: { items: string[] }) {
  return <ul className="list-none flex flex-col gap-3 mb-4">
    { items.map((item) => {
      return <li className="flex items-center gap-4">
        <Image src="/assets/newsletter-signup/icon-list.svg" alt="" width={22} height={22} aria-role="presentation" />
        { item }
      </li>
    }) }
  </ul>
}