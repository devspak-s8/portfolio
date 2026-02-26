"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Briefcase, ArrowRight } from "lucide-react"

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Web Developer", "Mobile Developer", "Backend Developer", "UI/UX Designer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:50px_50px]" />
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full items-center py-20 lg:py-32">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-slate-500 text-sm tracking-[0.3em] uppercase font-light">
                Creative Developer
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">Apatira Sulayman</h1>
            </div>

            <div className="flex items-center gap-3 overflow-hidden h-12">
              <span className="w-12 h-px bg-gradient-to-r from-slate-500 to-transparent" />
              <span className="text-lg sm:text-xl text-slate-300 font-light min-w-fit">{roles[currentRole]}</span>
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg font-light">
              Crafting exceptional digital experiences through innovative design, clean code, and pixel-perfect attention
              to detail. Specializing in full-stack development and UI/UX design.
            </p>

            <div className="grid grid-cols-3 gap-6 py-6 border-y border-slate-800">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400 mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-slate-400 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-400 mt-1">Client Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Hire Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border border-slate-600 text-slate-300 hover:bg-slate-800/50 px-8 py-3 rounded-full font-medium transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("projects")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative h-96 sm:h-[500px] lg:h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-600/10 via-transparent to-slate-900/50" />

              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <span className="text-sm text-slate-300 font-medium">Full-Stack Developer</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">Building Digital Experiences</h2>
                  <p className="text-slate-400 max-w-xs">Next.js • React • TypeScript • Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 border border-slate-600 rounded-full flex justify-center pt-2">
          <ArrowDown className="w-3 h-3 text-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
