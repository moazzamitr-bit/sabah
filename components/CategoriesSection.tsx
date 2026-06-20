"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "@phosphor-icons/react";
import { categories } from "@/data/site";

export function CategoriesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="products" className="container-site pb-8 pt-16 sm:pt-20">
      <div className="grid items-end gap-8 xl:grid-cols-[260px_1fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 40 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pb-2"
        >
          <p className="text-sm font-black text-brand">محصولات صباح</p>
          <h2 className="mt-3 text-4xl font-black leading-[1.2] text-brand-ink lg:text-5xl">
            طعم‌های
            <br />
            محبوب شما
          </h2>
          <p className="mt-5 text-sm leading-7 text-brand-muted">
            از شیر و پنیر روزانه تا طعم‌های سنتی؛ برای هر لحظه یک انتخاب تازه.
          </p>
          <a
            href="#products"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-brand/30 px-5 py-3 text-xs font-black text-brand transition hover:bg-brand hover:text-white"
          >
            مشاهده همه محصولات
            <ArrowLeft size={16} />
          </a>
        </motion.div>

        <div className="hide-scrollbar -mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-5 md:px-0">
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 85, rotate: index % 2 ? 2.2 : -2.2 }
              }
              animate={
                reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }
              }
              transition={{
                duration: 0.8,
                delay: 0.75 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -12, scale: 1.025, transition: { duration: 0.3 } }
              }
              className="group relative min-w-[72vw] snap-center overflow-hidden rounded-2xl md:min-w-0"
              style={{ backgroundColor: category.accent }}
            >
              <div className="relative aspect-[.86] min-h-[285px]">
                <Image
                  src={category.image}
                  alt={`محصولات ${category.title} صباح`}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 72vw, 20vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-2xl font-black">{category.title}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] text-white/75">مشاهده محصولات</span>
                    <span className="grid size-8 place-items-center rounded-full bg-white text-brand-ink transition group-hover:-translate-x-1">
                      <ArrowLeft size={15} weight="bold" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
