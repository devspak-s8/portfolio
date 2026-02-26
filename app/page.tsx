"use client"

import { motion } from "framer-motion"

import Hero from "../components/hero"
import Preloader from "../components/preloader"
import Navigation from "../components/navigation"
import LiquidRain from "../components/liquid-rain"
import TechStack from "../components/tech-stack"
import About from "../components/about"
import Experience from "../components/experience"

import LogosDesigns from "../components/logos-designs"
import Projects from "../components/projects"
import UIUXDesigns from "../components/ui-ux-designs"
import Quote from "../components/quote"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300 selection:bg-slate-500/30">
      <Preloader />
      <Navigation />

      <LiquidRain />

      {/* Floating background orbs - GPU A`ccelerated */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-slate-400/20 dark:bg-slate-600/20 rounded-full blur-xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-slate-300/20 dark:bg-slate-500/20 rounded-full blur-xl"
        ></motion.div>
      </div>

      {/* Grid background pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:50px_50px]"></div>
      </div>

      <main className="relative z-10">
        <Hero />
        <TechStack />
        <LogosDesigns />
        <Projects />
        <About />
        <Experience />
        <UIUXDesigns />
        <Quote />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

