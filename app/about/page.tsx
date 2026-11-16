import { profile, summary } from '@/data/site-content';

export default function AboutPage() {
  return (
    <div className="page-shell py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">About</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--text)]">Building software, data systems, and community.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8 text-[var(--muted)] leading-relaxed">
          {summary.split('\n\n').map((paragraph) => (
            <p key={paragraph} className="mb-5 last:mb-0">
              {paragraph}
            </p>
          ))}
        </article>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Core identity</p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              I am not just an AI student learning Python. I combine programming, product building, scientific research, and community leadership.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Academic profile</p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>Horus University</li>
              <li>Faculty of Artificial Intelligence</li>
              <li>Major: Intelligent Cybersecurity</li>
              <li>ICPC competitor</li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Coursework</p>
        <div className="mt-5 flex flex-wrap gap-2 text-sm text-[var(--text)]">
          {[
            'Programming',
            'Linear algebra',
            'Programming 2 (OOP)',
            'AI',
            'DSA',
            'Calculus',
            'Discrete Mathematics',
            'Cyber security fundamentals',
          ].map((item) => (
            <span key={item} className="rounded-full border border-[var(--border)] px-3 py-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
