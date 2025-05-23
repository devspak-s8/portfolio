"use client";

import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/navbar";
import Projects from "@/components/Projects";

import CTABanner from "@/components/CTAbanner";
import Footer from "@/components/footer";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
const profileImage = "/1000282765.jpg"; // File inside /public folder

const skills = [
  {
    name: "JavaScript",
    bg: "bg-yellow-100/90",
    iconBg: "bg-yellow-400",
    textColor: "text-black",
    icon: <SiJavascript className="w-6 h-6 text-black" />,
  },
  {
    name: "React",
    bg: "bg-cyan-100/90",
    iconBg: "bg-cyan-500",
    textColor: "text-black",
    icon: <SiReact className="w-6 h-6 text-white" />,
  },
  {
    name: "Next.js",
    bg: "bg-neutral-200/90",
    iconBg: "bg-black",
    textColor: "text-black",
    icon: <SiNextdotjs className="w-6 h-6 text-white" />,
  },
  {
    name: "TypeScript",
    bg: "bg-blue-100/90",
    iconBg: "bg-blue-600",
    textColor: "text-black",
    icon: <SiTypescript className="w-6 h-6 text-white" />,
  },
  {
    name: "Tailwind CSS",
    bg: "bg-sky-100/90",
    iconBg: "bg-sky-500",
    textColor: "text-black",
    icon: <SiTailwindcss className="w-6 h-6 text-white" />,
  },
];

const articles = [
  {
    title: "How to Build Scalable Web Apps in 2025",
    desc: "Discover the best practices and tools shaping the future of scalable applications.",
    link: "#",
  },
  {
    title: "Blending Tech and Tradition: My Journey",
    desc: "How I integrate Islamic studies with modern development for a unique perspective.",
    link: "#",
  },
  {
    title: "Top 5 Tools Every Full-Stack Dev Should Know",
    desc: "From React to Next.js, here’s my toolkit for 2025 development.",
    link: "#",
  },
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar
        brandName="Home"
        links={[
          { href: "/education", label: "education" },
          { href: "/experience", label: "experience" },
        ]}
        socialLinks={[
          {
            href: "https://github.com",
            icon: <Github className="h-4 w-4" />,
            label: "GitHub",
          },
          {
            href: "https://linkedin.com",
            icon: <Linkedin className="h-4 w-4" />,
            label: "LinkedIn",
          },
          {
            href: "mailto:example@example.com",
            icon: <Mail className="h-4 w-4" />,
            label: "Email",
          },
        ]}
      />

      {/* Hero Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-22 py-16 px-4 md:px-0">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <Typewriter
              words={["I’m Apatira Sulayman"]}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </h1>

          <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
            <Typewriter
              words={[
                `A frontend developer and aspiring backend developer with experience in React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Sass, Bootstrap, HTML, CSS, and tools like Git, GitHub, and Firebase. Feel free to call me (devspark-s8).`,
              ]}
              cursor
              cursorStyle="_"
              typeSpeed={30}
              deleteSpeed={0}
              delaySpeed={500}
            />
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              variant="outline"
              className="rounded-full bg-white text-black hover:bg-gray-200 px-6 py-2"
            >
              Download CV
            </Button>
            <Link href="/experience" passHref>
              <Button
                variant="link"
                className="text-gray-400 hover:text-white px-6 py-2"
              >
                See experiences
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            <Image
              src="/p1.jpg"
              alt="Lucas profile"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={ref} className="container mx-auto px-4 md:px-0 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              variants={itemVariants}
              className={`p-4 rounded-lg shadow-lg ${skill.bg} flex flex-col items-center gap-2 cursor-default`}
            >
              <div
                className={`${skill.iconBg} rounded-full p-2 flex items-center justify-center`}
              >
                {skill.icon}
              </div>
              <span
                className={`${skill.textColor} font-medium text-sm sm:text-base`}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="py-20 px-6 sm:px-10 lg:px-24  text-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              About <span className="text-purple-500">Me</span> 
            </h2>

            <p className="text-base sm:text-lg text-white mb-8 leading-relaxed tracking-wide">
              I'm <span className="font-semibold text-purple-500">Sulayman</span>{" "}
              — a passionate full-stack developer, Islamic scholar, and lifelong
              learner. Whether it’s building web solutions, diving into
              classical texts, or experimenting with design, I bridge innovation
              and tradition.
              <br className="hidden sm:block" />
              My journey began with curiosity and problem-solving — from mini
              projects to managing full-scale apps. Beyond tech, I’m deeply
              rooted in my faith: memorizing the Qur’an and studying Fiqh and
              Hadith.
              <br className="hidden sm:block" />I believe in constant growth.
              From mentoring and teaching to mastering emerging tech, I aim to
              lead with purpose. Let’s build the future — ethically, creatively,
              and intentionally.
            </p>

            <ul className="text-left text-gray-700 text-base sm:text-lg space-y-3">
              <li>
                💻 <span className="font-medium">Full-Stack Developer</span>
              </li>
              <li>
                📖 <span className="font-medium">Islamic Scholar & Hafiz</span>
              </li>
              <li>
                🎨 <span className="font-medium">Amateur Graphic Designer</span>
              </li>
              <li>
                🌍 <span className="font-medium">Future Tech Investor</span>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={profileImage}
              alt="Sulayman Profile"
              className="w-full max-w-md h-auto rounded-3xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      <Projects />

      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center ">
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl text-white font-extrabold mb-8 tracking-tight drop-shadow-md">
            What I <span className=" text-purple-500">Love to Do</span> 
          </h2>
          <p className="max-w-3xl mx-auto text-white text-lg leading-relaxed mb-12">
            When I'm not coding the next big thing, you’ll find me diving into
            the latest tech trends, practicing Quranic memorization, or
            exploring creative designs. Passionate about blending innovation
            with tradition — always leveling up.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <ul className="max-w-md mx-auto grid grid-cols-2 gap-8 text-gray-600 text-xl font-medium">
            <li className="flex items-center justify-center gap-3">
              <span className="text-3xl">💻</span> Full-Stack Developer
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-3xl">📖</span> Islamic Scholar & Hafiz
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-3xl">🎨</span> Amateur Graphic Designer
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-3xl">🌍</span> Future Tech Investor
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12 tracking-tight drop-shadow-sm">
          Latest <span className=" text-purple-500">Blogs</span>
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map(({ title, desc, link }, idx) => (
            <article
              key={idx}
              className="bg-indigo-50 hover:bg-indigo-100 transition rounded-xl p-8 shadow-md hover:shadow-xl cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                  {title}
                </h3>
                <p className="text-indigo-800 mb-6 leading-relaxed">{desc}</p>
              </div>
              <a
                href={link}
                className="text-indigo-600 font-semibold hover:underline inline-flex items-center gap-2"
                aria-label={`Read more about ${title}`}
              >
                Read More <span className="text-xl">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </section>
      <CTABanner />
      <Footer />
    </div>
  );
}
