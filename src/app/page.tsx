import React from 'react';
import { Metadata } from 'next';

import { Hero } from '@/components/hero';
import { Button } from '@/components/ui/button';
import { CALENDAR_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Appinex — Web Agency crafting modern digital experiences',
  description:
    'Partner with Appinex for calm, high-performing product builds across dashboards, ecommerce, and experiential web initiatives.'
};

export default function HomePage(): React.JSX.Element {
  return (
    <div className="relative">
      <Hero />
      <section id="work" className="border-t border-foreground/10 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
            Collaboration tracks
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-foreground sm:text-4xl">
            Tailored engagements designed for momentum, not busywork
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-base text-foreground/70 sm:text-lg">
            Choose the partnership format that fits your next milestone. Each track is outcomes-driven, keeps
            feedback tight, and ships polished interfaces without requiring you to maintain an internal squad.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="flex h-full flex-col justify-between rounded-3xl border border-foreground/10 bg-card p-7 shadow-lg shadow-black/20">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Launch Readiness Sprint</h3>
                <p className="mt-3 text-sm text-foreground/70">
                  Two-week push to crystallise product messaging, refine flows, and harden the build ahead of a public
                  release or investor demo.
                </p>
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-foreground/40">Timeline: 2 weeks</p>
            </article>
            <article className="flex h-full flex-col justify-between rounded-3xl border border-foreground/10 bg-card p-7 shadow-lg shadow-black/20">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Experience Tune-Up</h3>
                <p className="mt-3 text-sm text-foreground/70">
                  Audit and uplift for an existing product surface—resolve friction, modernise the interface, and wire
                  in analytics or automation safeguards.
                </p>
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-foreground/40">Timeline: 3–4 weeks</p>
            </article>
            <article className="flex h-full flex-col justify-between rounded-3xl border border-foreground/10 bg-card p-7 shadow-lg shadow-black/20">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Embedded Partner</h3>
                <p className="mt-3 text-sm text-foreground/70">
                  Fractional engineering leadership guiding discovery, delivery, and iteration alongside your design or
                  founding team.
                </p>
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-foreground/40">Timeline: Monthly</p>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-foreground/10 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">Expertise</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-foreground sm:text-4xl">
            Product engineering that balances polish with pragmatism
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-foreground/10 bg-card p-8 shadow-lg shadow-black/20">
              <h3 className="text-base font-semibold text-foreground">Design systems &amp; implementation</h3>
              <p className="mt-3 text-sm text-foreground/70">
                shadcn/ui, Tailwind, and Figma tokens translated into codebases that stay maintainable as your product
                scales.
              </p>
            </div>
            <div className="rounded-3xl border border-foreground/10 bg-card p-8 shadow-lg shadow-black/20">
              <h3 className="text-base font-semibold text-foreground">Modern web foundations</h3>
              <p className="mt-3 text-sm text-foreground/70">
                Next.js, React Server Components, and type-safe tooling assembled for performance, accessibility, and
                reliable delivery.
              </p>
            </div>
            <div className="rounded-3xl border border-foreground/10 bg-card p-8 shadow-lg shadow-black/20">
              <h3 className="text-base font-semibold text-foreground">Automation &amp; data orchestration</h3>
              <p className="mt-3 text-sm text-foreground/70">
                Crisp API layers, background jobs, and crafted dashboards that transform raw signals into confident
                decisions.
              </p>
            </div>
            <div className="rounded-3xl border border-foreground/10 bg-card p-8 shadow-lg shadow-black/20">
              <h3 className="text-base font-semibold text-foreground">Founder enablement</h3>
              <p className="mt-3 text-sm text-foreground/70">
                Workshops, docs, and hand-off rituals ensuring your team can iterate quickly after engagement ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-foreground/10 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">About</span>
          <div className="mt-8 grid gap-10 md:grid-cols-[2fr_1fr] md:items-start">
            <div className="space-y-6 text-base text-foreground/70">
              <p>
                Appinex partners with design-led founders to build purposeful digital products—merging thoughtful UX,
                resilient engineering, and calm communication. The focus is on momentum and clarity rather than noise.
              </p>
              <p>
                Recent collaborations include internal tooling, growth-ready marketing sites, and immersive product
                experiments across SaaS, ecommerce, and creative tech.
              </p>
              <p>
                Outside delivery windows, you can usually find Appinex iterating on new interface patterns, sharing
                strategy notes with founders, or facilitating collaborative design sprints.
              </p>
            </div>
            <div className="rounded-3xl border border-foreground/10 bg-card p-6 text-sm text-foreground/70 shadow-lg shadow-black/20">
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/60">Snapshot</h3>
              <ul className="mt-5 space-y-4">
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-foreground/40">Based in</span>
                  Casablanca, Morocco (remote friendly)
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-foreground/40">Stack</span>
                  TypeScript, Next.js, React, Node.js, Framer Motion, Tailwind
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-foreground/40">Focus</span>
                  Product launches, experience refreshes, founder enablement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-foreground/10 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">Contact</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-foreground sm:text-4xl">
            Ready to explore a collaboration?
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base text-foreground/70 sm:text-lg">
            Share the context you have, even if it&apos;s still taking shape. Expect a reply within two business days with
            next steps, scheduling options, or a thoughtful redirect when it&apos;s not the right fit.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <a href="mailto:appinex.agency@gmail.com" className="flex items-center gap-2">
                Email appinex.agency@gmail.com
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border border-foreground/15 bg-card hover:bg-secondary"
              asChild
            >
              <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                Book a discovery call
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-foreground/60">
            Prefer async? Send a loom or notion doc—any format that explains the problem works.
          </p>
        </div>
      </section>
    </div>
  );
}
