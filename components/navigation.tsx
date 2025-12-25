"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ["home", "about", "projects", "contact"]
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.5 + i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  const logoVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 2.2, ease: "easeOut" },
    },
  }

  const ctaVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 2.9, ease: "backOut" }
    },
  }

  // Mobile Menu Variants
  const menuVariants = {
    closed: {
      clipPath: "circle(0% at top right)",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    open: {
      clipPath: "circle(150% at top right)",
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  }

  const mobileLinkVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50" : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="relative group cursor-pointer"
              onClick={() => scrollToSection("home")}
              initial="hidden"
              animate="visible"
              variants={logoVariant}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center border border-slate-300 dark:border-slate-700 group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-all duration-300 overflow-hidden">
                  <span className="text-lg font-bold text-slate-900 dark:text-white relative z-10">A</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <p className="text-slate-900 dark:text-white font-medium tracking-wide">Apatira</p>
                  <p className="text-slate-500 text-xs tracking-wider">Developer & Designer</p>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 p-1.5 rounded-full bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={navVariants}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id ? "text-slate-900 bg-white shadow-sm dark:text-white dark:bg-slate-800" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                      }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              <motion.div
                className="ml-4"
                initial="hidden"
                animate="visible"
                variants={ctaVariant} // Using same timing as CTA button approximately
              >
                <ModeToggle />
              </motion.div>

              <motion.button
                onClick={() => scrollToSection("contact")}
                initial="hidden"
                animate="visible"
                variants={ctaVariant}
                className="ml-4 group flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Mobile Menu Button - Flex container to include toggle */}
            <div className="md:hidden flex items-center gap-4">
              <ModeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-50 md:hidden"
          >
            <div className="absolute top-6 right-4 flex items-center gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col justify-center h-full px-8">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    custom={index}
                    variants={mobileLinkVariants}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center justify-between w-full py-4 border-b border-slate-800/50 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-slate-600 text-sm font-mono">0{index + 1}</span>
                      <span
                        className={`text-3xl font-light transition-colors duration-300 ${activeSection === item.id ? "text-white" : "text-slate-400 group-hover:text-white"
                          }`}
                      >
                        {item.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </motion.button>
                ))}
              </div>

              <motion.div
                variants={mobileLinkVariants}
                custom={navItems.length}
                className="mt-12 pt-8 border-t border-slate-800/50"
              >
                <p className="text-slate-500 text-sm mb-4">Get in touch</p>
                <a href="mailto:hello@apatira.dev" className="text-white text-lg hover:text-slate-300 transition-colors">
                  hello@apatira.dev
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
