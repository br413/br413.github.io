import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Portrait } from '@/components/portrait'
import { Reveal } from '@/components/fx'
import { PrintButton } from '@/components/print-button'
import { experiences, skillCategories, projectHighlights, education } from '@/lib/data'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata = {
  title: 'Resume',
  description: 'Experience, skills, and career highlights of Brian Yang — Software Engineer specializing in AI, full-stack, and Windows programming.',
  alternates: { canonical: '/resume' },
  openGraph: {
    title: 'Resume | Brian Yang',
    description: 'Experience, skills, and career highlights of Brian Yang — Software Engineer specializing in AI, full-stack, and Windows programming.',
  },
}

export default function ResumePage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-line pb-14 pt-36">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Portrait size={104} className="mb-7 rounded-2xl" priority />
                <p className="eyebrow">Resume</p>
                <h1 className="display mt-3 text-4xl sm:text-6xl">
                  <span className="text-grad">{SITE_CONFIG.name}</span>
                </h1>
                <p className="mono-label mt-4">{SITE_CONFIG.title} · {SITE_CONFIG.tagline}</p>
                <p className="mt-5 max-w-xl leading-relaxed text-dim">{SITE_CONFIG.summary}</p>
              </div>
              <PrintButton />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[17rem_1fr] lg:px-10">
          {/* Sidebar */}
          <Reveal delay={0.1}>
            <div className="top-24 space-y-12 lg:sticky lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2">
              {/* Skills */}
              <div>
                <p className="mono-label mb-5 text-accent">SKILLS</p>
                <div className="space-y-5">
                  {skillCategories.map((category) => (
                    <div key={category.category}>
                      <p className="text-sm font-semibold">{category.category}</p>
                      <p className="mt-1.5 font-mono text-[0.72rem] leading-relaxed text-dim">
                        {category.skills.join(' · ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <p className="mono-label mb-5 text-accent">EDUCATION</p>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.degree}>
                      <p className="text-sm font-semibold">{edu.degree}</p>
                      <p className="mt-0.5 font-mono text-[0.72rem] text-dim">
                        {edu.institution} · {edu.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <p className="mono-label mb-5 text-accent">CONTACT</p>
                <div className="space-y-1.5 font-mono text-[0.78rem]">
                  <Link href={`mailto:${SITE_CONFIG.email}`} className="block text-dim transition-colors hover:text-accent">
                    {SITE_CONFIG.email}
                  </Link>
                  <Link href={SITE_CONFIG.github} className="block text-dim transition-colors hover:text-accent">
                    github.com/br413
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Experience */}
          <div className="min-w-0">
            <Reveal>
              <p className="mono-label mb-8 text-accent">EXPERIENCE</p>
            </Reveal>
            <div className="border-t border-line">
              {experiences
                .slice()
                .reverse()
                .map((xp) => (
                  <Reveal key={xp.title + xp.period}>
                    <div className="grid gap-3 border-b border-line py-10 sm:grid-cols-[10rem_1fr] sm:gap-8">
                      <span className="mono-label pt-1.5">{xp.period}</span>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">
                          {xp.title} <span className="font-medium text-accent">· {xp.company}</span>
                        </h3>
                        <p className="mt-3 leading-relaxed text-dim">{xp.description}</p>
                        <ul className="mt-5 space-y-2">
                          {xp.details.map((detail) => (
                            <li key={detail} className="flex gap-3 text-[0.92rem] leading-relaxed text-dim">
                              <span className="select-none pt-px text-accent">—</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-faint">
                          {xp.skills.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
            </div>

            {/* Cross links */}
            <Reveal className="print-hidden mt-12">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <Link href="/projects" className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent-bright">
                  All {projectHighlights.length} public projects <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/profile" className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent-bright">
                  Psychometric profile <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent-bright">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
