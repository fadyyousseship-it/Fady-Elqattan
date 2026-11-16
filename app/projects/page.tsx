import Link from 'next/link';
import { projects } from '@/data/site-content';

export default function ProjectsPage() {
  return (
    <div className="page-shell py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Projects</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--text)]">Problem-driven builds, research exploration, and product thinking.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:-translate-y-1 hover:border-[var(--primary)]">
            <div className="mb-5 h-32 rounded-2xl bg-[radial-gradient(circle_at_top_left,_var(--primary),_transparent_35%),linear-gradient(135deg,var(--panel-soft),var(--bg))]" />
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="status-badge" data-status={project.status}>{project.status}</span>
              <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">{project.type}</span>
            </div>
            <h2 className="text-xl font-bold text-[var(--text)]">{project.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((item) => (
                <span key={item} className="rounded-full bg-[var(--bg)] px-2 py-1 text-[11px] text-[var(--muted)]">
                  {item}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
