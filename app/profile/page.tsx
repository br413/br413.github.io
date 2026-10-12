import { Reveal } from '@/components/fx'
import { psychometricTraits, psychometricSummary, mbtiData } from '@/lib/data'

export const metadata = {
  title: 'Profile',
  description: 'Psychometric profile from Snaphunt and MBTI personality type (ENFJ-T) from 16Personalities — Brian Yang\'s working style and traits.',
  alternates: { canonical: '/profile' },
  openGraph: {
    title: 'Profile | Brian Yang',
    description: 'Psychometric profile from Snaphunt and MBTI personality type (ENFJ-T) from 16Personalities — Brian Yang\'s working style and traits.',
  },
}

export default function ProfilePage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-line pb-14 pt-36">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="eyebrow">Assessment · Snaphunt + 16Personalities</p>
            <h1 className="display mt-3 text-4xl sm:text-6xl">
              Data on <span className="text-grad">the person.</span>
            </h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-dim">
              Two independent assessments — the Snaphunt psychometric profile covering thinking
              style, execution, collaboration, and adaptability, and the 16Personalities MBTI
              inventory.
            </p>
            <p className="mono-label mt-7">
              TOP TRAITS — {psychometricSummary.topTraits.join(' · ').toUpperCase()}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Snaphunt traits */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="mb-2 flex items-center gap-4">
              <h2 className="mono-label text-accent">01 — SNAPHUNT PSYCHOMETRIC</h2>
              <div className="h-px flex-1 bg-line" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2">
            {psychometricTraits.map((trait, i) => (
              <Reveal key={trait.category} delay={(i % 2) * 0.08}>
                <div className="h-full border-b border-line py-10 sm:pr-10 sm:odd:border-r sm:even:pl-10">
                  <h3 className="text-xl font-semibold tracking-tight">{trait.category}</h3>
                  <p className="mono-label mt-1.5 text-accent">{trait.traits.join(' · ').toUpperCase()}</p>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-dim">{trait.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="mono-label mb-5 text-accent">ROLE FIT</p>
              <ul className="space-y-3">
                {psychometricSummary.roleFit.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-dim">
                    <span className="select-none pt-px text-accent">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mono-label mb-5 text-accent">ORGANIZATION FIT</p>
              <ul className="space-y-3">
                {psychometricSummary.organizationFit.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-dim">
                    <span className="select-none pt-px text-accent">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MBTI */}
      <section className="border-t border-line bg-background-2 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="mb-12 flex items-center gap-4">
              <h2 className="mono-label text-accent">02 — 16PERSONALITIES MBTI</h2>
              <div className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-[minmax(0,22rem)_1fr]">
            <Reveal>
              <p className="display text-6xl sm:text-7xl">
                <span className="text-grad">{mbtiData.type}</span>
              </p>
              <p className="mono-label mt-3">
                “{mbtiData.typeName.toUpperCase()}” · {mbtiData.role.toUpperCase()}
              </p>
              <div className="mt-10 space-y-6">
                {mbtiData.traits.map((trait) => (
                  <div key={trait.label}>
                    <div className="flex items-baseline justify-between font-mono text-[0.72rem] tracking-[0.1em]">
                      <span className="text-foreground">
                        {trait.percent}% {trait.label.toUpperCase()}
                      </span>
                      <span className="text-faint">{trait.opposite.toUpperCase()}</span>
                    </div>
                    <div className="mt-2 h-px w-full bg-line">
                      <div className="-mt-px h-[3px] rounded-full bg-gradient-to-r from-grad-1 via-grad-2 to-grad-3" style={{ width: `${trait.percent}%` }} />
                    </div>
                    <p className="mono-label mt-1.5">{trait.category}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="prose-craft max-w-[66ch]">
                {mbtiData.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-12 border-t border-line">
                {mbtiData.sections.map((section) => (
                  <div
                    key={section.title}
                    className="grid gap-2 border-b border-line py-7 sm:grid-cols-[10rem_1fr] sm:gap-8"
                  >
                    <p className="mono-label pt-1.5 text-accent">{section.title.toUpperCase()}</p>
                    <div>
                      {section.paragraphs.map((p, i) => (
                        <p key={i} className="text-[0.92rem] leading-relaxed text-dim">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
