"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useAnimation, PanInfo, Variants } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Github, ArrowRight, ArrowLeft, ExternalLink } from "lucide-react"
import { useModal } from "@/context/modal-context"
import { useRouter } from "next/navigation"

export default function Projects() {
  const { openModal } = useModal()
  const router = useRouter()
  const [activeProject, setActiveProject] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const controls = useAnimation()
  const trackRef = useRef<HTMLDivElement>(null)

  const handleLiveDemo = (e: React.MouseEvent, live: string, title: string) => {
    e.preventDefault()
    e.stopPropagation()

    if (live === "#") {
      openModal("info", {
        title: "Coming Soon",
        description: `The live demo for ${title} is currently being prepared. Please check back later or view the source code on GitHub.`,
      })
    } else {
      window.open(live, "_blank", "noopener,noreferrer")
    }
  }

  const featuredProjects = [
    {
      id: 0,
      title: "S8Houses",
      subtitle: "Full Stack",
      description:
        "Modern real-estate platform for discovering and managing property listings with a responsive user experience.",
      image: "/project-management-team.png",
      tech: ["TypeScript", "Next.js", "Tailwind CSS", "Full Stack"],
      year: "2026",
      slug: "s8houses",
      link: "https://github.com/devspak-s8/s8houses",
      live: "https://s8houses.vercel.app",
    },
    {
      id: 1,
      title: "DevPulse CLI Docs",
      subtitle: "Documentation",
      description:
        "Interactive documentation site for the DevPulse CLI with clear onboarding, commands, and workflows.",
      image: "/krea-ai-studio.jpg",
      tech: ["TypeScript", "Next.js", "Docs", "Developer Tools"],
      year: "2026",
      slug: "devpulse-cli-docs",
      link: "https://github.com/devspak-s8/devpulse-cli-docs",
      live: "https://devpulse-cli.vercel.app",
    },
    {
      id: 2,
      title: "Portfolio",
      subtitle: "Personal Brand",
      description: "Your personal portfolio showcasing projects, branding work, experience, and contact points.",
      image: "/lexi-ai-dashboard.jpg",
      tech: ["TypeScript", "Next.js", "Framer Motion", "Tailwind CSS"],
      year: "2026",
      slug: "portfolio",
      link: "https://github.com/devspak-s8/portfolio",
      live: "https://apatira.s8globals.org",
    },
    {
      id: 3,
      title: "Majlisunnor Academy Website",
      subtitle: "Full Stack",
      description:
        "An academy platform website with structured content, modern UI patterns, and scalable page architecture.",
      image: "/s8builder-platform.jpg",
      tech: ["TypeScript", "Next.js", "Tailwind CSS", "Web Platform"],
      year: "2025",
      slug: "majlisunnor-academy-website",
      link: "https://github.com/devspak-s8/majlisunnor-academy-website",
      live: "https://majlisunnor-academy-website.vercel.app",
    },
    {
      id: 4,
      title: "DevPulse CLI",
      subtitle: "Backend/CLI",
      description: "Command-line productivity toolkit focused on developer workflow automation and project acceleration.",
      image: "/project-management-team.png",
      tech: ["Python", "CLI", "Automation", "Developer Tools"],
      year: "2026",
      slug: "devpulse-cli",
      link: "https://github.com/devspak-s8/devpulse-cli",
      live: "#",
    },
  ]

  const projectList = [
    {
      id: 1,
      title: "S8Houses",
      category: "Full Stack",
      year: "2026",
      tech: ["TypeScript", "Next.js"],
      link: "https://github.com/devspak-s8/s8houses",
      live: "https://s8houses.vercel.app",
    },
    {
      id: 2,
      title: "S8Houses Backend",
      category: "Backend",
      year: "2026",
      tech: ["TypeScript", "API", "Backend"],
      link: "https://github.com/devspak-s8/s8houses-backend",
      live: "#",
    },
    {
      id: 3,
      title: "DevPulse CLI Docs",
      category: "Documentation",
      year: "2026",
      tech: ["TypeScript", "Next.js"],
      link: "https://github.com/devspak-s8/devpulse-cli-docs",
      live: "https://devpulse-cli.vercel.app",
    },
    {
      id: 4,
      title: "DevPulse CLI",
      category: "Developer Tool",
      year: "2026",
      tech: ["Python", "CLI"],
      link: "https://github.com/devspak-s8/devpulse-cli",
      live: "#",
    },
    {
      id: 5,
      title: "Portfolio",
      category: "Personal Brand",
      year: "2026",
      tech: ["TypeScript", "Next.js"],
      link: "https://github.com/devspak-s8/portfolio",
      live: "https://apatira.s8globals.org",
    },
    {
      id: 6,
      title: "Majlisunnor Academy Website",
      category: "Full Stack",
      year: "2025",
      tech: ["TypeScript", "Next.js"],
      link: "https://github.com/devspak-s8/majlisunnor-academy-website",
      live: "https://majlisunnor-academy-website.vercel.app",
    },
  ]

  const getCardWidth = useCallback(() => {
    if (typeof window === "undefined") return 400
    if (window.innerWidth < 640) return window.innerWidth - 48
    if (window.innerWidth < 1024) return 500
    return 600
  }, [])

  const getGap = useCallback(() => {
    if (typeof window === "undefined") return 24
    if (window.innerWidth < 640) return 16
    return 24
  }, [])

  const goToProject = useCallback(
    (index: number) => {
      setActiveProject(index)
      const cardWidth = getCardWidth()
      const gap = getGap()
      const newTranslate = -index * (cardWidth + gap)
      controls.start({ x: newTranslate, transition: { type: "spring", stiffness: 300, damping: 30 } })
    },
    [getCardWidth, getGap, controls],
  )

  const nextProject = useCallback(() => {
    const newIndex = (activeProject + 1) % featuredProjects.length
    goToProject(newIndex)
  }, [activeProject, featuredProjects.length, goToProject])

  const prevProject = useCallback(() => {
    const newIndex = (activeProject - 1 + featuredProjects.length) % featuredProjects.length
    goToProject(newIndex)
  }, [activeProject, featuredProjects.length, goToProject])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const cardWidth = getCardWidth()
    const gap = getGap()
    const threshold = (cardWidth + gap) / 4

    let newIndex = activeProject

    if (info.offset.x < -threshold && activeProject < featuredProjects.length - 1) {
      newIndex = activeProject + 1
    } else if (info.offset.x > threshold && activeProject > 0) {
      newIndex = activeProject - 1
    }

    goToProject(newIndex)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      goToProject(activeProject)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeProject, goToProject])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => {
        const next = (prev + 1) % featuredProjects.length
        goToProject(next)
        return next
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [featuredProjects.length, goToProject])

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
  }

  const marquee: Variants = {
    animate: {
      x: [0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 30,
          ease: "linear" as const,
        },
      },
    },
  }

  return (
    <section id="projects" className="py-24 md:py-40 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-slate-800/30 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-slate-500 to-transparent"></div>
                <span className="text-slate-500 text-sm tracking-[0.3em] uppercase font-light">Selected Work</span>
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-slate-900 dark:text-white tracking-tight">
                Projects
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-base md:text-lg font-light leading-relaxed">
              A curated collection of projects showcasing expertise in development, design, and creative
              problem-solving.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
          className="mb-24 md:mb-32"
        >
          {/* Carousel Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-slate-600 dark:text-slate-400 text-sm font-light">Featured Projects</span>
              <div className="h-px w-16 bg-slate-800"></div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevProject}
                aria-label="Previous featured project"
                title="Previous featured project"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <div className="text-slate-500 font-mono text-sm px-2">
                <span className="text-slate-900 dark:text-white">{String(activeProject + 1).padStart(2, "0")}</span>
                <span className="mx-1">/</span>
                <span>{String(featuredProjects.length).padStart(2, "0")}</span>
              </div>
              <button
                onClick={nextProject}
                aria-label="Next featured project"
                title="Next featured project"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* Swipeable Carousel Track */}
          <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div
              ref={trackRef}
              drag="x"
              dragConstraints={{ left: -10000, right: 10000 }} // We calculate limits conceptually but allow drag for feel
              onDragEnd={handleDragEnd}
              animate={controls}
              className="flex gap-4 md:gap-6 select-none"
            >
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`carousel-card relative flex-shrink-0 w-[calc(100vw-48px)] sm:w-[500px] lg:w-[600px] h-[450px] sm:h-[500px] lg:h-[550px] rounded-2xl lg:rounded-3xl overflow-hidden group transition-all duration-500 transform ${index === activeProject ? "opacity-100 scale-100" : "opacity-60 scale-[0.97]"}`}
                  onClick={() => {
                    if (index === activeProject) {
                      router.push(`/projects/${project.slug}`)
                    } else {
                      goToProject(index)
                    }
                  }}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
                  </div>

                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        router.push(`/projects/${project.slug}`)
                      }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 text-slate-900 text-xs font-medium"
                      aria-label={`View more details for ${project.title}`}
                    >
                      View More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Card Number */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-white/10 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 transform transition-transform duration-500">
                    {/* Meta Tags */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white/90 border border-white/10">
                        {project.subtitle}
                      </span>
                      <span className="text-slate-400 text-xs font-mono">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300/80 text-sm sm:text-base mb-5 line-clamp-2 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs bg-slate-800/80 text-slate-400 rounded-md border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions - Only visible on active card */}
                    <div
                      className={`flex gap-3 transition-all duration-500 ${index === activeProject ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          router.push(`/projects/${project.slug}`)
                        }}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        View More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>

                      <button
                        onClick={(e) => handleLiveDemo(e, project.live, project.title)}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-full font-medium text-sm hover:bg-slate-100 transition-all duration-300"
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Active Card Indicator */}
                  <div
                    className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-3 h-3 rounded-full transition-all duration-500 ${index === activeProject ? "bg-white scale-100" : "bg-white/30 scale-75"
                      }`}
                  ></div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden ${index === activeProject ? "w-10 bg-slate-700" : "w-2 bg-slate-800 hover:bg-slate-700"}`}
              >
                {index === activeProject && (
                  <motion.div
                    layoutId="progressinfo"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    style={{ originX: 0 }}
                    className="absolute inset-0 bg-white rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Swipe Hint */}
          <div className="flex justify-center mt-6">
            <p className="text-slate-600 text-xs tracking-wider uppercase flex items-center gap-2">
              <ArrowLeft className="w-3 h-3" />
              Swipe to explore
              <ArrowRight className="w-3 h-3" />
            </p>
          </div>
        </motion.div>

        {/* Project List */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-slate-700 dark:bg-slate-700"></div>
            <span className="text-slate-500 text-sm tracking-[0.2em] uppercase">All Projects</span>
          </div>

          <div
            className="relative overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
          >
            <motion.div
              variants={marquee}
              animate="animate"
              className="flex gap-6 w-max py-8"
            >
              {[...projectList, ...projectList].map((project, index) => (
                <a
                  key={`${project.id}-${index}`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 px-6 py-4 rounded-xl
                  bg-slate-100 dark:bg-slate-800/60
                  border border-slate-200 dark:border-slate-700
                  hover:border-slate-300 dark:hover:border-slate-600
                  hover:bg-slate-200 dark:hover:bg-slate-800
                  transition-all duration-300 flex-shrink-0 min-w-[280px] max-w-[280px]"
                  onMouseEnter={() => setHoveredItem(project.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors mb-1 flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h4>
                      <span className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-slate-600 dark:text-slate-500 font-mono text-xs shrink-0">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.live && project.live !== "#" && (
                    <span className="text-xs text-slate-500 dark:text-slate-400 truncate">Live: {project.live}</span>
                  )}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/devspak-s8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white dark:bg-slate-800 dark:text-white border border-slate-900 dark:border-slate-800 rounded-full hover:bg-slate-800 dark:hover:bg-slate-700 hover:border-slate-800 dark:hover:border-slate-700 transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            <span className="font-light">View All Projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Floating cursor image on hover - GPU Accelerated */}
      {hoveredItem && (
        <motion.div
          className="fixed w-64 h-40 rounded-xl overflow-hidden pointer-events-none z-50 hidden lg:block border border-slate-700/50 shadow-2xl"
          style={{
            x: cursorPos.x + 20,
            y: cursorPos.y - 80,
            willChange: "transform"
          }}
        >
          <Image src={`/project-management-team.png`} alt="Preview" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
        </motion.div>
      )}
    </section>
  )
}
