"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { useModal } from "@/context/modal-context"
import { handleError } from "@/lib/error-handler"

import { Variants } from "framer-motion"

export default function Contact() {
  const { openModal } = useModal()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 2000)
      })

      openModal("success", {
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you as soon as possible.",
      })
    } catch (error) {
      handleError(error, openModal)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: "easeOut" as any
      }
    }
  }

  const childVariant: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
  }

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      }
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 md:mb-6">
            Get In <span className="text-slate-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Form */}
          <div className="space-y-4 md:space-y-6 flex flex-col items-center lg:items-start">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 w-full max-w-sm lg:max-w-none"
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={childVariant} className="form-input">
                <Input
                  placeholder="Your Name"
                  className="bg-slate-900/50 border-slate-700 focus:border-slate-600 focus:ring-slate-600/20 text-white placeholder:text-slate-400 h-12"
                />
              </motion.div>

              <motion.div variants={childVariant} className="form-input">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-900/50 border-slate-700 focus:border-slate-600 focus:ring-slate-600/20 text-white placeholder:text-slate-400 h-12"
                />
              </motion.div>

              <motion.div variants={childVariant} className="form-input">
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-slate-900/50 border-slate-700 focus:border-slate-600 focus:ring-slate-600/20 text-white placeholder:text-slate-400 resize-none"
                />
              </motion.div>

              <motion.div variants={childVariant} className="form-input">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white h-12 rounded-xl font-medium shadow-lg hover:shadow-slate-600/25 transition-all duration-300 disabled:opacity-50"
                >
                  <motion.div
                    className="flex justify-center w-full"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </span>
                    )}
                  </motion.div>
                </Button>
              </motion.div>
            </motion.form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start">
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 w-full max-w-sm lg:max-w-none">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-400 text-sm md:text-base">
                  <Mail className="w-5 h-5 mr-3 text-slate-400" />
                  <span>hello@apatira.dev</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-4 md:gap-6"
              variants={socialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                { icon: Github, href: "#", color: "hover:text-slate-200" },
                { icon: Linkedin, href: "#", color: "hover:text-slate-200" },
                { icon: Mail, href: "#", color: "hover:text-slate-200" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={{ hidden: { opacity: 0, scale: 0.5, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                  className={`social-icon p-3 md:p-4 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-slate-600/50 hover:shadow-lg hover:shadow-slate-600/20`}
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
