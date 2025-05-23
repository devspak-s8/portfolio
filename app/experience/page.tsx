import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-center py-6">
        <div className="bg-zinc-900 rounded-full px-6 py-2 flex items-center justify-between w-full max-w-md">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-purple-400">
              lucasvega
            </Link>
            <Link href="/education" className="text-sm font-medium text-purple-400">
              education
            </Link>
            <Link href="/experience" className="text-sm font-medium">
              experience
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="mailto:example@example.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="container mx-auto text-center py-16">
        <h1 className="text-2xl font-light text-gray-300 max-w-2xl mx-auto">
          Here, you can know my journey and see my whole experience as a{" "}
          <span className="font-medium text-white">Front-End Software Engineer</span> ✨
        </h1>
        <div className="mt-8">
          <Button variant="outline" className="rounded-full bg-white text-black hover:bg-gray-200">
            Download CV
          </Button>
        </div>
      </header>

      {/* Experience Cards */}
      <section className="container mx-auto py-8 space-y-8 max-w-4xl">
        <ExperienceCard
          title="Front-end Software Engineer"
          period="Jan 2020 • Present"
          location="Manaus, AM - Brazil"
          company="Company Name"
        />

        <ExperienceCard
          title="Front-end Software Engineer"
          period="Jan 2020 • Present"
          location="Manaus, AM - Brazil"
          company="Company Name"
        />

        <ExperienceCard
          title="Front-end Software Engineer"
          period="Jan 2020 • Present"
          location="Manaus, AM - Brazil"
          company="Company Name"
        />
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8">
        <div className="bg-zinc-900 rounded-full px-6 py-3 flex items-center justify-between max-w-md mx-auto">
          <span className="text-sm text-gray-400">Follow me</span>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="mailto:example@example.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface ExperienceCardProps {
  title: string
  period: string
  location: string
  company: string
}

function ExperienceCard({ title, period, location, company }: ExperienceCardProps) {
  return (
    <div className="bg-zinc-900 rounded-3xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-purple-400 text-sm mt-1">Contract</p>
          <div className="text-gray-400 text-sm mt-4">
            <p>{period}</p>
            <p>{location}</p>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-purple-400 mb-4">{company}</h4>
          <div className="space-y-6 text-gray-400">
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
