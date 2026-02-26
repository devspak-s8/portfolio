'use client'

export interface ColorPalette {
  name: string
  hex: string
  usage: string
  swatchClass: string
}

export interface TypographyRule {
  name: string
  font: string
  size: string
  weight: string
  usage: string
}

export interface BrandingProject {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  brandStory: string
  designPhilosophy: string
  image: string
  colors: ColorPalette[]
  typography: TypographyRule[]
  logoVariants: string[]
  inspiration: string
  usageGuidelines: string[]
  leadStatement: string
}

export const brandingData: BrandingProject[] = [
  {
    id: 1,
    slug: 'lexi-ai-brand',
    title: 'Lexi-AI Logo & Identity',
    category: 'Logo & Identity',
    shortDescription: 'Modern AI-focused brand identity with intelligent aesthetics',
    fullDescription:
      'Lexi-AI brand identity embodies intelligence, sophistication, and innovation. The visual system reflects the power of artificial intelligence while maintaining accessibility and trust. Every design element serves a purpose in communicating the product\'s capabilities.',
    brandStory:
      'Lexi-AI was designed as a companion to human intelligence. The brand identity needed to convey sophistication without intimidating users. The name "Lexi" suggests linguistic prowess, while the visual identity supports this with clean, intelligent design that feels both powerful and approachable.',
    designPhilosophy:
      'We believe great AI products should feel like natural extensions of human thought. Our design philosophy balances technical sophistication with user-friendly simplicity. Every color choice, typeface, and visual element reinforces the idea that AI can be intuitive, helpful, and human-centered.',
    image: '/1000443546.jpg',
    colors: [
      { name: 'Primary Blue', hex: '#0F72BA', usage: 'Main brand color, CTAs, key elements', swatchClass: 'bg-blue-700' },
      { name: 'Secondary Purple', hex: '#7C3AED', usage: 'Accents, highlights, active states', swatchClass: 'bg-violet-600' },
      { name: 'Slate Gray', hex: '#1E293B', usage: 'Text, backgrounds, primary interface', swatchClass: 'bg-slate-800' },
      { name: 'Soft White', hex: '#F8FAFC', usage: 'Clean backgrounds, contrast', swatchClass: 'bg-slate-50' },
    ],
    typography: [
      {
        name: 'Heading 1',
        font: 'Inter',
        size: '48px',
        weight: '700',
        usage: 'Main titles and primary headings',
      },
      {
        name: 'Heading 2',
        font: 'Inter',
        size: '32px',
        weight: '600',
        usage: 'Section headers and secondary headings',
      },
      {
        name: 'Body',
        font: 'Inter',
        size: '16px',
        weight: '400',
        usage: 'Primary text content and descriptions',
      },
      {
        name: 'Caption',
        font: 'Inter',
        size: '12px',
        weight: '500',
        usage: 'Small text, labels, and metadata',
      },
    ],
    logoVariants: ['/1000443544.jpg', '/1000443545.jpg', '/1000443546.jpg'],
    inspiration:
      'The Lexi-AI visual identity was inspired by the intersection of human and artificial intelligence. We drew from minimalist design principles, tech aesthetics, and cognitive science to create a brand that feels both advanced and approachable.',
    usageGuidelines: [
      'Always maintain adequate clear space around the logo',
      'Use official color palette for consistency',
      'Never distort, rotate, or modify the logo proportions',
      'Ensure sufficient contrast with backgrounds',
      'Use consistent typography across all materials',
    ],
    leadStatement:
      'I led the full logo and identity direction for Lexi-AI, from visual concept exploration and typography pairing to final lockups and system consistency across product and brand touchpoints.',
  },
  {
    id: 2,
    slug: 's8builder-brand',
    title: 'S8Builder Logo & Identity',
    category: 'Logo & Identity',
    shortDescription: 'Dynamic brand for an AI-powered website builder',
    fullDescription:
      'S8Builder represents the democratization of web development. The brand identity is bold, modern, and inspiring—reflecting the idea that anyone can build professional websites. The visual system is vibrant yet sophisticated, appealing to both beginners and professionals.',
    brandStory:
      'S8Builder was born from the vision that web development should be accessible to everyone. The "S8" represents the journey from start to success, while "Builder" emphasizes creation and empowerment. The brand needed to feel innovative, trustworthy, and inspiring.',
    designPhilosophy:
      'Our design philosophy centers on empowerment through simplicity. We believe that powerful tools should be accessible, and beautiful design should democratize technology. The S8Builder brand communicates confidence, creativity, and limitless possibilities.',
    image: '/1000443555.jpg',
    colors: [
      { name: 'Primary Orange', hex: '#FF6B35', usage: 'Energy, creation, primary CTAs', swatchClass: 'bg-orange-500' },
      { name: 'Secondary Teal', hex: '#00A8E8', usage: 'Technology, trust, secondary elements', swatchClass: 'bg-cyan-500' },
      { name: 'Dark Navy', hex: '#003366', usage: 'Text, depth, strong contrast', swatchClass: 'bg-blue-950' },
      { name: 'Cream White', hex: '#FFFBF0', usage: 'Clean backgrounds, readability', swatchClass: 'bg-amber-50' },
    ],
    typography: [
      {
        name: 'Display',
        font: 'Poppins',
        size: '56px',
        weight: '700',
        usage: 'Bold headlines and hero text',
      },
      {
        name: 'Heading',
        font: 'Poppins',
        size: '32px',
        weight: '600',
        usage: 'Section headers',
      },
      {
        name: 'Body',
        font: 'Inter',
        size: '16px',
        weight: '400',
        usage: 'Body text and descriptions',
      },
    ],
    logoVariants: ['/1000443553.jpg', '/1000443555.jpg', '/1000443562.jpg'],
    inspiration:
      'S8Builder was inspired by brands that make powerful technology approachable. We studied design systems from leading no-code platforms and created something distinctly our own that speaks to creators.',
    usageGuidelines: [
      'Maintain visual hierarchy with consistent spacing',
      'Use accent colors strategically for emphasis',
      'Preserve logo integrity across all applications',
      'Follow typography scale for readability',
      'Test color combinations for accessibility',
    ],
    leadStatement:
      'I led the S8Builder identity work by defining the core logo system, color behavior, and component-level styling so the brand feels bold, modern, and product-ready across screens.',
  },
  {
    id: 3,
    slug: 'strukt-ai-brand',
    title: 'Strukt Logo & Identity',
    category: 'Logo & Identity',
    shortDescription: 'Artistic and innovative brand for AI-powered image generation',
    fullDescription:
      'Strukt celebrates the intersection of art and technology. The brand identity is visual, expressive, and creative—reflecting the platform\'s ability to generate stunning artwork. The design system balances technical sophistication with artistic flair.',
    brandStory:
      'strukt (inspired by "create" and "idea") represents the fusion of human creativity and artificial intelligence. The brand needed to feel artistic, innovative, and empowering for creators. Every visual element celebrates the creative process.',
    designPhilosophy:
      'We believe AI should enhance human creativity, not replace it. Our design philosophy combines cutting-edge technology aesthetics with artistic expression. The Strukt brand celebrates imagination while maintaining technical credibility.',
    image: '/1000443564.jpg',
    colors: [
      { name: 'Creative Magenta', hex: '#EC4899', usage: 'Energy, creativity, highlights', swatchClass: 'bg-pink-500' },
      { name: 'Tech Cyan', hex: '#06B6D4', usage: 'Innovation, AI elements, accents', swatchClass: 'bg-cyan-500' },
      { name: 'Deep Purple', hex: '#6D28D9', usage: 'Depth, sophistication, text', swatchClass: 'bg-violet-700' },
      { name: 'Soft Gray', hex: '#F3F4F6', usage: 'Clean canvas, backgrounds', swatchClass: 'bg-slate-100' },
    ],
    typography: [
      {
        name: 'Display Bold',
        font: 'Space Grotesk',
        size: '52px',
        weight: '700',
        usage: 'Impactful headlines',
      },
      {
        name: 'Heading',
        font: 'Space Grotesk',
        size: '28px',
        weight: '600',
        usage: 'Section titles',
      },
      {
        name: 'Body',
        font: 'Inter',
        size: '16px',
        weight: '400',
        usage: 'Main content text',
      },
    ],
    logoVariants: ['/1000443563.jpg', '/1000443564.jpg', '/1000443565.jpg'],
    inspiration:
      'Strukt\'s visual identity was inspired by digital art tools, generative art aesthetics, and the beauty of emergence. We wanted something that feels both digital and organic, technical and artistic.',
    usageGuidelines: [
      'Use vibrant colors to celebrate creativity',
      'Maintain balance between tech and art aesthetics',
      'Ensure logo readability at all sizes',
      'Apply gradient overlays thoughtfully',
      'Preserve color vibrancy in all outputs',
    ],
    leadStatement:
      'I led Strukt’s logo and visual identity direction with a focus on expressive digital aesthetics, making sure the mark and supporting system communicate both creativity and technical depth.',
  },
  {
    id: 4,
    slug: 'diagnoxix-identity',
    title: 'DiagnoXIX Logo & Identity',
    category: 'Logo & Identity',
    shortDescription: 'Clean and modern visual identity for a healthcare-focused digital product.',
    fullDescription:
      'DiagnoXIX identity combines clinical clarity with modern digital aesthetics. The logo system and visual language are built to communicate trust, precision, and accessibility.',
    brandStory:
      'DiagnoXIX was designed to make healthcare technology feel more human. The identity emphasizes confidence and care through balanced form, spacing, and typography.',
    designPhilosophy:
      'Keep visuals clean, structured, and instantly readable. The identity uses restrained color contrast and strong hierarchy to support clarity across product and marketing touchpoints.',
    image: '/1000443580.jpg',
    colors: [
      { name: 'Clinical Blue', hex: '#1D4ED8', usage: 'Primary identity tone and key UI accents', swatchClass: 'bg-blue-700' },
      { name: 'Slate', hex: '#334155', usage: 'Text, borders, and supporting interface elements', swatchClass: 'bg-slate-700' },
      { name: 'Soft White', hex: '#F8FAFC', usage: 'Backgrounds and spacious layout surfaces', swatchClass: 'bg-slate-50' },
      { name: 'Mint', hex: '#34D399', usage: 'Positive state highlights and data accents', swatchClass: 'bg-emerald-400' },
    ],
    typography: [
      {
        name: 'Display',
        font: 'Inter',
        size: '44px',
        weight: '700',
        usage: 'Primary logo lockups and hero headings',
      },
      {
        name: 'Body',
        font: 'Inter',
        size: '16px',
        weight: '400',
        usage: 'Supporting copy and system text',
      },
    ],
    logoVariants: ['/1000443578.jpg', '/1000443579.jpg', '/1000443580.jpg'],
    inspiration:
      'The identity direction draws from modern healthcare products that prioritize readability, confidence, and approachable visual rhythm.',
    usageGuidelines: [
      'Use generous spacing around the mark in clinical contexts.',
      'Maintain clear contrast between text and surfaces.',
      'Avoid over-styling logo treatments in functional screens.',
      'Use mint accents sparingly to preserve hierarchy.',
    ],
    leadStatement:
      'I led the DiagnoXIX logo and identity development to create a clean, trustworthy healthcare visual system that remains readable, consistent, and professional across all brand surfaces.',
  },
]

export function getBrandingBySlug(slug: string): BrandingProject | undefined {
  return brandingData.find((b) => b.slug === slug)
}
