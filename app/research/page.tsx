import { openSource, researchInterests } from '@/data/site-content';

export default function ResearchPage() {
  return (
    <div className="page-shell py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Research</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--text)]">Research interests and open-source exploration.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Research interests</p>
          <ul className="mt-5 space-y-4 text-[var(--muted)]">
            {researchInterests.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Open source</p>
          <h2 className="mt-4 text-2xl font-bold text-[var(--text)]">{openSource.title}</h2>
          <p className="mt-4 text-[var(--muted)]">{openSource.description}</p>
          <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
            <p className="text-sm uppercase tracking-[0.14em] text-[var(--muted)]">Project idea</p>
            <p className="mt-2 text-lg font-semibold text-[var(--text)]">{openSource.projectIdea}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
