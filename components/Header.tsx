"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  GlobeSimple,
  List,
  MagnifyingGlass,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import { navItems } from "@/data/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCompact(latest > 50);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -110, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <motion.div
          animate={{
            maxWidth: compact ? 1240 : 1380,
            height: compact ? 68 : 78,
            borderRadius: compact ? 22 : 18,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex items-center gap-5 border border-white/65 bg-white/90 px-5 shadow-[0_12px_40px_rgba(34,68,35,.12)] backdrop-blur-xl sm:px-7"
        >
          <Link href="#home" aria-label="صباح - صفحه اصلی" className="shrink-0">
            <Image
              src="/assets/sabah-logo.png"
              alt="لوگوی لبنیات صباح"
              width={118}
              height={68}
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                compact ? "h-12" : "h-14"
              }`}
            />
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-7 xl:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative whitespace-nowrap py-6 text-[13px] font-bold text-brand-ink transition hover:text-brand ${
                  index === 0
                    ? "text-brand after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-brand"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mr-auto flex items-center gap-1 text-brand-ink">
            <button
              onClick={() => setSearchOpen(true)}
              className="icon-button"
              aria-label="جستجو"
            >
              <MagnifyingGlass size={21} />
            </button>
            <button className="icon-button hidden sm:grid" aria-label="حساب کاربری">
              <UserCircle size={22} />
            </button>
            <button className="icon-button hidden sm:grid" aria-label="انتخاب زبان">
              <GlobeSimple size={21} />
            </button>
            <button className="hidden px-2 text-xs font-bold sm:block" aria-label="زبان فارسی">
              FA
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="icon-button xl:hidden"
              aria-label="باز کردن منو"
            >
              <List size={24} />
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-brand-deep/35 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 right-0 w-[86%] max-w-sm bg-white p-7 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
          <div className="mb-10 flex items-center justify-between">
            <Image src="/assets/sabah-logo.png" alt="" width={105} height={60} className="h-12 w-auto" />
            <button onClick={() => setMenuOpen(false)} className="icon-button" aria-label="بستن منو">
              <X size={23} />
            </button>
          </div>
          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-black/5 py-4 font-bold ${
                  index === 0 ? "text-brand" : "text-brand-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-start bg-brand-deep/45 px-5 pt-28 backdrop-blur-md"
            onClick={() => setSearchOpen(false)}
          >
            <motion.form
              initial={{ y: -24, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -16, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="flex w-full max-w-2xl items-center rounded-3xl bg-white p-3 shadow-2xl"
              onSubmit={(event) => event.preventDefault()}
              onClick={(event) => event.stopPropagation()}
            >
          <MagnifyingGlass size={24} className="mx-3 text-brand" />
          <input
            autoFocus={searchOpen}
            type="search"
            placeholder="جستجو در محصولات و مطالب صباح..."
            className="min-w-0 flex-1 bg-transparent px-2 py-3 text-base outline-none"
          />
          <button type="button" onClick={() => setSearchOpen(false)} className="icon-button" aria-label="بستن جستجو">
            <X size={22} />
          </button>
            </motion.form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
