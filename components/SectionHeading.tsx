export function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10">
      <p className="font-sans text-[11px] font-semibold tracking-[0.28em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2
        className={`mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
