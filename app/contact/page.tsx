import { ArrowUpRight, Check } from 'lucide-react'
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
  { title: 'Telegram', note: '@CtrlAltBomb', href: SITE_CONFIG.telegram },
  { title: 'WhatsApp', note: '+1 442 360 3951', href: SITE_CONFIG.whatsapp },
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

      {/* Contact options and message form */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-2">
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
                      <span className="mt-1 block text-sm text-dim sm:ml-4 sm:mt-0 sm:inline">{link.note}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
              <h2 id="contact-form-heading" className="text-2xl font-semibold tracking-tight">
                Send a message
              </h2>
              <form
                action={`https://formsubmit.co/${SITE_CONFIG.email}`}
                method="POST"
                aria-labelledby="contact-form-heading"
                className="mt-6 space-y-5"
              >
                <input type="hidden" name="_subject" value="New portfolio contact message" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_url" value={`${SITE_CONFIG.url}/contact/`} />
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className="w-full rounded-lg border border-line bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className="w-full rounded-lg border border-line bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    className="w-full resize-y rounded-lg border border-line bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <button type="submit" className="btn-primary justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  Send message
                </button>
              </form>
            </Reveal>
          </div>

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
