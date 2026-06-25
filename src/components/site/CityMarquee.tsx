type City = { name: string; flag: string };

export function CityMarquee({ cities, reverse = false }: { cities: City[]; reverse?: boolean }) {
  const cycle = Array.from({ length: 3 }, () => cities).flat();
  return (
    <div className="marquee-mask overflow-hidden py-2" dir="ltr">
      <div className={`flex w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0" aria-hidden={group === 1}>
            {cycle.map((c, i) => (
              <span
                key={`${group}-${c.name}-${i}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                <span className="text-lg leading-none" aria-hidden>{c.flag}</span>
                <span className="whitespace-nowrap">{c.name}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
