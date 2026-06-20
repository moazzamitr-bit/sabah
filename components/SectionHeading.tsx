import { Button } from "./Button";

type Props = {
  label: string;
  title: string;
  description?: string;
  action?: string;
  href?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  action,
  href = "#",
}: Props) {
  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-extrabold text-brand">{label}</p>
        <h2 className="text-balance text-3xl font-black leading-tight text-brand-ink md:text-[42px]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl leading-8 text-brand-muted">{description}</p>
        ) : null}
      </div>
      {action ? (
        <Button href={href} variant="outline">
          {action}
        </Button>
      ) : null}
    </div>
  );
}
