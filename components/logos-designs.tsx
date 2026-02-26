'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { brandingData } from '../lib/branding-data'

export default function LogosDesigns() {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const designs = brandingData

  const goToNext = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % designs.length)
      setTimeout(() => setIsFlipping(false), 400)
    }, 200)
  }

  const goToPrev = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + designs.length) % designs.length)
      setTimeout(() => setIsFlipping(false), 400)
    }, 200)
  }

  const goToSlide = (index: number) => {
    if (isFlipping || index === activeIndex) return
    setIsFlipping(true)
    setTimeout(() => {
      setActiveIndex(index)
      setTimeout(() => setIsFlipping(false), 400)
    }, 200)
  }

  const navigateToBranding = (slug: string) => {
    router.push(`/branding/${slug}`)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFlipping) goToNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [isFlipping, activeIndex])

  const getPositionClass = (index: number) => {
    const total = designs.length
    let diff = index - activeIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    if (diff === 0) {
      return 'z-50 opacity-100 brightness-100 [transform:translateX(0)_translateZ(0)_rotateY(0deg)_scale(1)]'
    }
    if (diff === 1) {
      return 'z-30 opacity-70 brightness-75 [transform:translateX(55%)_translateZ(-150px)_rotateY(25deg)_scale(0.85)]'
    }
    if (diff === -1) {
      return 'z-30 opacity-70 brightness-75 [transform:translateX(-55%)_translateZ(-150px)_rotateY(-25deg)_scale(0.85)]'
    }
    if (diff === 2) {
      return 'z-10 opacity-40 brightness-50 [transform:translateX(90%)_translateZ(-300px)_rotateY(40deg)_scale(0.7)]'
    }
    if (diff === -2) {
      return 'z-10 opacity-40 brightness-50 [transform:translateX(-90%)_translateZ(-300px)_rotateY(-40deg)_scale(0.7)]'
    }

    return 'z-0 opacity-0 brightness-[0.35] [transform:translateX(120%)_translateZ(-400px)_rotateY(50deg)_scale(0.5)]'
  }

  return (
    <section id="logos-designs" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-slate-800/20 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-6">
          Logos & <span className="text-slate-400">Branding</span>
        </h2>

        <p className="text-slate-500 text-center text-sm md:text-base mb-12 md:mb-20 max-w-xl mx-auto">
          A showcase of brand identities and logo designs for tech projects and startups
        </p>

        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center [perspective:1200px]">
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

          <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
            {designs.map((design, index) => {
              const positionClass = getPositionClass(index)

              return (
                <div
                  key={design.id}
                  onClick={() => {
                    if (index === activeIndex) {
                      navigateToBranding(design.slug)
                    } else {
                      goToSlide(index)
                    }
                  }}
                  className={`absolute cursor-pointer transition-all duration-700 ease-out hover:brightness-110 [transform-style:preserve-3d] w-[clamp(220px,45vw,340px)] h-[clamp(300px,60vw,480px)] ${positionClass}`}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900 shadow-2xl [backface-visibility:hidden]">
                    <div className="relative w-full h-[75%] overflow-hidden">
                      <Image
                        src={design.image || '/placeholder.svg'}
                        alt={design.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 640px) 220px, (max-width: 1024px) 45vw, 340px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-slate-900/70 backdrop-blur-sm text-slate-300 rounded-full border border-slate-700/50">
                          {design.category}
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl text-center">{design.title}</h3>
                    </div>

                    {index === activeIndex && (
                      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.03)_55%,transparent_60%)]" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20 blur-xl pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.3)_0%,transparent_70%)]" />
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {designs.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-slate-300 w-8' : 'bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <span className="text-slate-500 text-sm">
            {activeIndex + 1} / {designs.length}
          </span>
          <div className="mt-4">
            <button
              onClick={() => navigateToBranding(designs[activeIndex].slug)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-900 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
