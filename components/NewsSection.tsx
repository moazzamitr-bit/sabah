import Image from "next/image";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { newsItems } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function NewsSection() {
  return (
    <section id="news" className="container-site pb-24">
      <SectionHeading
        label="تازه‌های صباح"
        title="اخبار و مقالات"
        action="مشاهده همه مطالب"
        href="#news"
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {newsItems.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-3xl border border-black/[0.05] bg-white shadow-card">
            <div className="relative aspect-[1.75] overflow-hidden">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-brand">
                <CalendarBlank size={16} />
                <time>{item.date}</time>
              </div>
              <h3 className="mt-4 text-xl font-black leading-8 text-brand-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-brand-muted">{item.excerpt}</p>
              <a href="#" className="mt-5 inline-block text-sm font-black text-brand hover:text-brand-deep">
                ادامه مطلب ←
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
