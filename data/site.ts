import type { Icon } from "@phosphor-icons/react";
import {
  Certificate,
  Drop,
  Factory,
  Leaf,
  Package,
  ShieldCheck,
  Sparkle,
  Truck,
} from "@phosphor-icons/react/dist/ssr";

export type NavItem = { label: string; href: string };
export type Benefit = { title: string; caption: string; icon: Icon };
export type Category = {
  title: string;
  description: string;
  image: string;
  accent: string;
  wash: string;
};

export const navItems: NavItem[] = [
  { label: "صفحه اصلی", href: "#home" },
  { label: "محصولات", href: "#products" },
  { label: "درباره ما", href: "#about" },
  { label: "اخبار و مقالات", href: "#news" },
  { label: "استانداردها و گواهینامه‌ها", href: "#standards" },
  { label: "نمایندگی‌ها", href: "#partners" },
  { label: "تماس با ما", href: "#contact" },
];

export const benefits: Benefit[] = [
  {
    title: "تازه و طبیعی",
    caption: "از شیر تازه دامداری‌های منتخب شمال کشور",
    icon: Leaf,
  },
  {
    title: "کیفیت تضمینی",
    caption: "کنترل پیوسته از دریافت شیر تا محصول نهایی",
    icon: ShieldCheck,
  },
  {
    title: "سه دهه تجربه",
    caption: "بیش از ۳۰ سال نوآوری در صنعت لبنیات",
    icon: Certificate,
  },
  {
    title: "محصولات متنوع",
    caption: "برای هر سلیقه، هر وعده و هر خانواده",
    icon: Package,
  },
];

export const categories: Category[] = [
  {
    title: "شیرها",
    description: "شیر تازه، کم‌چرب و پرچرب برای هر روز",
    image: "/assets/category-milk-motion.png",
    accent: "#1565C0",
    wash: "#EAF2FF",
  },
  {
    title: "ماست‌ها",
    description: "ماست سنتی، چکیده، میوه‌ای و یونانی",
    image: "/assets/category-yogurt-motion.png",
    accent: "#D4537E",
    wash: "#FCEAF1",
  },
  {
    title: "پنیرها",
    description: "پنیرهای صبحانه، لبنه، لاکتیکی و تخصصی",
    image: "/assets/category-cheese-motion.png",
    accent: "#1D9E75",
    wash: "#E5F7F1",
  },
  {
    title: "کشک و محصولات سنتی",
    description: "طعم اصیل سفره ایرانی با کیفیت امروز",
    image: "/assets/category-traditional-motion.png",
    accent: "#EF9F27",
    wash: "#FFF3DE",
  },
  {
    title: "دوغ و نوشیدنی‌ها",
    description: "دوغ، کفیر و نوشیدنی‌های لبنی خنک",
    image: "/assets/category-drinks-motion.png",
    accent: "#2E7D32",
    wash: "#EAF5E6",
  },
];

export const valueSteps = [
  { title: "دریافت شیر تازه", text: "از دامداری‌های منتخب", icon: Drop },
  { title: "کنترل کیفیت", text: "آزمایش‌های چندمرحله‌ای", icon: Sparkle },
  { title: "تولید", text: "تجهیزات مدرن و استاندارد", icon: Factory },
  { title: "بسته‌بندی", text: "حفظ تازگی و ایمنی", icon: Package },
  { title: "توزیع و صادرات", text: "زنجیره سرد و پوشش گسترده", icon: Truck },
];

export const newsItems = [
  {
    title: "همراه با دامداران، همراه با طبیعت",
    excerpt: "نگاهی به مسیر تأمین شیر تازه و همکاری پایدار صباح با دامداری‌های منتخب.",
    date: "۲۵ خرداد ۱۴۰۵",
    image: "/assets/news-farm-v2.jpg",
  },
  {
    title: "توسعه خط تولید جدید صباح",
    excerpt: "فناوری‌های تازه برای کیفیت پایدارتر، ظرفیت بیشتر و محصولاتی متنوع‌تر.",
    date: "۱۶ خرداد ۱۴۰۵",
    image: "/assets/factory-v2.png",
  },
  {
    title: "فواید ماست برای سلامت خانواده",
    excerpt: "چطور ماست را هوشمندانه‌تر در برنامه غذایی روزانه خانواده قرار دهیم؟",
    date: "۱۳ خرداد ۱۴۰۵",
    image: "/assets/news-breakfast-v2.jpg",
  },
];
