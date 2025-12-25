"use client"

import { motion } from "framer-motion"
import {
    FileCode,
    Database,
    Layout,
    Codepen,
    Github,
    Layers,
    Smartphone,
    Cpu,
    Globe,
    Cloud,
    Container,
    Terminal,
    Brush,
    Zap
} from "lucide-react"

const techItems = [
    { name: "React", icon: Layout, color: "text-sky-400" },
    { name: "Next.js", icon: Globe, color: "text-white" },
    { name: "TypeScript", icon: FileCode, color: "text-blue-500" },
    { name: "Node.js", icon: Terminal, color: "text-emerald-500" },
    { name: "Tailwind CSS", icon: Brush, color: "text-cyan-400" },
    { name: "Framer Motion", icon: Zap, color: "text-purple-500" },
    { name: "PostgreSQL", icon: Database, color: "text-indigo-400" },
    { name: "MongoDB", icon: Database, color: "text-green-500" },
    { name: "Docker", icon: Container, color: "text-blue-400" },
    { name: "AWS", icon: Cloud, color: "text-orange-400" },
    { name: "Git", icon: Github, color: "text-slate-200" },
    { name: "Figma", icon: Layers, color: "text-pink-400" },
    { name: "React Native", icon: Smartphone, color: "text-sky-300" },
    { name: "Python", icon: Codepen, color: "text-yellow-500" },
    { name: "Go", icon: Cpu, color: "text-cyan-500" },
]

export default function TechStack() {
    return (
        <section className="py-20 bg-slate-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800">
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-px bg-slate-500"></div>
                    <span className="text-slate-500 text-sm tracking-widest uppercase font-mono">Expertise</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extralight text-white">
                    Technologies & <span className="text-slate-500 text-3xl">Tools</span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden">
                {/* First Marquee Row */}
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: [0, -100 * techItems.length] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...techItems, ...techItems].map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center gap-4 px-8 py-4 mx-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300"
                        >
                            <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                            <span className="text-slate-300 font-light text-lg tracking-wider">{item.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="relative flex overflow-hidden mt-8">
                {/* Second Marquee Row (Reverse) */}
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: [-100 * techItems.length, 0] }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...techItems, ...techItems].reverse().map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center gap-4 px-8 py-4 mx-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300"
                        >
                            <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                            <span className="text-slate-300 font-light text-lg tracking-wider">{item.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
