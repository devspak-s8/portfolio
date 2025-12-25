"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiFigma,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const marquee = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      duration: 22,
      ease: "linear",
      repeat: Infinity,
    },
  },
}

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Python", icon: SiPython },
  { name: "Docker", icon: SiDocker },
  { name: "Figma", icon: SiFigma },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* PROFILE IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-600 to-slate-500 blur-xl opacity-30" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-slate-600/30 transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/pfp.png"
                  alt="Profile"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl font-light"
              >
                About{" "}
                <span className="text-slate-600 dark:text-slate-400">
                  Me
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed"
              >
                I’m a frontend-focused developer passionate about building
                clean, scalable, and high-performance digital experiences.
                I specialize in modern web technologies and animation-driven UI.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed"
              >
                I combine engineering discipline with strong design instincts
                to deliver interfaces that feel smooth, intuitive, and
                production-ready.
              </motion.p>
            </div>

            {/* SKILLS / TOOLS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-300">
                Tools & Technologies
              </h3>

              <div
                className="relative overflow-hidden
                [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
              >
                <motion.div
                  variants={marquee}
                  animate="animate"
                  className="flex gap-10 w-max"
                >
                  {[...skills, ...skills].map((skill, index) => (
                    <div
                      key={`${skill.name}-${index}`}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg
                      bg-slate-100 dark:bg-slate-800/60
                      border border-slate-200 dark:border-slate-700
                      text-slate-700 dark:text-slate-300
                      hover:text-slate-900 dark:hover:text-white
                      transition-colors flex-shrink-0"
                    >
                      <skill.icon className="h-5 w-5" />
                      <span className="text-sm font-medium whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
