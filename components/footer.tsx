"use client"

import { motion } from "framer-motion"
import { useModal } from "@/context/modal-context"

export default function Footer() {
  const { openModal } = useModal()

  const handleScheduleCall = () => {
    openModal("confirm", {
      title: "Schedule a Discovery Call?",
      description: "You're about to be redirected to my Calendly to pick a suitable time for our project discussion. I look forward to meeting you!",
      confirmLabel: "Open Calendly",
      cancelLabel: "Maybe Later",
      onConfirm: () => {
        window.open("https://calendly.com/", "_blank")
      }
    })
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 1 }}
      className="relative py-12 md:py-16 px-4 sm:px-6 border-t border-slate-800"
    >
      {/* Floating particles background - Changed from purple/pink to grey */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-slate-500 rounded-full opacity-60 animate-pulse"></div>
        <div
          className="absolute top-20 right-20 w-1 h-1 bg-slate-400 rounded-full opacity-80 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-slate-500 rounded-full opacity-70 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 right-1/3 w-1 h-1 bg-slate-400 rounded-full opacity-60 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* About Column */}
          <div className="col-span-2 sm:col-span-4 md:col-span-1 space-y-3 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-light text-white tracking-wide">
              <span className="text-slate-400">A</span>patira
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Passionate web developer creating immersive digital experiences with modern technologies. Let's build
              something amazing together.
            </p>
            <button
              onClick={handleScheduleCall}
              className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm rounded-lg border border-slate-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Call
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-medium text-white">Quick Links</h4>
            <div className="flex flex-col space-y-1 md:space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase())
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="text-slate-400 hover:text-slate-200 transition-colors duration-300 text-xs md:text-sm text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-medium text-white">Services</h4>
            <div className="flex flex-col space-y-1 md:space-y-2">
              {["Web Development", "UI/UX Design", "Frontend Development", "Animation & Motion"].map((service) => (
                <span key={service} className="text-slate-400 text-xs md:text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Column for Mobile */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-medium text-white">Follow</h4>
            <div className="flex flex-col space-y-1 md:space-y-2">
              {["GitHub", "LinkedIn", "Twitter", "Email"].map((social) => (
                <span key={social} className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer text-xs md:text-sm">
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 md:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
          <p className="text-slate-400 text-xs md:text-sm">
            Made with <span className="text-red-400">❤️</span> by{" "}
            <span className="text-slate-400">Apatira Sulayman</span>
          </p>
          <p className="text-slate-500 text-xs md:text-sm">© 2025 Apatira Sulayman. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
