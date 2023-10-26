import Link from "next/link"

export default function Header() {
  return <header className="bg-white shadow w-full py-6 mb-12">
    <div className="container flex justify-between items-center">
      <h1 className="font-bold text-blue-600">
        <Link href="/" className="hover:text-blue-800 hover:underline">Frontend Mentor Challenges</Link>
      </h1>

      <nav>
        <ul className="flex gap-2 text-xs uppercase tracking-widest font-bold text-blue-600">
          <li>
            <Link href="/newsletter-signup">Newsletter Signup</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
}