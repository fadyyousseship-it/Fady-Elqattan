import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site-shell';
import { profile, seo } from '@/data/site-content';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fadyyousseship-it.github.io/Portofolio'),
  title: {
    default: `${profile.name} | Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description: seo.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description: seo.description,
    type: 'website',
    siteName: seo.siteName,
    images: ['/brand/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | Portfolio`,
    description: seo.description,
    images: ['/brand/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    url: profile.linkedin,
    sameAs: [profile.linkedin, profile.githubPrimary, profile.githubSecondary, profile.aisuUrl],
    alumniOf: 'Horus University',
    description: seo.description,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
