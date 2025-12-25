"use client"

import { motion } from "framer-motion"

export default function Quote() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center p-8 md:p-16 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700 backdrop-blur-sm"
        >
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 leading-relaxed">
            "Design is not just what it looks like and feels like. Design is how it works."
          </blockquote>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Trigger with parent
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-lg md:text-xl text-slate-300 font-medium">Steve Jobs</p>
            <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
