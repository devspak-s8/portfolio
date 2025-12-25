"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide preloader after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 bg-white dark:bg-slate-950 z-50 flex flex-col items-center justify-center"
        >
          {/* Animated logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 dark:text-white tracking-wider">
              <span className="text-slate-600 dark:text-slate-400">A</span>patira
            </h1>
          </motion.div>

          {/* Bouncing dots loader */}
          <div className="flex gap-3 items-end h-12">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                animate={{
                  y: [-15, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
                className="w-3 h-3 bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-400 dark:to-slate-600 rounded-full"
              ></motion.div>
            ))}
          </div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-slate-600 dark:text-slate-400 mt-6 text-sm tracking-wide"
          >
            Loading Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
