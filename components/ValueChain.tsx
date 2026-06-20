"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { valueSteps } from "@/data/site";

export function ValueChain() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 82%", "end 45%"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
  });
  const backgroundX = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} id="value-chain" className="container-site py-8 pb-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-brand/10 bg-white px-6 py-11 shadow-card sm:px-10 lg:px-14">
        <motion.div
          style={reduceMotion ? undefined : { x: backgroundX }}
          className="pointer-events-none absolute -left-20 top-1/2 h-64 w-[115%] -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(124,179,66,.12),transparent_66%)]"
        />
        <div className="relative mb-10 text-right lg:absolute lg:right-14 lg:top-10 lg:w-72">
          <p className="text-sm font-extrabold text-brand">از دل طبیعت تا سفره شما</p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-brand-ink sm:text-4xl">
            مسیر تولید محصولات صباح
          </h2>
        </div>

        <div className="relative grid gap-9 pt-4 md:grid-cols-5 lg:pt-24">
          <div className="absolute left-[8%] right-[8%] top-[7.1rem] hidden h-px bg-brand/15 md:block">
            <motion.div
              style={{ scaleX: reduceMotion ? 1 : lineProgress }}
              className="h-full origin-right bg-brand"
            />
          </div>
          {valueSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 45 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.11 }}
                className="relative z-10 text-center"
              >
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -8, rotate: -5, scale: 1.08 }
                  }
                  className="mx-auto grid size-16 place-items-center rounded-full border-4 border-white bg-[#f4f7ef] text-brand shadow-[0_10px_28px_rgba(27,94,32,.12)]"
                >
                  <Icon size={31} weight="duotone" />
                </motion.div>
                <span className="mx-auto -mt-2 grid size-6 place-items-center rounded-full bg-brand text-[11px] font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-black text-brand-ink">{step.title}</h3>
                <p className="mt-1 text-xs leading-6 text-brand-muted">{step.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
