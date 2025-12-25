"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Eye, ExternalLink } from "lucide-react"
import { useModal } from "@/context/modal-context"

export default function UIUXDesigns() {
  const { openModal } = useModal()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next")

  const handlePreview = (design: any) => {
    openModal("info", {
      title: design.title,
      description: design.description,
      content: (
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800">
            <Image
              src={design.image || "/placeholder.svg"}
              alt={design.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg border border-slate-700">
            <span className="text-sm text-slate-400">Category: {design.category}</span>
            <button className="text-white hover:text-slate-300 flex items-center gap-1 text-sm font-medium">
              Source File <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      )
    })
  }

  const designs = [
    {
      id: 1,
      title: "Fitness Tracker App",
      category: "Mobile App",
      image: "/fitness-tracker-mobile-app-ui-dark-theme.jpg",
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "Web Design",
      image: "/saas-analytics-dashboard-dark-modern-ui.jpg",
    },
    {
      id: 3,
      title: "Social Commerce",
      category: "Web Design",
      image: "/ecommerce-social-shopping-app-ui-design.jpg",
    },
    {
      id: 4,
      title: "Travel Planning App",
      category: "Mobile App",
      image: "/travel-planning-mobile-app-ui-booking.jpg",
    },
    {
      id: 5,
      title: "Banking App Redesign",
      category: "Mobile App",
      image: "/fintech-banking-app-modern-dark-ui.jpg",
    },
    {
      id: 6,
      title: "EdTech Platform",
      category: "Web Design",
      image: "/education-learning-platform-ui-design.jpg",
    },
  ]

  const goToNext = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setFlipDirection("next")
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % designs.length)
      setTimeout(() => setIsFlipping(false), 600)
    }, 300)
  }

  const goToPrev = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setFlipDirection("prev")
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + designs.length) % designs.length)
      setTimeout(() => setIsFlipping(false), 600)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isFlipping || index === activeIndex) return
    setIsFlipping(true)
    setFlipDirection(index > activeIndex ? "next" : "prev")
    setTimeout(() => {
      setActiveIndex(index)
      setTimeout(() => setIsFlipping(false), 600)
    }, 300)
  }

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFlipping) goToNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [isFlipping])

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex
    const totalCards = designs.length

    // Normalize difference for circular carousel
    let normalizedDiff = diff
    if (diff > totalCards / 2) normalizedDiff = diff - totalCards
    if (diff < -totalCards / 2) normalizedDiff = diff + totalCards

    const isActive = index === activeIndex
    const isAdjacent = Math.abs(normalizedDiff) === 1
    const isSecondary = Math.abs(normalizedDiff) === 2

    if (isActive) {
      return {
        transform: `translateX(0) translateZ(0) rotateY(${isFlipping ? (flipDirection === "next" ? -15 : 15) : 0}deg) scale(1)`,
        opacity: 1,
        zIndex: 50,
        filter: "brightness(1)",
      }
    }

    if (isAdjacent) {
      const xOffset = normalizedDiff > 0 ? 55 : -55
      const rotation = normalizedDiff > 0 ? 25 : -25
      return {
        transform: `translateX(${xOffset}%) translateZ(-150px) rotateY(${rotation}deg) scale(0.85)`,
        opacity: 0.7,
        zIndex: 30,
        filter: "brightness(0.6)",
      }
    }

    if (isSecondary) {
      const xOffset = normalizedDiff > 0 ? 90 : -90
      const rotation = normalizedDiff > 0 ? 40 : -40
      return {
        transform: `translateX(${xOffset}%) translateZ(-300px) rotateY(${rotation}deg) scale(0.7)`,
        opacity: 0.4,
        zIndex: 10,
        filter: "brightness(0.4)",
      }
    }

    return {
      transform: `translateX(${normalizedDiff > 0 ? 120 : -120}%) translateZ(-400px) rotateY(${normalizedDiff > 0 ? 50 : -50}deg) scale(0.5)`,
      opacity: 0,
      zIndex: 0,
      filter: "brightness(0.3)",
    }
  }

  return (
    <section id="uiux-designs" className="py-20 md:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-6"
        >
          UI/UX <span className="text-slate-400">Designs</span>
        </motion.h2>

        <p className="text-slate-500 text-center text-sm md:text-base mb-12 md:mb-20 max-w-xl mx-auto">
          A showcase of my design work across mobile and web platforms
        </p>

        {/* 3D Carousel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "backOut" }}
          className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-8 md:left-16 z-50 p-2 sm:p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous design"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-8 md:right-16 z-50 p-2 sm:p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Next design"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {designs.map((design, index) => {
              const style = getCardStyle(index)
              return (
                <div
                  key={design.id}
                  onClick={() => goToSlide(index)}
                  className="absolute cursor-pointer transition-all duration-700 ease-out"
                  style={{
                    ...style,
                    transformStyle: "preserve-3d",
                    width: "clamp(220px, 45vw, 340px)",
                    height: "clamp(300px, 60vw, 480px)",
                  }}
                >
                  {/* Card Front */}
                  <div
                    className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900 group"
                    style={{
                      backfaceVisibility: "hidden",
                      boxShadow:
                        index === activeIndex
                          ? "0 25px 80px -12px rgba(100, 116, 139, 0.4), 0 0 40px rgba(100, 116, 139, 0.1)"
                          : "0 10px 40px -10px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {/* Image */}
                    <div className="relative w-full h-[75%] overflow-hidden">
                      <Image
                        src={design.image || "/placeholder.svg"}
                        alt={design.title}
                        fill
                        className="object-cover"
                      />
                      {/* Detail button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handlePreview(design)
                          }}
                          className="px-4 py-2 bg-white text-slate-900 rounded-lg font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                        >
                          <Eye className="w-4 h-4" /> View Details
                        </button>
                      </div>
                    </div>

                    {/* Title area */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl text-center">
                        {design.title}
                      </h3>
                    </div>

                    {/* Shine effect for active card */}
                    {index === activeIndex && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
                        }}
                      />
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Reflection effect */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20 blur-xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(148, 163, 184, 0.3) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {designs.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-slate-300 w-8" : "bg-slate-700 hover:bg-slate-600"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Current design info */}
        <div className="text-center mt-6">
          <span className="text-slate-500 text-sm">
            {activeIndex + 1} / {designs.length}
          </span>
        </div>
      </div>
    </section>
  )
}
