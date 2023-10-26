import ProjectCard from "@/components/ProjectCard"

export default function Home() {
  return (
    <main className="grid grid-cols-3">
      <ProjectCard
        name="Newsletter Signup"
        link="/newsletter-signup"
        description="Newsletter sign-up form with success message"
      />
    </main>
  )
}
