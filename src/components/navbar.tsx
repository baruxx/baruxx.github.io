import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { CALENDAR_URL } from '@/lib/constants';

const links = [
  { href: '#work', label: 'Selected Work' },
  { href: '#services', label: 'Expertise' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.4em] text-foreground/70 transition hover:text-foreground"
          aria-label="Appinex home"
        >
          <span className="rounded-full bg-foreground/10 px-3 py-1 text-[0.65rem] uppercase">Appinex</span>
          <span className="hidden text-xs sm:inline">Web Agency</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-foreground/70 sm:flex">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-medium transition-colors hover:text-foreground"
            >
              <span>{link.label}</span>
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-foreground transition-transform duration-200 [a:hover_&]:scale-x-100" />
            </a>
          ))}
        </nav>
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noreferrer"
          className={cn(
            'hidden items-center gap-2 rounded-full border border-foreground/10 px-5 py-2 text-sm font-medium text-foreground transition hover:border-foreground/30 sm:flex'
          )}
        >
          Let&apos;s collaborate
        </a>
      </div>
    </header>
  );
}
