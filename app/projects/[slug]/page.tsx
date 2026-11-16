import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/site-content';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page-shell py-16">
      <div className="mb-8 flex items-center justify-between gap-4">
        <Link href="/projects" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">← Back to projects</Link>
        <span className="status-badge" data-status={project.status}>{project.status}</span>
      </div>

      <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{project.type}</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--text)]">{project.title}</h1>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)]"
          >
            GitHub link
          </a>
        </div>

        <div className="mb-10 overflow-hidden rounded-2xl border border-[var(--border)] bg-[linear-gradient(135deg,var(--panel-soft),var(--bg))] p-3">
          <Image
            src={project.image}
            alt={`${project.title} project cover`}
            width={1280}
            height={720}
            className="h-60 w-full rounded-2xl object-cover"
          />
        </div>

        <div className="case-study-grid">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[var(--text)]">Problem</h2>
              <p className="mt-3 text-[var(--muted)]">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text)]">Solution</h2>
              <p className="mt-3 text-[var(--muted)]">{project.solution}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text)]">My role</h2>
              <p className="mt-3 text-[var(--muted)]">{project.myRole}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text)]">Tech stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text)]">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[var(--text)]">Key features</h2>
              <ul className="mt-3 space-y-3 text-[var(--muted)]">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text)]">Architecture</h2>
              <p className="mt-3 text-[var(--muted)]">{project.architecture}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text)]">Results / Learnings</h2>
              <p className="mt-3 text-[var(--muted)]">{project.result}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text)]">Screenshots / Demo</h2>
              <p className="mt-3 text-[var(--muted)]">{project.demo}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
