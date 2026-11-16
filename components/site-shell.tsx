'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile, navigation } from '@/data/site-content';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] antialiased">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(251,249,244,0.84)] backdrop-blur-xl text-[var(--ink)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-tight text-[var(--ink)]">
            {profile.fullName}
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-5 md:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? 'text-[var(--primary)]' : 'text-[var(--slate)] hover:text-[var(--ink)]'}
                  style={{ color: isActive ? 'var(--primary)' : undefined }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

        </div>
      </header>

      <main id="main-content" className="min-h-[calc(100vh-200px)]">
        {children}
      </main>

      <footer className="border-t border-[var(--border)] bg-[rgba(255,255,255,0.7)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-semibold text-[var(--ink)]">{profile.fullName}</p>
            <p className="mt-2 text-sm text-[var(--slate)]">{profile.title}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--slate)]">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)]">
              LinkedIn
            </a>
            <a href={profile.githubPrimary} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)]">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-[var(--primary)]">
              Email
            </a>
            <a href={profile.cvUrl} className="hover:text-[var(--primary)]">
              CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
