import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import { Orb } from '@/components/orb'
import { Reveal, MountReveal, Stagger, StaggerItem, Counter, Marquee } from '@/components/fx'
import { FeaturedCard, type FeaturedProject } from '@/components/featured-card'
import { experiences, projectHighlights, skillCategories, testimonials } from '@/lib/data'
import { BASE_PATH, SITE_CONFIG } from '@/lib/constants'

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
      <header className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
        <Orb />
        <div className="hero-fade pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto grid min-h-svh w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20 lg:px-10 lg:py-28">
          <div className="min-w-0 max-w-xl">
            <MountReveal>
              <h1 className="display text-[3.5rem] sm:text-7xl lg:text-[5rem] xl:text-[5.5rem]">
                <span className="text-grad">{SITE_CONFIG.name}</span>
              </h1>
            </MountReveal>
            <MountReveal delay={0.06}>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Senior Software Engineer
              </p>
            </MountReveal>
            <MountReveal delay={0.12}>
              <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-dim">
                I build software that solves practical problems. My focus is clear code, thoughtful
                design, and systems that are easy to use and maintain.
              </p>
            </MountReveal>
            <MountReveal delay={0.18}>
              <div className="mt-7 border-t border-line pt-5">
                <p className="mono-label !text-dim">Focus</p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-foreground">
                  {['Full-stack development', 'Applied AI', 'Windows systems'].map((focus) => (
                    <li key={focus}>{focus}</li>
                  ))}
                </ul>
              </div>
            </MountReveal>
            <MountReveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link href="/projects" className="btn-primary justify-center">
                  See the work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-ghost justify-center">
                  Let&apos;s talk
                </Link>
              </div>
            </MountReveal>
          </div>
          <MountReveal delay={0.18} className="mx-auto w-full max-w-sm lg:max-w-md lg:justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-panel shadow-xl">
              <Image
                src={`${BASE_PATH}/brian-yang-laptop.webp`}
                alt={`${SITE_CONFIG.name} working on a laptop`}
                fill
                sizes="(max-width: 424px) calc(100vw - 40px), (max-width: 1023px) 384px, 40vw"
                loading="eager"
                className="object-cover"
              />
            </div>
          </MountReveal>
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
