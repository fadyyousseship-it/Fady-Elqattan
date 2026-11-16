import { experience } from '@/data/site-content';

export default function ExperiencePage() {
  return (
    <div className="page-shell py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Experience</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--text)]">Educational content, teaching support, and learning design.</h1>
      </div>

      <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--text)]">{experience.title}</h2>
            <p className="mt-2 text-[var(--muted)]">{experience.role} · {experience.organization}</p>
          </div>
          <span className="status-badge">Teaching</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Areas</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {experience.areas.map((item) => (
                <span key={item} className="rounded-full border border-[var(--border)] px-3 py-2 text-[var(--text)]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Levels covered</p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>Grade 2 Preparatory Science</li>
              <li>Grade 5–6 Science</li>
              <li>Grade 2 Baccalaureate Programming & AI</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Work</p>
          <ul className="mt-4 space-y-3 text-[var(--muted)]">
            {experience.responsibilities.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg)] p-4 text-sm text-[var(--muted)]">
          {experience.placeholder}
        </div>
      </div>
    </div>
  );
}
