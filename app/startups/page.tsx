import { ventures } from '@/data/site-content';

export default function StartupsPage() {
  return (
    <div className="page-shell py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Product Concepts / Ventures in Development</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--text)]">Ideas with product and research direction.</h1>
      </div>

      <div className="grid gap-8">
        {ventures.map((venture) => (
          <article key={venture.name} className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-[var(--text)]">{venture.name}</h2>
              <span className="status-badge">Concept</span>
            </div>

            <p className="mt-5 text-[var(--muted)] leading-relaxed">{venture.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {venture.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text)]">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
