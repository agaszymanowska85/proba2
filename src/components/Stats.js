"use client";

import { useEffect, useRef } from "react";
import siteConfig from "@/siteConfig";
import { nbsp } from "@/lib/widows";

const GRADIENTS = {
  accent: "linear-gradient(135deg, rgba(255,95,94,0.35), rgba(15,27,79,0.4))",
  purple: "linear-gradient(135deg, rgba(108,93,211,0.35), rgba(15,27,79,0.4))",
  mixed: "linear-gradient(135deg, rgba(255,95,94,0.18), rgba(108,93,211,0.3))",
};

function useCountUp(target, ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let startTime = null;
    const duration = 1400;
    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      el.textContent = Math.round(progress * target).toLocaleString("pl-PL");
      if (progress < 1) requestAnimationFrame(step);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, ref]);
}

function StatCard({ item }) {
  const ref = useRef(null);
  useCountUp(item.value, ref);

  return (
    <div
      className="rounded-2xl border border-white/10 p-8"
      style={{ background: GRADIENTS[item.gradient] || GRADIENTS.accent }}
    >
      <div className="font-display flex items-baseline text-[3.5rem] leading-none text-[var(--color-text)]">
        <span ref={ref}>0</span>
        <span>{item.suffix}</span>
      </div>
      <p className="mt-2.5 text-base font-semibold leading-snug text-[var(--color-text)]">
        {nbsp(item.label)}
      </p>
    </div>
  );
}

export default function Stats() {
  const { stats } = siteConfig;
  const blockRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    function update() {
      const y = window.scrollY || window.pageYOffset;
      const offset = Math.min(y * 0.12, 40);
      if (blockRef.current) {
        blockRef.current.style.transform = `translateY(${-offset}px)`;
      }
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative z-10 -mt-16 px-5 pb-16 md:px-8">
      <div
        ref={blockRef}
        className="mx-auto grid max-w-6xl gap-5 rounded-[28px] border border-white/10 bg-[var(--color-background-soft)]/60 p-9 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:grid-cols-3"
      >
        {stats.items.map((item) => (
          <StatCard key={item.label} item={item} />
        ))}
      </div>
    </section>
  );
}
