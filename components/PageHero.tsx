export function PageHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-background/30 px-6 py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="font-sans text-[11px] font-semibold tracking-[0.28em] text-accent uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
