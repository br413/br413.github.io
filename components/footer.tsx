import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

const footerLinks = [
  { href: '/story', label: 'Story' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Work' },
  { href: '/profile', label: 'Profile' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-background-2">
      <div className="aurora opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Let&apos;s build</p>
            <h2 className="display mt-3 text-3xl sm:text-5xl">
              Have something <span className="text-grad">impossible</span>?
            </h2>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mt-6 inline-flex items-center gap-2 text-lg font-semibold transition-colors hover:text-accent"
            >
              {SITE_CONFIG.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-dim transition-colors hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 font-mono text-[0.7rem] tracking-[0.14em] text-faint">
          <span>© 2026 Brian Yang</span>
          <span className="flex gap-4">
            <Link href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
              GITHUB
            </Link>
          </span>
          <span>PASCAL → AI · 1994 → ∞</span>
        </div>
      </div>
    </footer>
  )
}
