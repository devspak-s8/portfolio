export interface FeaturedProjectDetail {
  slug: string
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  image: string
  tech: string[]
  highlights: string[]
  github: string
  live?: string
  role: string
}

export const featuredProjectsData: FeaturedProjectDetail[] = [
  {
    slug: 's8houses',
    title: 'S8Houses',
    category: 'Full Stack',
    shortDescription: 'Modern real-estate platform for discovering and managing property listings.',
    fullDescription:
      'S8Houses is a production-ready real-estate platform focused on usability and conversion. The product provides smooth property browsing, clean listing details, and a scalable architecture for expanding into additional regional markets and workflows.',
    image: '/project-management-team.png',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Full Stack'],
    highlights: [
      'Search-friendly listing architecture with clear filtering flows',
      'Responsive interface optimized for mobile and desktop users',
      'Extensible foundation for agency and owner-based listing management',
    ],
    github: 'https://github.com/devspak-s8/s8houses',
    live: 'https://s8houses.vercel.app',
    role: 'Lead Product Developer',
  },
  {
    slug: 'devpulse-cli-docs',
    title: 'DevPulse CLI Docs',
    category: 'Documentation',
    shortDescription: 'Interactive docs experience for DevPulse CLI onboarding and workflows.',
    fullDescription:
      'DevPulse CLI Docs is a developer-focused documentation portal that explains setup, commands, and practical workflows. It is designed for clarity, fast navigation, and lower adoption friction for new contributors and teams.',
    image: '/krea-ai-studio.jpg',
    tech: ['TypeScript', 'Next.js', 'Documentation', 'Developer Tools'],
    highlights: [
      'Task-oriented documentation structure for faster onboarding',
      'Clear command references with practical usage scenarios',
      'Consistent UI hierarchy that keeps technical content readable',
    ],
    github: 'https://github.com/devspak-s8/devpulse-cli-docs',
    live: 'https://devpulse-cli.vercel.app',
    role: 'Product Developer',
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    category: 'Personal Brand',
    shortDescription: 'Personal portfolio showcasing projects, branding work, and experience.',
    fullDescription:
      'This portfolio represents your public product identity, combining project storytelling, branding case studies, and experience highlights into a single polished presentation. It balances modern visuals with clear navigation and conversion-oriented sections.',
    image: '/lexi-ai-dashboard.jpg',
    tech: ['TypeScript', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
    highlights: [
      'Structured sections for projects, identity work, and professional timeline',
      'Reusable UI system for consistency across all pages',
      'Optimized visual hierarchy for quick recruiter and client scanning',
    ],
    github: 'https://github.com/devspak-s8/portfolio',
    live: 'https://apatira.s8globals.org',
    role: 'Product Designer & Developer',
  },
  {
    slug: 'majlisunnor-academy-website',
    title: 'Majlisunnor Academy Website',
    category: 'Full Stack',
    shortDescription: 'Academy platform website with scalable content architecture.',
    fullDescription:
      'Majlisunnor Academy Website is an education-focused web platform designed for structured program discovery, learner engagement, and trust-building presentation. The implementation emphasizes maintainability and clear information flow.',
    image: '/s8builder-platform.jpg',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Web Platform'],
    highlights: [
      'Information architecture tailored to academy content and audiences',
      'Reusable sections to scale course and program pages efficiently',
      'Balanced visual style for readability and authority',
    ],
    github: 'https://github.com/devspak-s8/majlisunnor-academy-website',
    live: 'https://majlisunnor-academy-website.vercel.app',
    role: 'Full Stack Developer & Designer',
  },
  {
    slug: 'devpulse-cli',
    title: 'DevPulse CLI',
    category: 'Backend/CLI',
    shortDescription: 'Developer productivity CLI focused on workflow acceleration.',
    fullDescription:
      'DevPulse CLI is a command-line developer tool built to streamline repetitive setup and workflow actions. It focuses on speed, consistency, and developer ergonomics for daily technical operations.',
    image: '/project-management-team.png',
    tech: ['Python', 'CLI', 'Automation', 'Developer Tools'],
    highlights: [
      'Command workflows that reduce repetitive manual operations',
      'Extensible CLI structure for future commands and integrations',
      'Clear output and focused UX for terminal-first users',
    ],
    github: 'https://github.com/devspak-s8/devpulse-cli',
    role: 'Backend/Product Engineer',
  },
]

export const getFeaturedProjectBySlug = (slug: string) => featuredProjectsData.find((project) => project.slug === slug)
