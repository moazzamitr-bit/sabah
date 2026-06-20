import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles = {
  solid:
    "bg-brand text-white hover:bg-brand-deep shadow-[0_12px_24px_rgba(46,125,50,.18)]",
  outline:
    "border border-brand/35 bg-white text-brand hover:border-brand hover:bg-green-50",
  light: "bg-white/12 text-white hover:bg-white/20 ring-1 ring-white/25",
};

export function Button({
  children,
  href,
  variant = "solid",
  className = "",
  ...props
}: Props) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-700/20 ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <ArrowLeft size={18} weight="bold" aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
