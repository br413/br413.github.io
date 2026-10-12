import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { BASE_PATH, SITE_CONFIG } from "@/lib/constants";
import { getProfileImage } from "@/lib/profile-image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  verification: {
    google: 'tmuS6i3hrTbfIXr8W78PZeYxef0q2Nk73dkIH6csWcY',
  },
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.summary,
  keywords: [
    'Brian Yang',
    'Software Engineer',
    'Full-Stack Developer',
    'AI Engineer',
    'LLM',
    'LangChain',
    'RAG',
    'Windows Programming',
    'C#',
    'Android Development',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Node.js',
    'AWS',
    'Blockchain',
    'Web3',
    'Computer Vision',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: `${BASE_PATH}/favicon.png`,
    shortcut: `${BASE_PATH}/favicon.png`,
    apple: `${BASE_PATH}/favicon.png`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.summary,
    images: [
      {
        url: `${SITE_CONFIG.url}/favicon.png`,
        width: 512,
        height: 512,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.summary,
    images: [`${SITE_CONFIG.url}/favicon.png`],
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: SITE_CONFIG.name,
              jobTitle: SITE_CONFIG.title,
              ...(getProfileImage()
                ? { image: `${SITE_CONFIG.url}${getProfileImage()}` }
                : {}),
              description: SITE_CONFIG.summary,
              email: `mailto:${SITE_CONFIG.email}`,
              url: SITE_CONFIG.url,
              sameAs: [
                SITE_CONFIG.github,
              ],
              knowsAbout: [
                'Software Engineering',
                'AI Engineering',
                'LLM Orchestration',
                'Full-Stack Development',
                'Windows Programming',
                'Android Development',
                'Computer Vision',
                'Blockchain',
              ],
            }),
          }}
        />
        <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
