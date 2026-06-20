"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowDown } from "@phosphor-icons/react";
import { assetPath } from "@/lib/paths";

const leafLayers = [
  {
    src: assetPath("/assets/leaf-1.png"),
    className: "left-[5%] top-[12%] w-24 sm:w-32",
    x: 18,
    y: 26,
    rotate: 13,
    duration: 5.8,
  },
  {
    src: assetPath("/assets/leaf-2.png"),
    className: "left-[42%] top-[11%] w-14 sm:w-20",
    x: -20,
    y: 34,
    rotate: -18,
    duration: 6.7,
  },
  {
    src: assetPath("/assets/leaf-4.png"),
    className: "left-[52%] top-[27%] hidden w-14 lg:block",
    x: 16,
    y: 28,
    rotate: 22,
    duration: 5.2,
  },
  {
    src: assetPath("/assets/leaf-6.png"),
    className: "right-[18%] top-[13%] w-12 sm:w-16",
    x: -14,
    y: 25,
    rotate: -15,
    duration: 6.2,
  },
  {
    src: assetPath("/assets/leaf-7.png"),
    className: "right-[3%] bottom-[19%] hidden w-24 opacity-80 lg:block",
    x: -28,
    y: 22,
    rotate: 12,
    duration: 7,
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "13%"]);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1.01, 1.11]);
  const copyY = useTransform(smoothProgress, [0, 1], [0, -105]);
  const copyOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);
  const leavesY = useTransform(smoothProgress, [0, 1], [0, 230]);
  const leavesX = useTransform(smoothProgress, [0, 1], [0, -90]);
  const leavesRotate = useTransform(smoothProgress, [0, 1], [0, 28]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[760px] overflow-hidden bg-[#d8e8ed] sm:min-h-[850px] lg:h-[700px] lg:min-h-[700px]"
    >
      <motion.div
        style={
          reduceMotion
            ? undefined
            : { y: backgroundY, scale: backgroundScale }
        }
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={assetPath("/assets/hero-cinematic.png")}
          alt="محصولات صباح در چشم‌انداز کوهستانی شمال ایران"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[38%_center] lg:object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/5" />
      <div className="absolute inset-0 bg-white/40 lg:hidden" />
      <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-white/45 via-white/10 to-transparent lg:w-[62%]" />

      <motion.div
        style={
          reduceMotion
            ? undefined
            : { x: leavesX, y: leavesY, rotate: leavesRotate }
        }
        className="pointer-events-none absolute inset-0 z-[2] will-change-transform"
      >
        {leafLayers.map((leaf, index) => (
          <motion.div
            key={leaf.src}
            className={`absolute ${leaf.className}`}
            initial={reduceMotion ? false : { opacity: 0, y: -20 }}
            animate={
              reduceMotion
                ? { opacity: 0.78 }
                : {
                    opacity: [0.55, 0.9, 0.55],
                    x: [0, leaf.x, 0],
                    y: [0, leaf.y, 0],
                    rotate: [0, leaf.rotate, 0],
                  }
            }
            transition={{
              opacity: { duration: 1, delay: 0.4 + index * 0.12 },
              x: {
                duration: leaf.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              },
              y: {
                duration: leaf.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              },
              rotate: {
                duration: leaf.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              },
            }}
          >
            <Image src={leaf.src} alt="" width={310} height={260} className="h-auto w-full" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}
        className="container-site relative z-10 flex h-full min-h-[760px] items-start pt-40 sm:min-h-[850px] sm:pt-44 lg:min-h-[700px] lg:items-center lg:pt-20"
      >
        <div className="ml-auto w-full max-w-[700px] text-right lg:w-[50%]">
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-[44px] font-black leading-[1.35] tracking-[-.05em] text-brand-ink sm:text-[56px] lg:text-[58px]"
          >
            <span className="block text-brand-deep">طعم اصالت،</span>
            <span className="block">سلامت هر روز خانواده شما</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-8 text-brand-ink/70 sm:text-lg sm:leading-9"
          >
            در دل طبیعت سرسبز شمال ایران، از شیر تازه دامداری‌های منتخب محصولاتی
            می‌سازیم که طعم اصالت و کیفیت را هر روز به سفره خانواده شما می‌آورد.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <motion.a
              href="#products"
              whileHover={reduceMotion ? undefined : { scale: 1.04, x: -4 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group inline-flex min-h-14 items-center gap-5 rounded-full border border-white/80 bg-brand px-8 font-black text-white shadow-[0_16px_35px_rgba(27,94,32,.25)]"
            >
              مشاهده محصولات
              <span className="grid size-8 place-items-center rounded-full bg-white/12 transition group-hover:bg-white/20">
                <ArrowLeft size={18} weight="bold" />
              </span>
            </motion.a>
            <a
              href="#value-chain"
              className="inline-flex items-center gap-2 border-b border-brand-ink/35 pb-1 text-sm font-bold text-brand-ink transition hover:border-brand hover:text-brand"
            >
              درباره ما بیشتر بدانید
              <ArrowLeft size={16} />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 text-white lg:flex">
        {[0, 1, 2].map((dot) => (
          <button
            key={dot}
            onClick={() => setActive(dot)}
            aria-label={`اسلاید ${dot + 1}`}
            className={`flex items-center gap-3 text-xs font-bold transition ${
              active === dot ? "opacity-100" : "opacity-55 hover:opacity-90"
            }`}
          >
            <span>{String(dot + 1).padStart(2, "0")}</span>
            <span
              className={`w-px bg-white transition-all ${
                active === dot ? "h-9" : "h-3"
              }`}
            />
          </button>
        ))}
      </div>

      <motion.a
        href="#products"
        aria-label="اسکرول به محصولات"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-1/2 z-20 hidden translate-x-1/2 flex-col items-center gap-2 text-xs font-bold text-white/90 lg:flex"
      >
        <span>کشف کنید</span>
        <span className="grid size-10 place-items-center rounded-full border border-white/60 bg-white/10 backdrop-blur">
          <ArrowDown size={18} />
        </span>
      </motion.a>
    </section>
  );
}
