import { leadership } from '@/data/site-content';

export default function LeadershipPage() {
  return (
    <div className="page-shell py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Leadership & Community</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--text)]">Building technical communities and opportunities around learning.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Organization</p>
          <h2 className="mt-4 text-2xl font-bold text-[var(--text)]">{leadership.organization}</h2>
          <p className="mt-4 text-[var(--muted)]">{leadership.details}</p>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Role</p>
          <p className="mt-4 text-xl font-semibold text-[var(--text)]">{leadership.role}</p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-[var(--muted)]">
            <span className="rounded-full border border-[var(--border)] px-3 py-2">Community building</span>
            <span className="rounded-full border border-[var(--border)] px-3 py-2">Technical leadership</span>
            <span className="rounded-full border border-[var(--border)] px-3 py-2">Open-source culture</span>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Initiatives</p>
        <ul className="mt-6 space-y-4 text-[var(--muted)]">
          {leadership.initiatives.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
