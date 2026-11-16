'use client';

import { FormEvent, useState } from 'react';
import { profile } from '@/data/site-content';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError('Please complete the form before sending your message.');
      setSubmitted(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formState.email)) {
      setError('Please enter a valid email address.');
      setSubmitted(false);
      return;
    }

    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${formState.name}`)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.location.href = mailtoLink;
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="page-shell py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Contact</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--text)]">Let’s build something meaningful.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8">
          <h2 className="text-2xl font-bold text-[var(--text)]">Connect</h2>
          <div className="mt-6 space-y-4 text-[var(--muted)]">
            <p><strong className="text-[var(--text)]">Email:</strong> <a href={`mailto:${profile.email}`} className="hover:text-[var(--primary)]">{profile.email}</a></p>
            <p><strong className="text-[var(--text)]">LinkedIn:</strong> <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)]">Profile</a></p>
            <p><strong className="text-[var(--text)]">GitHub:</strong> <a href={profile.githubPrimary} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)]">Main account</a></p>
            <p><strong className="text-[var(--text)]">CV:</strong> <a href={profile.cvUrl} className="hover:text-[var(--primary)]">Download PDF</a></p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8">
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--text)]">Name</label>
              <input
                id="name"
                name="name"
                value={formState.name}
                onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--primary)]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text)]">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formState.email}
                onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--primary)]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--text)]">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formState.message}
                onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--primary)]"
                placeholder="Tell me about the opportunity or idea."
              />
            </div>

            {error ? <p className="text-sm text-red-400">{error}</p> : null}
            {submitted ? <p className="text-sm text-green-400">Your email client should open now with the message prepared.</p> : null}

            <button type="submit" className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[#08131b] shadow-lg shadow-[var(--primary-shadow)]">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
