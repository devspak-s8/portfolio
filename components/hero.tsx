"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Briefcase, FolderOpen } from "lucide-react"

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Web Developer", "Mobile Developer", "Backend Developer", "UI/UX Designer"]

  // Smooth role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Premium Animated Background - Replacement for heavy iframe */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-full h-full bg-slate-400/20 dark:bg-slate-800/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-slate-500/20 dark:bg-slate-700/20 rounded-full blur-[120px]"
        />

        {/* Animated grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50/80 dark:via-slate-950/20 dark:to-slate-950/90 z-1" />

      {/* Decorative animated lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-slate-400/20 to-transparent origin-right"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-1/3 left-0 w-1/5 h-px bg-gradient-to-r from-transparent via-slate-500/25 to-transparent origin-left"
        />
      </div>

      {/* Main Content */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
      >
        {/* Greeting */}
        <motion.span
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="inline-block text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase mb-4 font-light"
        >
          Welcome to my portfolio
        </motion.span>

        {/* Name - Large Display */}
        <motion.h1
          initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-400">
            Apatira Sulayman
          </span>
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-6 overflow-hidden"
          style={{ perspective: "500px" }}
        >
          <div className="flex items-center gap-3">
            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-slate-500" />
            <div className="relative h-12 sm:h-14 md:h-16 w-64 sm:w-80 md:w-96">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ duration: 0.5 }}
                  className="role-text absolute inset-0 text-xl sm:text-2xl md:text-3xl font-light text-slate-700 dark:text-slate-300 flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-slate-500" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          className="text-slate-600 dark:text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Crafting exceptional digital experiences through clean code, innovative design, and attention to detail.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.7, ease: "backOut" }}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="group relative w-full sm:w-auto bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Hire Me
              </span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.9, ease: "backOut" }}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto bg-transparent border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:scale-105"
              onClick={() => {
                const element = document.getElementById("projects")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <FolderOpen className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 border border-slate-600 rounded-full flex justify-center pt-2">
          <ArrowDown className="w-3 h-3 text-slate-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
