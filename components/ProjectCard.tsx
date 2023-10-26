import Link from "next/link"
import Image from "next/image"

type ProjectCardProps = {
  name: string;
  link: string;
  description: string;
}

export default function ProjectCard({ name, link, description }: ProjectCardProps) {
  return <Link href={link} className="bg-white shadow rounded hover:bg-gray-100">
    <Image src={`/previews${link}.jpg`} alt={`${name} Preview`} className="rounded block max-w-full" width={450} height={300} />
    <div className="p-6">
      <h2 className="text-lg text-blue-500 mb-1 font-bold">{name}</h2>
      <p>{description}</p>
    </div>
  </Link>
}