'use client'

export interface ProjectFeature {
  title: string
  description: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  image: string
  tech: string[]
  features: ProjectFeature[]
  challenges: string[]
  solutions: string[]
  github: string
  live?: string
  featured: boolean
  screenshots?: string[]
  impact?: string
  role?: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: 'lexi-ai',
    title: 'Lexi-AI',
    category: 'Full Stack',
    shortDescription: 'AI-powered application for intelligent interactions and content processing',
    fullDescription:
      'Lexi-AI is an advanced AI-powered application designed to provide intelligent interactions and seamless content processing. Built with cutting-edge technologies, it leverages the power of large language models to deliver intuitive and responsive user experiences for content creation, analysis, and intelligent assistance.',
    image: '/lexi-ai-dashboard.jpg',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    features: [
      { title: 'AI-Powered Content Processing', description: 'Process and analyze content using advanced language models' },
      { title: 'Real-time Responses', description: 'Get instant AI-generated responses and suggestions' },
      { title: 'Multi-format Support', description: 'Work with text, documents, and various content formats' },
      { title: 'Customizable Settings', description: 'Fine-tune AI behavior and response parameters' },
    ],
    challenges: [
      'Integrating multiple AI models efficiently',
      'Managing API costs and rate limits',
      'Ensuring fast response times for real-time interactions',
    ],
    solutions: [
      'Implemented smart caching and request batching',
      'Optimized API calls with proper error handling',
      'Built progressive streaming for faster perceived performance',
    ],
    github: 'https://github.com/devspak-s8/Lexi-AI',
    live: '#',
    featured: true,
    role: 'Full Stack Developer',
    impact: 'Enables content creators and businesses to leverage AI for faster, smarter content workflows',
  },
  {
    id: 2,
    slug: 's8builder',
    title: 'S8Builder',
    category: 'Full Stack',
    shortDescription: 'AI-powered website builder - instantly generate sites or book professional services',
    fullDescription:
      'S8Builder is a revolutionary no-code website builder powered by AI. It enables users to instantly generate professional websites or book services from skilled developers. The platform democratizes web development by making it accessible to non-technical users while providing powerful tools for professionals.',
    image: '/s8builder-platform.jpg',
    tech: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'Firebase'],
    features: [
      { title: 'AI Site Generation', description: 'Generate complete websites with AI in seconds' },
      { title: 'Professional Services Marketplace', description: 'Connect with experienced developers' },
      { title: 'Drag-and-Drop Editor', description: 'Easy-to-use interface for customization' },
      { title: 'Responsive Design', description: 'Built-in mobile responsiveness for all sites' },
      { title: 'SEO Optimized', description: 'Generate SEO-friendly websites automatically' },
    ],
    challenges: [
      'Balancing AI-generated content quality with user customization',
      'Creating an intuitive interface for non-technical users',
      'Managing complex site generation workflows',
    ],
    solutions: [
      'Implemented iterative refinement with user feedback',
      'Designed progressive disclosure UI patterns',
      'Built modular generation pipeline for flexibility',
    ],
    github: 'https://github.com/devspak-s8/S8Builder',
    live: 'https://s8-builder.vercel.app',
    featured: true,
    role: 'Lead Frontend Developer',
    impact: 'Democratizes web development, enabling thousands of users to create professional websites without coding',
  },
  {
    id: 3,
    slug: 'krea-ai',
    title: 'Krea AI',
    category: 'Full Stack',
    shortDescription: 'AI art and image generation with advanced diffusion models',
    fullDescription:
      'Krea AI is a sophisticated image generation platform leveraging state-of-the-art AI models like FLUX 1 and WAN 2.2. It provides creators, designers, and artists with powerful tools to generate, refine, and customize AI artwork with unprecedented control and quality.',
    image: '/krea-ai-studio.jpg',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Image Processing'],
    features: [
      { title: 'Advanced Image Generation', description: 'Generate images using FLUX 1 and WAN 2.2 models' },
      { title: 'Style Control', description: 'Fine-tune artistic styles and visual parameters' },
      { title: 'Batch Processing', description: 'Generate multiple variations efficiently' },
      { title: 'Image Enhancement', description: 'Upscale and refine generated artwork' },
      { title: 'Export Options', description: 'Multiple format and resolution exports' },
    ],
    challenges: [
      'Integrating multiple AI image models',
      'Managing large image processing loads',
      'Providing fast generation times without quality loss',
    ],
    solutions: [
      'Built model selection logic for optimal results',
      'Implemented queue-based processing system',
      'Optimized image processing pipeline',
    ],
    github: 'https://github.com/devspak-s8/Krea-AI---Generate-Amazing-AI-Content',
    live: 'https://krea-ai-generate-amazing-ai-content.vercel.app',
    featured: true,
    role: 'Full Stack Developer',
    impact: 'Empowers millions of creators to generate professional-quality artwork without design skills',
  },
  {
    id: 4,
    slug: 's8globals',
    title: 'S8Globals',
    category: 'Full Stack',
    shortDescription: 'Digital ecosystem for creators, learners, and businesses',
    fullDescription:
      'S8Globals is a comprehensive digital ecosystem designed to connect creators, learners, and businesses. It provides a unified platform for knowledge sharing, skill development, and professional collaboration, fostering a global community of innovators.',
    image: '/s8globals-ecosystem.jpg',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js'],
    features: [
      { title: 'Creator Tools', description: 'Publish and monetize content' },
      { title: 'Learning Pathways', description: 'Structured courses and skill development' },
      { title: 'Marketplace', description: 'Connect creators with opportunities' },
      { title: 'Community Forums', description: 'Engage and collaborate with peers' },
      { title: 'Analytics Dashboard', description: 'Track growth and performance' },
    ],
    challenges: [
      'Building a scalable ecosystem architecture',
      'Ensuring strong community engagement',
      'Managing creator-learner interactions',
    ],
    solutions: [
      'Modular component architecture',
      'Gamification and reward systems',
      'Intelligent matching algorithms',
    ],
    github: 'https://github.com/devspak-s8/s8Globals',
    live: '#',
    featured: true,
    role: 'Full Stack Developer',
    impact: 'Creates a thriving ecosystem connecting over 10,000+ creators and learners globally',
  },
  {
    id: 5,
    slug: 'smartroute',
    title: 'SmartRoute',
    category: 'Frontend',
    shortDescription: 'Real-time traffic navigation with flood risk awareness for Nigerian roads',
    fullDescription:
      'SmartRoute is an intelligent navigation application designed specifically for Nigerian roads. It combines real-time traffic data with weather and flood risk awareness to help users find the safest and fastest routes, particularly during rainy seasons.',
    image: '/smartroute-navigation.jpg',
    tech: ['React', 'JavaScript', 'Maps API', 'Tailwind CSS', 'Real-time Data'],
    features: [
      { title: 'Real-time Traffic', description: 'Live traffic updates and congestion warnings' },
      { title: 'Flood Risk Alerts', description: 'Weather-based flood risk assessment' },
      { title: 'Route Optimization', description: 'AI-powered fastest and safest route suggestions' },
      { title: 'Offline Maps', description: 'Navigate without internet connection' },
      { title: 'Emergency Features', description: 'Quick SOS and emergency contact options' },
    ],
    challenges: [
      'Integrating real-time traffic data sources',
      'Accurate flood risk prediction',
      'Performance optimization for complex maps',
    ],
    solutions: [
      'Multi-source data aggregation',
      'Machine learning models for risk prediction',
      'Lazy loading and map optimization',
    ],
    github: 'https://github.com/devspak-s8/SmartRoute',
    live: 'https://smart-route-rose.vercel.app',
    featured: true,
    role: 'Frontend Developer',
    impact: 'Helps thousands of Nigerian commuters avoid traffic and dangerous flood-prone areas',
  },
  {
    id: 6,
    slug: 'majlisunnor-academy',
    title: 'Majlisunnor Academy',
    category: 'Full Stack',
    shortDescription: 'Educational platform for learning and development',
    fullDescription:
      'Majlisunnor Academy is a comprehensive e-learning platform designed to provide quality education and skill development. It features interactive courses, progress tracking, and personalized learning paths for students of all levels.',
    image: '/placeholder.jpg',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    features: [
      { title: 'Interactive Courses', description: 'Engaging video and text-based learning' },
      { title: 'Progress Tracking', description: 'Monitor learning journey and achievements' },
      { title: 'Quizzes & Assessments', description: 'Test knowledge with interactive assessments' },
      { title: 'Certificates', description: 'Earn recognized certificates upon completion' },
    ],
    challenges: [
      'Creating engaging educational content',
      'Building robust assessment systems',
      'Managing student progress and analytics',
    ],
    solutions: [
      'Professional content creation team',
      'Automated grading systems',
      'Real-time progress dashboards',
    ],
    github: 'https://github.com/devspak-s8/majlisunnor-academy-website',
    live: '#',
    featured: false,
    role: 'Full Stack Developer',
    impact: 'Educates hundreds of students in Islamic knowledge and professional skills',
  },
  {
    id: 7,
    slug: 'react-ticket-app',
    title: 'React Ticket App',
    category: 'Frontend',
    shortDescription: 'Ticket management system built with React',
    fullDescription:
      'A modern ticket management application built with React. It provides an intuitive interface for creating, tracking, and managing support tickets with real-time updates and comprehensive filtering options.',
    image: '/placeholder.jpg',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Context API'],
    features: [
      { title: 'Ticket Creation', description: 'Easy-to-use ticket submission form' },
      { title: 'Real-time Updates', description: 'Instant status updates and notifications' },
      { title: 'Advanced Filtering', description: 'Sort by status, priority, and category' },
      { title: 'Comment System', description: 'Collaborate with team members' },
    ],
    challenges: ['State management complexity', 'Real-time update handling'],
    solutions: ['Context API with custom hooks', 'WebSocket integration'],
    github: 'https://github.com/devspak-s8/React-ticket',
    live: '#',
    featured: false,
    role: 'Frontend Developer',
    impact: 'Streamlines support ticket workflows for small to medium businesses',
  },
  {
    id: 8,
    slug: 'vue-ticket-app',
    title: 'Vue Ticket App',
    category: 'Frontend',
    shortDescription: 'Ticket management system built with Vue.js',
    fullDescription:
      'A feature-rich ticket management platform built with Vue.js. It offers a responsive interface for managing support tickets with advanced search, filtering, and collaboration features.',
    image: '/placeholder.jpg',
    tech: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Pinia'],
    features: [
      { title: 'Ticket Management', description: 'Full CRUD operations for tickets' },
      { title: 'User Roles', description: 'Admin and user permission levels' },
      { title: 'Search & Filter', description: 'Powerful search and filtering capabilities' },
      { title: 'Dashboard', description: 'Overview of ticket statistics' },
    ],
    challenges: ['Component state management', 'Performance with large datasets'],
    solutions: ['Pinia state management', 'Virtual scrolling for lists'],
    github: 'https://github.com/devspak-s8/Vue-Ticket-App',
    live: '#',
    featured: false,
    role: 'Frontend Developer',
    impact: 'Provides Vue.js developers with a reference implementation for ticket systems',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((p) => p.featured)
}
