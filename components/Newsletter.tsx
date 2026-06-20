"use client";

import { FormEvent, useState } from "react";
import { EnvelopeSimple, Leaf } from "@phosphor-icons/react";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="container-site pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-l from-brand-deep to-brand px-7 py-10 text-white sm:px-12 lg:flex lg:items-center lg:justify-between">
        <Leaf className="absolute -bottom-10 -right-8 text-white/10" size={180} weight="fill" />
        <div className="relative">
          <p className="text-sm font-bold text-green-200">همراه صباح بمانید</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">در خبرنامه صباح عضو شوید</h2>
          <p className="mt-2 text-sm leading-7 text-white/65">
            جدیدترین محصولات، مقاله‌ها و خبرهای صباح را زودتر دریافت کنید.
          </p>
        </div>

        {submitted ? (
          <div className="relative mt-7 rounded-2xl bg-white/12 px-6 py-4 font-bold ring-1 ring-white/20 lg:mt-0">
            ممنون! عضویت شما با موفقیت ثبت شد.
          </div>
        ) : (
          <form onSubmit={submit} className="relative mt-7 flex max-w-xl rounded-2xl bg-white p-2 lg:mt-0 lg:w-[430px]">
            <EnvelopeSimple size={22} className="my-auto mr-3 shrink-0 text-brand" />
            <input
              required
              type="email"
              dir="ltr"
              placeholder="email@example.com"
              aria-label="ایمیل"
              className="min-w-0 flex-1 bg-transparent px-3 text-left text-sm text-brand-ink outline-none"
            />
            <button className="rounded-xl bg-brand-deep px-6 py-3 text-sm font-black text-white transition hover:bg-[#134a18]">
              عضویت
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
