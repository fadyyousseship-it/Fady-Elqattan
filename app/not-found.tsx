import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[60vh] items-center justify-center py-20">
      <div className="max-w-xl rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-10 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">404</p>
        <h1 className="mt-4 text-4xl font-black text-[var(--text)]">Page not found</h1>
        <p className="mt-4 text-[var(--muted)]">The page you are looking for does not exist or may have moved.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[#08131b]">
          Return home
        </Link>
      </div>
    </div>
  );
}
