'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  assetPath,
  certificates,
  currentlyLearning,
  featuredProjects,
  leadership,
  profile,
  skillGroups,
  stats,
} from '@/data/site-content';

const typedLines = [
  'Securing systems.',
  'Building software.',
  'Leading communities.',
];

const proofStats = [
  { value: 180, suffix: '+', label: 'community members' },
  { value: 300, suffix: '+', label: 'attendees' },
  { value: 2, suffix: '', label: 'career sessions' },
];

function Constellation({ className = '' }: { className?: string }) {
  const nodes = [
    { x: 40, y: 70 },
    { x: 120, y: 32 },
    { x: 200, y: 70 },
    { x: 260, y: 140 },
    { x: 120, y: 170 },
    { x: 300, y: 210 },
    { x: 360, y: 120 },
    { x: 430, y: 60 },
  ];

  return (
    <svg viewBox="0 0 480 260" className={className} role="img" aria-label="Constellation motif">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 70 L120 32 L200 70 L260 140 L120 170 L300 210 L360 120 L430 60" stroke="rgba(14,154,167,0.45)" strokeWidth="1.5" />
        <path d="M40 70 L120 170 L200 70 L360 120 L260 140" stroke="rgba(37,99,235,0.4)" strokeWidth="1.5" />
        {nodes.map((node, index) => (
          <circle
            key={`${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r={index === 3 || index === 5 ? 4.5 : 3.2}
            fill={index === 3 || index === 5 ? '#E8A317' : '#0E9AA7'}
          />
        ))}
      </g>
    </svg>
  );
}

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.8)] p-4 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
      <div className="text-3xl font-black text-[var(--ink)] sm:text-4xl">
        {display}
        {suffix}
      </div>
      <p className="mt-1 text-sm text-[var(--slate)]">{label}</p>
    </div>
  );
}

export default function HomePage() {
  const [typedText, setTypedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const profileImageSrc = assetPath('/fady-profile.jpeg');

  useEffect(() => {
    const currentLine = typedLines[lineIndex % typedLines.length];

    if (charIndex <= currentLine.length) {
      const nextText = currentLine.slice(0, charIndex);
      const timeout = window.setTimeout(() => {
        setTypedText(nextText);
        setCharIndex((current) => current + 1);
      }, 70);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setLineIndex((current) => (current + 1) % typedLines.length);
      setCharIndex(0);
    }, 1400);

    return () => window.clearTimeout(timeout);
  }, [charIndex, lineIndex]);

  return (
    <div className="bg-[var(--bg)] text-[var(--ink)]">
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[linear-gradient(135deg,#EAF3FB_0%,#FBF9F4_55%,#F3E7CF_100%)]">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute inset-0 opacity-80">
          <Constellation className="h-full w-full" />
        </div>

        <div className="page-shell relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.8)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ink)] shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--coral)] animate-pulse" />
                Available for Opportunities
              </span>

              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--slate)]">
                Intelligent Cybersecurity Student | Software Developer | Open Source Advocate
              </p>

              <h1 className="mt-4 text-balance text-4xl font-black tracking-[-0.06em] text-[var(--ink)] sm:text-5xl lg:text-7xl">
                Fady Elqattan
              </h1>

              <div className="mt-4 min-h-[2.25rem] text-xl font-semibold text-[var(--teal-text)] sm:text-2xl">
                {typedText}
                <span className="typed-cursor" aria-hidden="true" />
              </div>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--slate)]">
                I build secure systems, scientific tools, and community-led technology with a sharp focus on cybersecurity, AI, and honest engineering.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/projects" className="w-full rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_30px_rgba(37,99,235,0.18)] transition hover:-translate-y-0.5 sm:w-auto">
                  View Projects
                </Link>
                <Link href="/contact" className="w-full rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.8)] px-6 py-3 text-center text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto">
                  Contact Me
                </Link>
                <a href={profile.cvUrl} className="w-full rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.8)] px-6 py-3 text-center text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto">
                  Download CV
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-[var(--slate)]">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.9)] px-3 py-2 transition hover:border-[var(--primary)] hover:text-[var(--primary)] max-[380px]:w-full max-[380px]:text-center">
                  LinkedIn
                </a>
                <a href={profile.githubPrimary} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.9)] px-3 py-2 transition hover:border-[var(--primary)] hover:text-[var(--primary)] max-[380px]:w-full max-[380px]:text-center">
                  GitHub
                </a>
                <a href={`mailto:${profile.email}`} className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.9)] px-3 py-2 transition hover:border-[var(--primary)] hover:text-[var(--primary)] max-[380px]:w-full max-[380px]:text-center">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-[36px] bg-[radial-gradient(circle,_rgba(37,99,235,0.12),transparent_62%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[rgba(255,255,255,0.72)] p-4 shadow-[0_30px_80px_rgba(37,99,235,0.08)] backdrop-blur-sm">
                <div className="absolute inset-0 opacity-80 constellation-grid" />
                <div className="relative rounded-[24px] border border-[var(--border)] bg-[rgba(255,255,255,0.9)] p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--slate)]">
                      Illustrative profile
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-[10px] font-medium text-[var(--ink)]">
                      <span className="inline-block h-2 w-2 rounded-full bg-[var(--coral)] animate-pulse" />
                      Available
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
                    <div className="relative flex min-h-[120px] items-center justify-center overflow-hidden rounded-[22px] border border-[var(--border)] bg-[linear-gradient(135deg,#EAF3FB,#FBF9F4)]">
                      <Image
                        src={profileImageSrc}
                        alt="Fady Elqattan profile"
                        width={120}
                        height={120}
                        priority
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="space-y-3 text-sm text-[var(--slate)]">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--slate)]">Name</div>
                        <div className="mt-1 font-semibold text-[var(--ink)]">Fady Elqattan</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--slate)]">Focus</div>
                        <div className="mt-1 font-medium text-[var(--ink)]">Cybersecurity · AI · Software</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--slate)]">Location</div>
                        <div className="mt-1 font-medium text-[var(--ink)]">Horus University, Egypt</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--tint)] p-3">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--slate)]">Interests</div>
                      <div className="mt-2 text-sm font-medium text-[var(--ink)]">Networks, OS, Reverse Engineering</div>
                    </div>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--sand)] p-3">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--slate)]">Community</div>
                      <div className="mt-2 text-sm font-medium text-[var(--ink)]">Evolve-AISU HUE leadership</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[rgba(234,243,251,0.35)]">
        <div className="page-shell grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
          {proofStats.map((item) => (
            <AnimatedCounter key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
          ))}
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--slate)]">Security in action</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--ink)] sm:text-4xl">
            Calm, precise, and built around thoughtful defense.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[#f5f8fb] p-4 shadow-[0_18px_40px_rgba(37,99,235,0.06)]">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-[var(--border)] pb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--slate)]">
              <span>Illustrative scan</span>
              <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.75)] px-2 py-1 text-[9px] text-[var(--ink)]">
                monitor: live
              </span>
            </div>
            <pre className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[#0f172a] p-4 text-sm leading-7 text-[#dbeafe]">
{`$ security.scan --scope=network
[INFO]  target: internal-lab-01
[OK]    firewall baseline: aligned
[OK]    endpoint telemetry: healthy
[WARN]  app behavior drift: 0.12
[INFO]  response: safe + monitored
[OK]    risk posture: low
`}
            </pre>
          </div>

          <div className="space-y-4 rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[0_18px_40px_rgba(37,99,235,0.05)]">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--tint)] p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--slate)]">Core focus</p>
              <div className="mt-3 space-y-3 text-sm text-[var(--ink)]">
                <div className="flex items-center justify-between"><span>Network defense</span><span className="text-[var(--teal-text)]">Growing</span></div>
                <div className="flex items-center justify-between"><span>System internals</span><span className="text-[var(--teal-text)]">Growing</span></div>
                <div className="flex items-center justify-between"><span>Reverse engineering</span><span className="text-[var(--gold-text)]">Growing</span></div>
                <div className="flex items-center justify-between"><span>Pen testing</span><span className="text-[var(--gold-text)]">Growing</span></div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--sand)] p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--slate)]">Current work</p>
              <p className="mt-3 text-base font-medium text-[var(--ink)]">
                Building scientific and security-oriented tooling that is both understandable and useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--slate)]">Selected work</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--ink)] sm:text-4xl">
              Practical projects with real intent.
            </h2>
          </div>
          <Link href="/projects" className="text-sm font-medium text-[var(--primary)]">
            Explore all →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className="group block rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] p-5 shadow-[0_18px_40px_rgba(37,99,235,0.05)] transition duration-200 hover:-translate-y-1 hover:border-[var(--primary)]">
              <div className="mb-5 overflow-hidden rounded-[20px] border border-[var(--border)] bg-[linear-gradient(135deg,#EAF3FB,#FBF9F4_60%,#F3E7CF)] p-2">
                <Image
                  src={project.image}
                  alt={`${project.title} cover`}
                  width={640}
                  height={360}
                  className="h-28 w-full rounded-[14px] object-cover"
                />
              </div>

              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="status-badge" data-status={project.status}>
                  {project.status}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--slate)]">{project.type}</span>
              </div>

              <h3 className="text-xl font-bold text-[var(--ink)]">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--slate)]">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((item) => (
                  <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--tint)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--ink)]">
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[rgba(234,243,251,0.35)] py-16 sm:py-20">
        <div className="page-shell">
          <div className="mb-10 max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--slate)]">Skills map</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--ink)] sm:text-4xl">
              Honest strengths, mapped by depth and confidence.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[24px] border border-[var(--border)] bg-[rgba(255,255,255,0.8)] p-5 shadow-[0_18px_40px_rgba(37,99,235,0.04)]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-[var(--ink)]">{group.title}</h3>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--sand)] px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-[var(--gold-text)]">
                    Growing
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-xs font-medium text-[var(--ink)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--slate)]">Certificates & credentials</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--ink)] sm:text-4xl">
            Learning through recognized security and technical foundations.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {certificates.map((certificate) => (
            <div key={certificate} className="rounded-[22px] border border-[var(--border)] bg-[rgba(255,255,255,0.82)] p-4 shadow-[0_12px_30px_rgba(37,99,235,0.04)]">
              <div className="mb-3 h-10 w-10 rounded-xl bg-[var(--tint)] border border-[var(--border)]" />
              <div className="text-sm font-semibold text-[var(--ink)]">{certificate}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--slate)]">Leadership</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--ink)] sm:text-4xl">
            Building communities where technology becomes opportunity.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-[linear-gradient(135deg,#EAF3FB_0%,#FBF9F4_50%,#F3E7CF_100%)] p-6 shadow-[0_18px_40px_rgba(37,99,235,0.06)]">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--slate)]">Community</p>
            <h3 className="mt-4 text-2xl font-black text-[var(--ink)]">Evolve-AISU HUE</h3>
            <p className="mt-4 text-base leading-7 text-[var(--slate)]">{leadership.details}</p>
            <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.7)] p-4 text-sm text-[var(--ink)]">
              <div className="font-semibold text-[var(--ink)]">Key themes</div>
              <ul className="mt-3 space-y-2 text-[var(--slate)]">
                <li>• AI and software career development</li>
                <li>• Technical education and team building</li>
                <li>• Open-source culture and growth</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-px bg-[var(--border)]" />
            <div className="space-y-5">
              {leadership.initiatives.map((initiative, index) => (
                <div key={initiative} className="relative">
                  <div className="absolute -left-[1.55rem] top-3 h-3 w-3 rounded-full border-2 border-[var(--surface)] bg-[var(--primary)]" />
                  <div className="rounded-[24px] border border-[var(--border)] bg-[rgba(255,255,255,0.82)] p-4 shadow-[0_12px_30px_rgba(37,99,235,0.03)]">
                    <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[var(--slate)]">
                      milestone {index + 1}
                    </div>
                    <p className="text-base font-medium text-[var(--ink)]">{initiative}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(234,243,251,0.38)] py-16 sm:py-20">
        <div className="page-shell">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--slate)]">Live GitHub</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--ink)] sm:text-4xl">
                Public work and contribution activity.
              </h2>
            </div>
            <a href={profile.githubPrimary} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--primary)]">
              View profile →
            </a>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.82)] p-5 shadow-[0_18px_40px_rgba(37,99,235,0.05)]">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--slate)]">Contribution graph</span>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--tint)] px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-[var(--ink)]">
                    static fallback
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 28 }, (_, index) => (
                    <span
                      key={index}
                      className="h-4 rounded-[4px]"
                      style={{
                        background:
                          index % 6 === 0
                            ? 'rgba(37,99,235,0.16)'
                            : index % 4 === 0
                              ? 'rgba(14,154,167,0.18)'
                              : 'rgba(37,99,235,0.06)',
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {['Beyond Earth', 'MDSimulation Dashboard', 'Portfolio Site'].map((repo) => (
                  <div key={repo} className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-semibold text-[var(--ink)]">{repo}</div>
                      <span className="status-badge" data-status="Completed">
                        live
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--slate)]">
                      Public project work that reflects ongoing learning and software delivery in security, research, and open-source tooling.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-4">
        <div className="marquee-track flex min-w-max gap-4 whitespace-nowrap px-2 text-sm font-medium text-[var(--slate)]">
          {[...currentlyLearning, ...currentlyLearning].map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--tint)] px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[var(--ink)]">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[linear-gradient(135deg,#EAF3FB_0%,#FBF9F4_55%,#F3E7CF_100%)] p-6 shadow-[0_30px_80px_rgba(37,99,235,0.08)] sm:p-8">
          <div className="absolute inset-0 opacity-60">
            <Constellation className="h-full w-full" />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--slate)]">Contact</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--ink)] sm:text-4xl">
                I’m always open to good ideas, hard problems, and meaningful collaboration.
              </h2>
            </div>

            <div className="flex flex-wrap justify-start gap-3 lg:justify-end">
              <a href={`mailto:${profile.email}`} className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(37,99,235,0.18)]">
                Email Me
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.8)] px-6 py-3 text-sm font-semibold text-[var(--ink)]">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
