import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/fx'
import { TiltCard } from '@/components/fx'
import { projectHighlights } from '@/lib/data'
import { BASE_PATH } from '@/lib/constants'

export const metadata = {
  title: 'Work',
  description: 'All projects by Brian Yang — AI platforms, payment systems, e-commerce, computer vision, blockchain, and more. From Supakon to HindSight to Author Wizard.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Work | Brian Yang',
    description: 'All projects by Brian Yang — AI platforms, payment systems, e-commerce, computer vision, blockchain, and more.',
  },
}

const companyOrder = ['NeuralBridge', 'NovaCircuit', 'Freelance']

export default function ProjectsPage() {
  const grouped = companyOrder
    .map((company) => ({
      company,
      projects: projectHighlights.filter((p) => p.company === company),
    }))
    .filter((g) => g.projects.length > 0)

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-line pb-16 pt-36">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="eyebrow">Portfolio</p>
            <h1 className="display mt-3 text-5xl sm:text-7xl">
              The <span className="text-grad">work.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-dim">
              {projectHighlights.length} projects across AI, fintech, e-commerce, computer vision,
              blockchain, and enterprise systems — each with the real challenge, the real solution,
              and the techniques that made it ship.
            </p>
            <p className="mt-6 max-w-2xl border-l-2 border-accent pl-5 text-sm leading-relaxed text-dim">
              This is a curated selection. Many projects are under NDA and can&apos;t be listed here,
              and some older work predates this portfolio. The full experience timeline is on the{' '}
              <Link href="/resume" className="font-medium text-accent underline-offset-2 hover:underline">
                resume page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects grouped by company */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-20 px-5 sm:px-8 lg:px-10">
          {grouped.map((group) => (
            <div key={group.company}>
              <Reveal>
                <div className="mb-8 flex items-center gap-4">
                  <h2 className="text-grad font-mono text-sm font-semibold uppercase tracking-[0.2em]">
                    {group.company}
                  </h2>
                  <div className="h-px flex-1 bg-line" />
                  <span className="mono-label">{group.projects.length} PROJECTS</span>
                </div>
              </Reveal>
              <Stagger className="grid gap-6 lg:grid-cols-2">
                {group.projects.map((project) => (
                  <StaggerItem key={project.title} className="h-full">
                    <TiltCard className="h-full overflow-hidden">
                      <div className="relative z-10 flex h-full flex-col">
                        {project.image && (
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                              src={`${BASE_PATH}${project.image}`}
                              alt={project.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 560px"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
                          </div>
                        )}
                        <div className="flex flex-1 flex-col p-6 sm:p-7">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                              {project.url ? (
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                                >
                                  {project.title}
                                  <ArrowUpRight className="h-4 w-4 text-faint" />
                                </a>
                              ) : (
                                project.title
                              )}
                            </h3>
                          </div>
                          <p className="mt-3 leading-relaxed text-dim">{project.description}</p>

                          {(project.challenge || project.solution) && (
                            <div className="mt-6 grid gap-5 sm:grid-cols-2">
                              {project.challenge && (
                                <div className="rounded-xl border border-line bg-background-2 p-4">
                                  <p className="mono-label mb-2 text-accent">CHALLENGE</p>
                                  <p className="text-[0.86rem] leading-relaxed text-dim">
                                    {project.challenge}
                                  </p>
                                </div>
                              )}
                              {project.solution && (
                                <div className="rounded-xl border border-line bg-background-2 p-4">
                                  <p className="mono-label mb-2 text-accent">SOLUTION</p>
                                  <p className="text-[0.86rem] leading-relaxed text-dim">
                                    {project.solution}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}

                          {project.techniques && project.techniques.length > 0 && (
                            <div className="mt-6">
                              <p className="mono-label mb-2 text-accent">TECHNIQUES</p>
                              <ul className="space-y-1.5">
                                {project.techniques.map((t) => (
                                  <li key={t} className="flex gap-3 text-[0.88rem] leading-relaxed text-dim">
                                    <span className="select-none pt-px text-accent">→</span>
                                    {t}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-faint"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-background-2 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="eyebrow">Next</p>
            <h2 className="display mt-3 text-4xl sm:text-6xl">
              Want one of these <span className="text-grad">for yourself?</span>
            </h2>
            <Link href="/contact" className="btn-primary mt-8">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
