import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Sparkles, Star, Zap } from 'lucide-react'
import { Orb } from '@/components/orb'
import { Portrait } from '@/components/portrait'
import { Reveal, MountReveal, Stagger, StaggerItem, Counter, Marquee } from '@/components/fx'
import { FeaturedCard, type FeaturedProject } from '@/components/featured-card'
import { experiences, projectHighlights, skillCategories, testimonials } from '@/lib/data'

const featured: FeaturedProject[] = [
  { title: 'Supakon', blurb: 'AI expert marketplace where four models — LLaMA, Mistral, GPT, Gemini — score every candidate in parallel, with RAG matching and hybrid fraud detection.', year: '2024', href: 'https://supakon.com', image: '/projects/supakon.jpg', tags: ['LangChain', 'RAG', 'Pinecone', 'Next.js'] },
  { title: 'StrongGate', blurb: '280 Hikvision cameras feeding a YOLO detection pipeline that opens and closes physical gates through PLC control — with fail-safe defaults.', year: '2021', href: undefined, image: '/projects/stronggate.jpg', tags: ['YOLO', 'OpenCV', 'PLC', 'C++'] },
  { title: 'HindSight', blurb: 'Real-time on-chain analytics with sub-second latency and unsupervised anomaly detection on wallet clustering, rendered with D3.', year: '2024', href: 'https://hindsight.vip', image: '/projects/hindsight.jpg', tags: ['WebSocket', 'D3.js', 'Node.js', 'Redis'] },
  { title: 'Author Wizard', blurb: 'AI book-writing assistant — outline, draft, revise — with stateful prompt chains that keep a whole book’s characters consistent.', year: '2023', href: 'https://bookwiz.io', image: '/projects/author-wizard.jpg', tags: ['GPT', 'Gemini', 'React', 'WordPress'] },
  { title: 'Audie.ai', blurb: 'Authors upload a manuscript, map character voices to ElevenLabs, and a full audiobook comes out — narration and dialogue auto-detected.', year: '2023', href: 'https://audie.ai', image: '/projects/audie-ai.jpg', tags: ['ElevenLabs', 'TTS', 'WordPress', 'PHP'] },
  { title: 'MR Pay', blurb: 'Alipay-scale digital payments with blockchain-inspired transaction signing, multi-party settlement, and scalable backend services.', year: '2020', href: undefined, image: '/projects/mr-pay.jpg', tags: ['Node.js', 'Oracle DB', 'Blockchain', 'Redis'] },
]

const storyMoments = [
  { year: '1994', text: 'Born a year before Windows 95' },
  { year: 'age 14', text: 'C/C++, Win32, a VNC-style remote tool' },
  { year: '2015', text: 'The power outage — main.cpp lost, lesson permanent' },
  { year: '2017', text: 'LibreOffice docs covering three office walls' },
  { year: '2020', text: '280 cameras opening real gates' },
  { year: '2024', text: 'A nine-year promise, finally shipped' },
]

const exploreLinks = [
  { href: '/resume', title: 'Resume', note: 'Experience, skills, education — printable' },
  { href: '/blog', title: 'Blog', note: 'Nine Years, and Uncle — and more' },
  { href: '/profile', title: 'Profile', note: 'Psychometrics & ENFJ-T, data on the person' },
]

