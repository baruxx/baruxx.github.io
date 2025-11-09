"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { CALENDAR_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';

const heroText = {
  headline: 'Crafting scalable experiences with a minimalist heartbeat.',
  subline:
    'Appinex is a web agency blending elegant UX, resilient engineering, and human-centred strategy for bold founder teams.'
};

const rise = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export function Hero(): React.JSX.Element {
  const prefersReducedMotion = useReducedMotion();
  const riseMotion = prefersReducedMotion ? fadeIn : rise;

  return (
    <section className="relative overflow-hidden pb-28 pt-12 sm:pt-20">
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:24px_24px]" aria-hidden="true" />
      <div className="absolute -left-40 top-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-32 bottom-0 h-56 w-56 rounded-full bg-foreground/5 blur-3xl" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4">
        <motion.span
          className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/10 bg-card/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-foreground/70 shadow-lg shadow-black/20 backdrop-blur"
          {...riseMotion}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          Available for visionary collaborations
        </motion.span>

        <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-start">
          <motion.div
            className="space-y-8"
            {...riseMotion}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          >
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {heroText.headline}
            </h1>
            <p className="max-w-xl text-pretty text-base text-foreground/70 sm:text-lg">
              {heroText.subline}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="shadow-xl shadow-accent/25" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  Get in touch
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="border border-foreground/15 bg-card hover:bg-secondary" asChild>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-foreground"
                >
                  Book a discovery call
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-6 md:mt-0"
            {...fadeIn}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          >
            <div className="relative flex h-full flex-col rounded-3xl border border-white/30 bg-card/80 p-8 shadow-2xl shadow-black/20 backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-foreground/60">
                Delivery at a glance
              </h2>
              <ul className="mt-6 space-y-6 text-sm text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">Performance-first architecture</p>
                    <p className="text-foreground/60">97+ Lighthouse scores across web apps shipped this year.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">Design systems in sync</p>
                    <p className="text-foreground/60">Shadcn/ui foundations tuned for accessibility and speed.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">Founder-grade partnership</p>
                    <p className="text-foreground/60">From Figma to production-ready stacks with strategic guidance.</p>
                  </div>
                </li>
              </ul>
              <motion.div
                className="mt-8 flex items-center justify-between rounded-2xl border-foreground/10 bg-secondary/50 px-6 py-4 text-xs font-medium text-foreground/60"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <span className="tracking-[0.3em] uppercase">2025 road-map</span>
                <span>3 retainer spots remaining</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={cn(
          'pointer-events-none absolute inset-x-0 bottom-12 flex justify-center',
          'text-[0.65rem] uppercase tracking-[0.35em] text-foreground/40'
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <span>Ultra-fast • Accessible • Production Ready</span>
      </motion.div>
    </section>
  );
}
