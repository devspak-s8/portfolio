"use client"

import { motion, Variants } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      image: "/professional-woman.png",
      content:
        "Apatira is an exceptional developer who transformed our project vision into reality. His attention to detail and problem-solving skills are outstanding.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, Digital Solutions",
      image: "/professional-man.png",
      content:
        "Working with Apatira was a game-changer for our startup. He delivered high-quality code on time and was always responsive to our needs.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Design Lead, Creative Studio",
      image: "/professional-woman-design.jpg",
      content:
        "His ability to bridge the gap between design and development is remarkable. He brings creative solutions that exceed expectations every single time.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "CTO, Innovation Labs",
      image: "/professional-man-tech.jpg",
      content:
        "A true full-stack expert. Apatira's knowledge of both frontend and backend technologies made our project incredibly robust and scalable.",
      rating: 5,
    },
  ]

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-3 md:w-4 h-3 md:h-4 fill-slate-400 text-slate-400" />
        ))}
      </div>
    )
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.9,
      rotateX: 45
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as any
      }
    },
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-16 md:mb-20"
        >
          What Clients <span className="text-slate-400">Say</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          style={{ perspective: "2000px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="testimonial-card group relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:p-8 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-slate-600/10"
              style={{ willChange: "transform" }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-6 md:w-8 h-6 md:h-8 text-slate-600/20" />

              {/* Stars */}
              <div className="mb-4">{renderStars(testimonial.rating)}</div>

              {/* Testimonial text */}
              <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
                <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden border-2 border-slate-600">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover accent - Optimized */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-600 to-slate-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