export default function Home() {
  const technologiesCount = skillCategories.reduce((acc, c) => acc + c.skills.length, 0)
  const marqueeSkills = skillCategories.flatMap((c) => c.skills)
  const half = Math.ceil(marqueeSkills.length / 2)

  return (
    <>
      {/* ================= HERO ================= */}
      <header className="relative flex min-h-svh items-center overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
        <Orb />
        <div className="hero-fade pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8 lg:px-10">
          <MountReveal>
            <div className="flex flex-wrap items-center gap-3">
              <Portrait size={48} priority />
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/60 px-4 py-2 font-mono text-[0.72rem] tracking-[0.14em] text-dim backdrop-blur">
                <i className="status-dot" />
                AVAILABLE FOR NEW OPPORTUNITIES
              </span>
              <span className="hidden items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-2 font-mono text-[0.72rem] tracking-[0.14em] text-dim backdrop-blur sm:inline-flex">
                <Star className="h-3 w-3 fill-accent text-accent" />
                10+ YEARS · {projectHighlights.length} NAMED PRODUCTS
              </span>
            </div>
          </MountReveal>
          <MountReveal delay={0.06}>
            <p className="eyebrow mt-9">Senior Software Engineer — AI · Full-Stack · Windows</p>
          </MountReveal>
          <MountReveal delay={0.12}>
            <h1 className="display mt-4 text-6xl sm:text-8xl lg:text-[8.25rem]">
              <span className="text-grad">Brian Yang</span>
            </h1>
          </MountReveal>
          <MountReveal delay={0.18}>
            <p className="display mt-1 text-4xl text-foreground sm:text-6xl lg:text-[4.5rem]">
              builds what others <span className="text-grad">call impossible.</span>
            </p>
          </MountReveal>
          <MountReveal delay={0.24}>
            <p className="mt-7 max-w-[48ch] text-lg leading-relaxed text-dim">
              Software engineer since before it was a job —{' '}
              <span className="font-semibold text-foreground">
                Windows internals to multi-model AI pipelines
              </span>
              , with payments platforms, e-commerce at scale, and{' '}
              <span className="font-semibold text-foreground">{projectHighlights.length} shipped products I can name</span>{' '}
              in between, and a good deal more under NDA.
            </p>
          </MountReveal>
          <MountReveal delay={0.30}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {['Alipay-scale payments', 'Multi-model AI pipelines', 'Web3 & blockchain', 'Windows internals'].map(
                (chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-[0.8rem] text-dim"
                  >
                    <Zap className="h-3 w-3 text-accent" />
                    {chip}
                  </span>
                )
              )}
            </div>
          </MountReveal>
          <MountReveal delay={0.36}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/projects" className="btn-primary">
                See the work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Let&apos;s talk
              </Link>
            </div>
          </MountReveal>
        </div>
        <div className="absolute inset-x-0 bottom-6 z-10">
          <div className="mx-auto flex max-w-7xl justify-between px-5 font-mono text-[0.68rem] tracking-[0.18em] text-faint sm:px-8 lg:px-10">
            <span>EST. 1994 — FIRST LINE OF PASCAL</span>
            <span className="animate-pulse">SCROLL ↓</span>
          </div>
        </div>
      </header>

      {/* ================= SKILL MARQUEE ================= */}
      <section className="border-y border-line bg-background-2 py-8">
        <div className="flex flex-col gap-3">
          <Marquee items={marqueeSkills.slice(0, half)} duration={70} />
          <Marquee items={marqueeSkills.slice(half)} duration={85} reverse />
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: 10, suffix: '+', label: 'years professional' },
              { value: projectHighlights.length, suffix: '+', label: 'products I can name' },
              { value: technologiesCount, suffix: '', label: 'technologies' },
              { value: 15, suffix: '+', label: 'programming languages' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="gcard flex h-full flex-col items-center justify-center px-4 py-9 text-center">
                  <b className="display text-4xl sm:text-5xl">
                    <span className="text-grad">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </span>
                  </b>
                  <span className="mono-label mt-2">{stat.label}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section id="work" className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 className="display mt-3 text-4xl sm:text-6xl">
                  Built, shipped, <span className="text-grad">in production.</span>
                </h2>
              </div>
              <Link href="/projects" className="btn-ghost">
                All {projectHighlights.length} public projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <StaggerItem key={project.title} className="h-full">
                <FeaturedCard project={project} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ================= STORY BAND ================= */}
      <section className="border-y border-line bg-background-2 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <Reveal>
            <p className="eyebrow">The story · 23 paragraphs</p>
            <p className="display mt-5 text-3xl sm:text-4xl">
              “I dive headfirst into any software challenge, whether it pays or not,{' '}
              <span className="text-grad">just because I love it.</span>”
            </p>
            <Link href="/story" className="btn-primary mt-8">
              Read all of it — 12 min <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative border-l border-line pl-8">
              {storyMoments.map((m) => (
                <div key={m.year} className="relative pb-7 last:pb-0">
                  <span className="absolute -left-[2.15rem] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-grad-1 to-grad-3" />
                  <p className="font-mono text-xs tracking-widest text-accent">{m.year}</p>
                  <p className="mt-1 text-[0.95rem] text-dim">{m.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="mb-12">
              <p className="eyebrow">Experience</p>
              <h2 className="display mt-3 text-4xl sm:text-6xl">Five chapters of it.</h2>
            </div>
          </Reveal>
          <Stagger className="space-y-4">
            {experiences
              .slice()
              .reverse()
              .map((xp) => (
                <StaggerItem key={xp.title + xp.period}>
                  <div className="gcard grid gap-3 p-7 sm:grid-cols-[12rem_1fr] sm:gap-8">
                    <span className="mono-label pt-1.5 text-accent">{xp.period}</span>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {xp.title} <span className="text-grad">· {xp.company}</span>
                      </h3>
                      <p className="mt-2 max-w-[70ch] leading-relaxed text-dim">{xp.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
          </Stagger>
          <Reveal>
            <Link href="/resume" className="mt-8 inline-flex items-center gap-2 font-medium text-accent hover:text-accent-bright">
              Full resume with details <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="border-t border-line bg-background-2 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <Sparkles className="mx-auto h-7 w-7 text-accent" />
              <p className="display mt-6 text-2xl sm:text-4xl">
                “{testimonials[0].quote}”
              </p>
              <p className="mono-label mt-7">
                {testimonials[0].author} — {testimonials[0].role}
              </p>
            </div>
          </Reveal>
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2">
            {testimonials.slice(1).map((t) => (
              <StaggerItem key={t.role}>
                <figure className="gcard h-full p-7">
                  <blockquote className="leading-relaxed text-dim">“{t.quote}”</blockquote>
                  <figcaption className="mono-label mt-5">
                    {t.author} — {t.role}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ================= EXPLORE ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="eyebrow">Keep exploring</p>
            <h2 className="display mt-3 mb-10 text-3xl sm:text-5xl">More of the story.</h2>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-3">
            {exploreLinks.map((l, i) => (
              <StaggerItem key={l.href}>
                <Link href={l.href} className="gcard group flex h-full flex-col p-7">
                  <span className="mono-label text-accent">0{i + 1}</span>
                  <span className="mt-4 flex items-center gap-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {l.title}
                    <ArrowUpRight className="h-5 w-5 text-faint transition-colors group-hover:text-accent" />
                  </span>
                  <span className="mt-2 text-sm text-dim">{l.note}</span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
