import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "لبنیات صباح | طعم اصالت، سلامت هر روز",
  description:
    "وب‌سایت رسمی لبنیات صباح؛ آشنایی با محصولات، کیفیت، استانداردها و داستان تولید.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className={vazirmatn.variable}>{children}</body>
    </html>
  );
}
