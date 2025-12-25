"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Check, Zap } from "lucide-react"
import Link from "next/link"

export default function ECommerceProject() {
  const features = [
    "Responsive design that works on all devices",
    "Integrated payment processing with Stripe",
    "Real-time inventory management",
    "Admin dashboard with analytics",
    "Search and filtering capabilities",
    "User authentication and profiles",
  ]

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Stripe API", icon: "💳" },
    { name: "Tailwind CSS", icon: "🎨" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
          <Link href="/#projects">
            <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800 text-xs md:text-sm">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Content */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-500">
                  E-Commerce Platform
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-slate-400">
                  A full-featured, scalable e-commerce solution built with modern technologies and best practices.
                </p>
              </div>

              <div>
                <h3 className="text-xs md:text-sm font-semibold text-slate-300 mb-3 md:mb-4 uppercase">Project Type</h3>
                <div className="flex gap-2">
                  <span className="px-3 md:px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg border border-slate-600/30 font-medium text-xs md:text-sm">
                    Full Stack
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 md:px-8 py-3 md:py-6 text-xs md:text-base font-medium">
                  <ExternalLink className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                  View Live
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 hover:border-slate-500 hover:bg-slate-700/10 px-6 md:px-8 py-3 md:py-6 text-xs md:text-base bg-transparent"
                >
                  <Github className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                  View Code
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden">
              <Image src="/images/project-2.png" alt="E-Commerce Platform" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-400">Project Overview</h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                This e-commerce platform represents a complete solution for online retail businesses. Built with
                scalability and user experience in mind, it provides a seamless shopping experience for customers and
                powerful tools for business management.
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                The platform features a responsive design that works perfectly on desktop, tablet, and mobile devices,
                with integrated payment processing, real-time inventory management, and comprehensive analytics.
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-400">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 items-start p-3 md:p-4 bg-slate-900/50 rounded-lg border border-slate-800"
                  >
                    <Check className="w-4 md:w-5 h-4 md:h-5 text-slate-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-400">Development Process</h2>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    title: "Discovery & Planning",
                    description:
                      "Started with comprehensive requirements gathering and created detailed wireframes and user flow diagrams.",
                  },
                  {
                    title: "Design & Prototyping",
                    description:
                      "Created high-fidelity designs focusing on user experience and converted them into interactive prototypes.",
                  },
                  {
                    title: "Development & Testing",
                    description:
                      "Built the full stack application with rigorous testing at each phase to ensure quality and performance.",
                  },
                  {
                    title: "Deployment & Optimization",
                    description:
                      "Deployed to production with continuous optimization and monitoring for performance improvements.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-4 md:gap-6 p-4 md:p-6 bg-slate-900/30 rounded-xl border border-slate-800"
                  >
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center font-bold text-sm md:text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-sm md:text-base">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 md:space-y-8">
            {/* Technologies */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-slate-400">Technologies</h3>
              <div className="space-y-2 md:space-y-3">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <span className="text-xl md:text-2xl">{tech.icon}</span>
                    <span className="font-medium text-white text-sm md:text-base">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-slate-700/10 to-slate-600/10 border border-slate-700/30 rounded-xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Project Stats</h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  { label: "Development Time", value: "3 months" },
                  { label: "Team Members", value: "4 people" },
                  { label: "Code Quality", value: "A+" },
                  { label: "Performance", value: "98/100" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex justify-between items-center border-b border-slate-700 pb-2 md:pb-3"
                  >
                    <span className="text-slate-400 text-xs md:text-sm">{stat.label}</span>
                    <span className="font-semibold text-slate-300 text-xs md:text-sm">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Interested in Similar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-500">Project?</span>
          </h2>
          <p className="text-base md:text-xl text-slate-400 mb-6 md:mb-8">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <Button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 md:px-8 py-3 md:py-6 text-xs md:text-base font-medium">
            <Zap className="w-4 md:w-5 h-4 md:h-5 mr-2" />
            Start a Project
          </Button>
        </div>
      </section>
    </div>
  )
}
