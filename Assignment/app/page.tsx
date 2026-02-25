'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = 'WELCOME ITZ FIZZ';

const stats = [
  { value: '98%', label: 'Smooth interaction satisfaction' },
  { value: '120ms', label: 'Average frame response' },
  { value: '3x', label: 'More engaging hero section' }
];

export default function Page() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.headline-letter', {
        opacity: 0,
        y: 40,
        stagger: 0.04,
        duration: 0.9
      }).from(
        '.stat-item',
        {
          opacity: 0,
          y: 24,
          stagger: 0.12,
          duration: 0.7
        },
        '-=0.4'
      );

      if (visualRef.current && heroRef.current) {
        gsap.fromTo(
          visualRef.current,
          {
            yPercent: -8,
            scale: 0.98,
            rotate: -2
          },
          {
            yPercent: 18,
            scale: 1.06,
            rotate: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2
            }
          }
        );
      }

      if (statsRef.current && heroRef.current) {
        gsap.fromTo(
          statsRef.current,
          {
            yPercent: 0
          },
          {
            yPercent: -12,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1
            }
          }
        );
      }
    }, heroRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const headlineChars = HEADLINE.split('');

  return (
    <main className="bg-slate-950 text-slate-100">
      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:px-20"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#22c55e1f,_transparent_55%),radial-gradient(circle_at_bottom,_#0ea5e91f,_transparent_55%)]" />

        <div className="relative z-10 max-w-xl space-y-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-400/80">
            Scroll to feel the motion
          </p>

          <h1 className="text-balance text-3xl font-semibold tracking-[0.5em] text-slate-100 sm:text-4xl lg:text-5xl">
            {headlineChars.map((char, index) => (
              <span
                key={`${char}-${index}`}
                className="headline-letter inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          <p className="max-w-lg text-sm text-slate-300/80 sm:text-base">
            Crafted with vanilla web technologies, React, Tailwind and GSAP. The hero responds directly to your scroll,
            turning simple motion into a premium interaction.
          </p>

          <div
            ref={statsRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-item flex flex-col gap-1 rounded-xl border border-slate-800/80 bg-slate-900/40 px-5 py-4 backdrop-blur"
              >
                <span className="text-lg font-semibold text-emerald-400 sm:text-xl">
                  {stat.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex w-full justify-center lg:mt-0 lg:flex-1">
          <div
            ref={visualRef}
            className="relative h-72 w-72 max-w-xs origin-center rounded-[2.75rem] border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_40px_120px_rgba(15,23,42,0.9)] sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]"
          >
            <div className="absolute inset-6 rounded-[2.25rem] bg-gradient-to-br from-emerald-400/25 via-sky-400/10 to-transparent" />
            <div className="absolute left-5 top-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
            </div>

            <div className="absolute inset-x-8 bottom-10 flex flex-col gap-4">
              <div className="flex justify-between text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-300/80">
                <span>Scroll progress</span>
                <span>Motion synced</span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-800/90">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-cyan-300 shadow-[0_0_25px_rgba(34,197,94,0.7)]" />
              </div>
              <p className="text-xs text-slate-400">
                The card glides as you scroll, driven purely by scroll position for a tactile, controlled experience.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center text-[0.65rem] font-medium uppercase tracking-[0.35em] text-slate-500/70">
          <span>Scroll down</span>
        </div>
      </section>

      <section className="min-h-[120vh] bg-slate-950 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl space-y-6 text-sm text-slate-300/85 sm:text-base">
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Behind the motion
          </h2>
          <p>
            This section exists primarily to give the hero space to breathe and to allow the scroll-driven animation to
            express its full range. As you move past the fold, the hero&apos;s visual continues to respond, easing into
            its final position without abrupt snapping.
          </p>
          <p>
            All motion is powered by performant transforms – translate, scale and rotate – and tied directly to scroll
            progress using GSAP&apos;s ScrollTrigger. This keeps frames smooth and responsive, even on lower-powered
            devices.
          </p>
        </div>
      </section>
    </main>
  );
}
