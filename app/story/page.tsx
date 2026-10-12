import { Reveal } from '@/components/fx'
import { storyParagraphs, storyTitle } from '@/lib/data'

export const metadata = {
  title: 'My Story',
  description: 'The full personal journey from Windows 95 to AI — how Brian Yang became the developer he is today.',
  alternates: { canonical: '/story' },
  openGraph: {
    title: 'My Story | Brian Yang',
    description: 'The full personal journey from Windows 95 to AI — how Brian Yang became the developer he is today.',
  },
}

const keyMoments = [
  { year: '1994', label: 'Windows 95 era', detail: 'started with legacy OSes' },
  { year: 'age 14', label: 'First C/C++', detail: 'Pascal first, then the real thing' },
  { year: '2015', label: 'The power outage', detail: 'main.cpp lost, lesson permanent' },
  { year: '2015–19', label: 'Startup years', detail: 'polyglot crash course' },
  { year: '2019–22', label: 'Fintech at scale', detail: 'Alibaba-level payments' },
  { year: '2022–', label: 'AI era', detail: 'audiobooks & auto-completion' },
]

export default function StoryPage() {
  const firstHalf = storyParagraphs.slice(0, 7)
  const secondHalf = storyParagraphs.slice(7, 14)
  const finalPart = storyParagraphs.slice(14)

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-line pb-14 pt-36">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="eyebrow">The full journey · 23 paragraphs · 12 min</p>
            <h1 className="display mt-3 max-w-4xl text-4xl sm:text-6xl">
              <span className="text-grad">{storyTitle}</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_16rem] lg:px-10">
          <div className="min-w-0 max-w-[68ch]">
            <Reveal>
              <article className="prose-craft text-[1.05rem]">
                {firstHalf.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? 'first:text-foreground' : undefined}>
                    {paragraph}
                  </p>
                ))}
              </article>
            </Reveal>

            {/* Pull quote breaker */}
            <Reveal className="my-16">
              <blockquote className="border-l-2 border-accent pl-7 text-2xl font-medium leading-relaxed tracking-tight text-balance">
                “I would never claim experience I don&apos;t have, and the things I have done, I
                remember with precision.”
              </blockquote>
            </Reveal>

            <Reveal>
              <article className="prose-craft text-[1.05rem]">
                {secondHalf.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </article>
            </Reveal>

            {/* Final section */}
            <Reveal className="mt-16">
              <div className="rounded-2xl border border-line bg-background-2 p-8 sm:p-10">
                <p className="mono-label mb-6 text-accent">ON SPECIALTY — THE HONEST ANSWER</p>
                <article className="prose-craft text-[1.05rem]">
                  {finalPart.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </article>
              </div>
            </Reveal>
          </div>

          {/* Sticky sidebar */}
          <Reveal delay={0.15}>
            <div className="sticky top-24">
              <p className="mono-label mb-5 text-accent">KEY MOMENTS</p>
              <div className="border-l border-line font-mono text-[0.78rem] leading-relaxed">
                {keyMoments.map((m) => (
                  <div key={m.label} className="-ml-px border-l border-transparent py-2.5 pl-5 hover:border-accent">
                    <p className="text-accent">{m.year}</p>
                    <p className="mt-0.5 font-sans text-sm font-medium text-foreground">{m.label}</p>
                    <p className="text-dim">{m.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
