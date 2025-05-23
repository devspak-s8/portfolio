"use client";

import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/navbar";
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

const technologiesData = [
  {
    title: "Publications",
    subtitle: "Available on Both Stores",
    items: [
      {
        label: "A",
        name: "App Store",
        bgColor: "bg-gray-700",
        textColor: "text-xs",
      },
      {
        label: "P",
        name: "Play Store",
        bgColor: "bg-gray-700",
        textColor: "text-xs",
      },
    ],
  },
  {
    title: "Front-end Engineering",
    subtitle: "Design & Development",
    items: [
      {
        label: "R",
        name: "React JS",
        bgColor: "bg-blue-500",
        textColor: "text-xs",
      },
      {
        label: "R",
        name: "React Native",
        bgColor: "bg-blue-500",
        textColor: "text-xs",
      },
      {
        label: "N",
        name: "Next.js",
        bgColor: "bg-blue-500",
        textColor: "text-xs",
      },
      { label: "V", name: "Vue", bgColor: "bg-gray-700", textColor: "text-xs" },
      {
        label: "F",
        name: "Figma",
        bgColor: "bg-gray-700",
        textColor: "text-xs",
      },
      {
        label: "J",
        name: "Jest",
        bgColor: "bg-gray-700",
        textColor: "text-xs",
      },
      {
        label: "R",
        name: "React Testing Library",
        bgColor: "bg-gray-700",
        textColor: "text-xs",
      },
    ],
  },
  {
    title: "Languages",
    subtitle: null,
    items: [
      {
        label: "J",
        name: "JavaScript",
        bgColor: "bg-yellow-500",
        textColor: "text-black",
      },
      {
        label: "T",
        name: "TypeScript",
        bgColor: "bg-blue-500",
        textColor: "text-xs",
      },
    ],
  },
];

const projects = [
  {
    title: "S8Globals E-commerce Platform",
    imageUrl: "https://your-image-host.com/s8globals-ecommerce.png",
    description:
      "A cutting-edge e-commerce platform built with Next.js and Tailwind CSS, optimized for performance and scalability.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/yourusername/s8globals-ecommerce",
    liveDemoUrl: "https://s8globals-ecommerce.vercel.app",
  },
  {
    title: "Book Listing App",
    imageUrl: "https://your-image-host.com/book-listing-app.png",
    description:
      "A dynamic book listing application featuring advanced search and filtering capabilities using React and Redux.",
    techStack: ["React", "Redux", "Sass"],
    githubUrl: "https://github.com/yourusername/book-listing-app",
    liveDemoUrl: null,
  },
  {
    title: "Social Media Management Dashboard",
    imageUrl: "https://your-image-host.com/social-media-dashboard.png",
    description:
      "An intuitive dashboard for managing social media campaigns with analytics and scheduling built in Vue.js.",
    techStack: ["Vue.js", "Tailwind CSS", "Node.js"],
    githubUrl: "https://github.com/yourusername/social-media-dashboard",
    liveDemoUrl: "https://socialmedia-dashboard.vercel.app",
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
        brandName="lucasvega"
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
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4 md:px-0">
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
              src="/placeholder.svg?height=256&width=256"
              alt="Lucas profile





"
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
    <section className="py-16 px-6">
  <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
    {/* Text Section */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        I'm Sulayman — a passionate full-stack developer, Islamic scholar,
        and lifelong learner. Whether it’s building web solutions,
        deep-diving into classical texts, or creatively experimenting with
        code and design, I’m always aiming to bridge innovation with
        tradition.
        <br />
        My journey started with curiosity and a love for problem-solving —
        from scripting small projects to managing full-scale applications
        that solve real-world challenges. Outside the dev world, I’m
        rooted in my faith, memorizing the Qur’an and studying Fiqh and
        Hadith.
        <br />
        I believe in leveling up every day. That’s why I balance
        coding with teaching, mentoring, and staying on top of emerging
        tech. My goal? To become a digital leader who creates impact while
        upholding timeless values. Let’s build the future — ethically,
        creatively, and purposefully.
      </p>
      <ul className="text-gray-600 space-y-3 text-left">
        <li>💻 Full-Stack Developer</li>
        <li>📖 Islamic Scholar & Hafiz</li>
        <li>🎨 Amateur Graphic Designer</li>
        <li>🌍 Future Tech Investor</li>
      </ul>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2">
      <img
            src={profileImage} alt="Sulayman Profile"
        className="w-full h-auto rounded-2xl shadow-lg object-cover"
      />
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 md:px-0 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map(
            ({
              title,
              imageUrl,
              description,
              techStack,
              githubUrl,
              liveDemoUrl,
            }) => (
              <motion.div
                key={title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg bg-gray-800"
              >
                <div className="relative h-40 sm:h-48 w-full">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 rounded px-2 py-1 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {githubUrl && (
                      <Link
                        href={githubUrl}
                        target="_blank"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={`${title} GitHub repository`}
                      >
                        GitHub
                      </Link>
                    )}
                    {liveDemoUrl && (
                      <Link
                        href={liveDemoUrl}
                        target="_blank"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={`${title} live demo`}
                      >
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center ">
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight drop-shadow-md">
            What I Love to Do
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-12">
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
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12 tracking-tight drop-shadow-sm">
          Latest Blogs
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
