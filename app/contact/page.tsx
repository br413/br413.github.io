import { ArrowUpRight, Check } from 'lucide-react'
import { Portrait } from '@/components/portrait'
import { Reveal } from '@/components/fx'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata = {
  title: 'Contact',
  description: `Get in touch with ${SITE_CONFIG.name} — software engineer specializing in AI, full-stack, and Windows programming. Every conversation starts with a simple hello.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact | ${SITE_CONFIG.name}`,
    description: `Get in touch with ${SITE_CONFIG.name} — software engineer specializing in AI, full-stack, and Windows programming.`,
  },
}

const contactLinks = [
  { title: 'Email', note: 'Best way to reach me', href: `mailto:${SITE_CONFIG.email}` },
  { title: 'GitHub', note: 'Open source and side projects', href: SITE_CONFIG.github },
]

const trustSignals = [
  'Available for new opportunities',
  'Open to remote or on-site',
  'Comfortable with any stack',
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-40">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <Portrait size={72} className="mb-7" priority />
            <p className="eyebrow">Contact</p>
            <h1 className="display mt-3 text-4xl sm:text-6xl lg:text-7xl">
              Have a problem <span className="text-grad">nobody</span>
              <br />
              else can figure out?
            </h1>
            <p className="mt-6 max-w-[52ch] leading-relaxed text-dim">
              Whether your concerns are related to software development or everyday life, please
              feel free to contact me anytime if you&apos;re facing any difficulties.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mt-12 inline-block border-b-2 border-accent pb-1 text-2xl font-semibold tracking-tight transition-colors hover:text-accent sm:text-4xl"
            >
              {SITE_CONFIG.email}
            </a>
            <p className="mt-5 text-sm text-dim">
              I typically respond within two hours. Every conversation starts with a simple hello —
              I read every message.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Channels */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="border-t border-line">
              {contactLinks.map((link, i) => (
                <a
                  key={link.title}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="group grid grid-cols-[2.4rem_1fr_auto] items-baseline gap-4 border-b border-line px-1 py-6 transition-[padding,background-color] duration-300 hover:bg-background-2 hover:pl-4"
                >
                  <span className="mono-label pt-1">0{i + 1}</span>
                  <span>
                    <span className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {link.title}
                    </span>
                    <span className="ml-4 hidden text-sm text-dim sm:inline">{link.note}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {trustSignals.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-sm text-dim">
                  <Check className="h-3.5 w-3.5 text-accent" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
