"use client";

import { motion, useReducedMotion } from "framer-motion";
import { benefits } from "@/data/site";

export function BenefitStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="container-site relative z-20 -mt-16">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 55, scale: 0.98 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="grid overflow-hidden rounded-[1.75rem] border border-white/80 bg-[#fffdf8]/95 px-4 shadow-[0_18px_55px_rgba(48,73,41,.13)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
      >
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, x: 30 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12 + index * 0.09 }}
              className={`flex min-h-28 items-center justify-center gap-4 px-5 py-5 ${
                index ? "border-t border-brand/10 sm:border-r sm:border-t-0" : ""
              } ${index === 2 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <span className="grid size-12 shrink-0 place-items-center text-brand">
                <Icon size={32} weight="duotone" />
              </span>
              <div>
                <h3 className="font-black text-brand-ink">{item.title}</h3>
                <p className="mt-1 text-[11px] leading-5 text-brand-muted">
                  {item.caption}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
