'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Palette, Type, CheckCircle } from 'lucide-react'
import { getBrandingBySlug } from '../../../lib/branding-data'

export default function BrandingDetail() {
  const params = useParams()
  const slug = params.slug as string
  const branding = getBrandingBySlug(slug)

  if (!branding) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Brand Not Found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <Link
          href="/#logos-designs"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Branding
        </Link>

        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 mb-4">
            {branding.category}
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">{branding.title}</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">{branding.shortDescription}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden border border-slate-800">
          <Image src={branding.image} alt={branding.title} fill className="object-cover" priority />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8">Logo Variations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {branding.logoVariants.map((variant, index) => (
            <div key={variant} className="relative h-52 rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
              <Image
                src={variant}
                alt={`${branding.title} variation ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <section className="detail-section">
          <h2 className="text-3xl font-bold mb-6">Brand Overview</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">{branding.fullDescription}</p>
        </section>

        <section className="detail-section">
          <h2 className="text-3xl font-bold mb-6">Brand Story</h2>
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <p className="text-lg text-slate-300 leading-relaxed">{branding.brandStory}</p>
          </div>
        </section>

        <section className="detail-section">
          <h2 className="text-3xl font-bold mb-6">My Role</h2>
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <p className="text-lg text-slate-300 leading-relaxed">{branding.leadStatement}</p>
          </div>
        </section>

        <section className="detail-section">
          <h2 className="text-3xl font-bold mb-6">Design Philosophy</h2>
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <p className="text-lg text-slate-300 leading-relaxed">{branding.designPhilosophy}</p>
          </div>
        </section>

        <section className="detail-section">
          <h2 className="flex items-center gap-2 text-3xl font-bold mb-8">
            <Palette className="w-8 h-8" />
            Color Palette
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {branding.colors.map((color, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className={`w-24 h-24 rounded-lg border border-slate-700 flex-shrink-0 ${color.swatchClass}`} />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{color.name}</h3>
                  <p className="text-slate-400 font-mono mb-2">{color.hex}</p>
                  <p className="text-slate-300 text-sm">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h2 className="flex items-center gap-2 text-3xl font-bold mb-8">
            <Type className="w-8 h-8" />
            Typography System
          </h2>
          <div className="space-y-6">
            {branding.typography.map((typo, idx) => (
              <div key={idx} className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{typo.name}</h3>
                  <span className="text-sm text-slate-400">
                    {typo.size} • {typo.weight}
                  </span>
                </div>
                <p className="text-slate-300 mb-3">{typo.font}</p>
                <p className="text-slate-400">{typo.usage}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h2 className="text-3xl font-bold mb-6">Design Inspiration</h2>
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <p className="text-lg text-slate-300 leading-relaxed">{branding.inspiration}</p>
          </div>
        </section>

        <section className="detail-section">
          <h2 className="text-3xl font-bold mb-8">Brand Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {branding.usageGuidelines.map((guideline, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-slate-900/20 border border-slate-800 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300">{guideline}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
