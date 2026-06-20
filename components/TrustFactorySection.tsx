import Image from "next/image";
import { Button } from "./Button";
import { assetPath } from "@/lib/paths";

const badges = [
  { title: "حلال", sub: "HALAL" },
  { title: "HACCP", sub: "ایمنی غذا" },
  { title: "ISO 22000", sub: "مدیریت کیفیت" },
  { title: "IFDA", sub: "سازمان غذا و دارو" },
];

export function TrustFactorySection() {
  return (
    <section id="standards" className="container-site pb-28">
      <div className="grid overflow-hidden rounded-[2.25rem] bg-brand-deep text-white shadow-soft lg:grid-cols-[.95fr_1.05fr]">
        <div className="relative min-h-[390px] lg:order-2 lg:min-h-[560px]">
          <Image
            src={assetPath("/assets/factory-v2.png")}
            alt="کارخانه مدرن و آزمایشگاه کنترل کیفیت صباح"
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/45 via-transparent to-transparent lg:bg-gradient-to-l" />
        </div>

        <div id="about" className="flex flex-col justify-center p-8 sm:p-12 lg:order-1 lg:p-16">
          <p className="text-sm font-extrabold text-green-200">کیفیت، یک انتخاب نیست؛ تعهد ماست</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-[44px]">
            کارخانه‌ای با استانداردهای جهانی
          </h2>
          <p className="mt-6 leading-8 text-white/72">
            کارخانه صباح با بهره‌گیری از فناوری روز دنیا، خطوط تولید پیشرفته و
            آزمایشگاه‌های مجهز، محصولات لبنی را با بالاترین استانداردهای ایمنی و
            کیفیت تولید می‌کند. سلامت و رضایت شما، معیار نهایی ماست.
          </p>
          <Button href="#contact" variant="light" className="mt-8 self-start">
            درباره ما بیشتر بدانید
          </Button>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="rounded-2xl border border-white/15 bg-white/[0.07] p-3 text-center backdrop-blur"
              >
                <strong className="block text-sm text-white">{badge.title}</strong>
                <span className="mt-1 block text-[10px] text-white/55">{badge.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
