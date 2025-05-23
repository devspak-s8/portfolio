import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-center py-6">
        <div className="bg-zinc-900 rounded-full px-6 py-2 flex items-center justify-between w-full max-w-md">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-purple-400">
           Home
            </Link>
            <Link
              href="/education"
              className="text-sm font-medium text-purple-400"
            >
              education
            </Link>
            <Link href="/experience" className="text-sm font-medium">
              experience
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/devspak-s8" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="mailto:devsppark015@gmail.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="container mx-auto text-center py-16">
        <h1 className="text-2xl font-light text-gray-300 max-w-2xl mx-auto">
          Here, you can know my journey and see my whole experience as a{" "}
          <span className="font-medium text-white">
            Front-End Software Engineer
          </span>{" "}
          ✨
        </h1>
        <div className="mt-8">
          <Button
            variant="outline"
            className="rounded-full bg-white text-black hover:bg-gray-200"
          >
            Download CV
          </Button>
        </div>
      </header>

      {/* Experience Cards */}
      <section className="container mx-auto py-8 space-y-8 max-w-4xl">
        <ExperienceCard
          title="Lead Frontend Developer"
          period="Apr 2025 – Present"
          location="Remote / Your Location"
          company="S3Records"  
          companydescription="Lead Frontend Developer
A cutting-edge smart hospital management platform revolutionizing healthcare workflows. Digitizes appointment bookings, streamlines medical records access, and optimizes administrative processes to boost patient experience and operational efficiency.
What I did: Spearheaded frontend architecture using React.js and Tailwind CSS, collaborated closely with backend engineers (Golang/gRPC), and delivered scalable UI components aligned with HIPAA-compliant data security standards."
       
        />

        <ExperienceCard
          title="Co-founder"
          period="Apr 2025 – Present"
          location="Remote / Your Location"
          company="S8Academy"
          companydescription="Co-founder
An innovative online learning platform offering tech and academic courses with certifications, designed to bridge the digital skills gap. Features personalized dashboards, progress tracking, quizzes, and interactive course modules.
What I did: Co-led product vision and roadmap, built responsive frontend interfaces with React.js and TypeScript, integrated RESTful APIs for seamless data flow, and implemented user-centric features that increased engagement metrics."
        />

        <ExperienceCard
          title="Frontend Developer"
          period="May 2025 – Present"
          location="Remote / Your Location"
          company="Project Moove"  companydescription="AFrontend Developer
A streamlined logistics platform engineered to facilitate fast and easy movement of goods and services, specifically tailored for university students. Simplifies ordering, tracking, and delivery within campus environments to boost convenience and efficiency.
What I did: Crafted user-friendly frontend interfaces with React.js, optimized for mobile and desktop, integrated real-time tracking features, and collaborated on API development to ensure seamless order processing and updates."
       
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
  );
}

interface ExperienceCardProps {
  title: string;
  period: string;
  location: string;
  company: string;
  companydescription: string; 
}

function ExperienceCard({
  title,
  period,
  location,
  company,
  companydescription
}: ExperienceCardProps) {
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
              {companydescription}
               </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
