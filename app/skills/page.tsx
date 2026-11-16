import { skillGroups } from '@/data/site-content';

export default function SkillsPage() {
  return (
    <div className="page-shell py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Skills</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--text)]">Technical foundation and applied learning.</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{group.title}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text)]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6">
        <p className="text-sm text-[var(--muted)]">Levels are self-assessed, not formal certifications.</p>
      </div>
    </div>
  );
}
