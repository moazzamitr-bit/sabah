import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  TelegramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-brand/10 bg-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.8fr_1.1fr]">
        <div>
          <Image src="/assets/sabah-logo.png" alt="صباح" width={120} height={68} className="h-16 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-brand-muted">
            صباح، برندی پیشرو در تولید محصولات لبنی با تمرکز بر کیفیت، نوآوری و
            سلامت خانواده‌های ایرانی.
          </p>
          <div className="mt-6 flex gap-2">
            {[InstagramLogo, TelegramLogo, LinkedinLogo].map((Icon, index) => (
              <a key={index} href="#" className="icon-button bg-green-50 text-brand" aria-label="شبکه اجتماعی صباح">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-title">دسترسی سریع</h3>
          <ul className="mt-5 space-y-3 text-sm text-brand-muted">
            {navItems.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-brand">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="partners">
          <h3 className="footer-title">محصولات</h3>
          <ul className="mt-5 space-y-3 text-sm text-brand-muted">
            {["پنیرها", "ماست‌ها", "شیرها", "کشک و محصولات سنتی", "دوغ و نوشیدنی‌ها"].map((item) => (
              <li key={item}><a href="#products" className="transition hover:text-brand">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-title">اطلاعات تماس</h3>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-brand-muted">
            <li className="flex gap-3"><MapPin className="mt-1 shrink-0 text-brand" size={20} />مازندران، قائم‌شهر، کیلومتر ۳ جاده ساری</li>
            <li className="flex items-center gap-3" dir="ltr"><Phone className="text-brand" size={20} />+98 11 4215 0000</li>
            <li className="flex items-center gap-3" dir="ltr"><EnvelopeSimple className="text-brand" size={20} />info@sabahdairy.ir</li>
          </ul>
        </div>
      </div>
      <div className="bg-brand-deep py-4 text-center text-xs text-white/70">
        تمامی حقوق این وب‌سایت متعلق به گروه صنعتی صباح است — ۱۴۰۵
      </div>
    </footer>
  );
}
