import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { getFeaturedProjectBySlug } from '../../../lib/featured-projects-data'

type Props = {
  params: {
    slug: string
  }
}

export default function FeaturedProjectPage({ params }: Props) {
  const project = getFeaturedProjectBySlug(params.slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-3">Project Not Found</h1>
          <p className="text-slate-400 mb-6">This featured project detail page is not available yet.</p>
          <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">{project.category}</span>
          <span className="text-sm text-slate-500">{project.role}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">{project.title}</h1>
        <p className="text-lg text-slate-300 max-w-4xl">{project.shortDescription}</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="relative h-72 sm:h-[420px] rounded-2xl overflow-hidden border border-slate-800">
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What I Led</h2>
            <p className="text-slate-300 leading-relaxed">
              I led the product and implementation direction for {project.title}, focusing on user-centered workflows,
              system quality, and delivery speed from concept to production.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
            <div className="grid gap-3">
              {project.highlights.map((item) => (
                <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs rounded-md border border-slate-700 text-slate-300 bg-slate-900">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 space-y-3">
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-900 hover:bg-slate-200 transition-colors text-sm font-medium"
              >
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors text-sm"
            >
              Source Code
              <Github className="w-4 h-4" />
            </a>
          </div>
        </aside>
      </div>
    </main>
  )
}
