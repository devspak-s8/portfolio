"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, Building } from "lucide-react"

export default function Experience() {
const experiences = [
  {
    id: 1,
    role: "Lead Frontend Developer",
    company: "Diagnoxix",
    duration: "June 2025 - Present",
    description:
      "Leading the frontend team, building scalable and high-performance user interfaces, integrating modern frameworks, and ensuring code quality and maintainability.",
    skills: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design", "Framer Motion", "Component Systems"],
    icon: Briefcase,
  },
  {
    id: 2,
    role: "Developer at Provenly",
    company: "Provenly",
    duration: "September 2025 - Present", // replace with actual dates
    description:
      "Contributed to platform development, implementing features across the stack, and ensuring a smooth, performant user experience.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "API Integration"],
    icon: Building,
  },
  // Add previous experiences if needed
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Ventures",
    duration: "2020 - 2021",
    description: "Developed web applications and maintained client websites with HTML, CSS, and JavaScript.",
    skills: ["HTML/CSS", "JavaScript", "jQuery", "Bootstrap", "Git"],
    icon: Calendar,
  },
];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const cardVariant = {
    hidden: { opacity: 0, x: -50, rotateY: 20 },
    visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-16 md:mb-20"
        >
          My <span className="text-slate-600 dark:text-slate-400">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-400 via-slate-300 to-transparent dark:from-slate-600 dark:via-slate-500 dark:to-transparent timeline-line transform md:-translate-x-1/2"
          ></motion.div>

          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariant}
                  transition={{ delay: index * 0.2 }}
                  className={`exp-card flex ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content side */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} px-4 md:px-0`}>
                    <div className="bg-slate-100 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-xl p-4 md:p-6 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/10 dark:hover:shadow-slate-600/10">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-0 md:left-1/2 top-6 w-6 h-6 bg-gradient-to-r from-slate-400 to-slate-500 dark:from-slate-600 dark:to-slate-700 rounded-full border-4 border-white dark:border-slate-950 transform md:-translate-x-1/2 -translate-x-1/2 md:translate-x-0`}
                      ></div>

                      <div className="flex items-start gap-3 mb-3 md:mb-4">
                        <Icon className="w-5 md:w-6 h-5 md:h-6 text-slate-600 dark:text-slate-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
                          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-3 md:mb-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </p>

                      <p className="text-slate-700 dark:text-slate-300 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 md:px-3 py-1 text-xs bg-slate-200 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 rounded-full border border-slate-300 dark:border-slate-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty side for layout */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
