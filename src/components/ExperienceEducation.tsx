import { Section } from '@/components/Section'
import { DashedCircle, RingDots } from '@/components/decor/DecorShapes'
import { timeline, trackMeta } from '@/data/timeline'

export function ExperienceEducation() {
  return (
    <Section id="experience" title="Experience &amp; education" className="mt-12 md:mt-20">
      <div
        className="glow-blob top-0 right-0 size-72 bg-[var(--accent-amber)]/[0.1] md:size-96"
        aria-hidden="true"
      />
      <div
        className="glow-blob bottom-10 left-0 size-64 bg-[var(--chart-2)]/[0.12] md:size-80"
        aria-hidden="true"
      />
      <RingDots className="absolute top-8 left-4 hidden lg:block xl:left-14" size={56} />
      <DashedCircle
        className="absolute right-6 bottom-16 hidden lg:block xl:right-16"
        color="var(--accent-violet)"
        size={72}
      />

      <ol className="relative flex flex-col gap-10 md:gap-12 lg:px-40">
        {timeline.map((entry) => {
          const meta = trackMeta[entry.track]
          return (
            <li
              key={entry.role + entry.org}
              className="grid grid-cols-[3.5rem_1fr] gap-5 sm:grid-cols-[4.5rem_1fr] sm:gap-8 md:grid-cols-[6rem_1fr] md:gap-10"
            >
              <span
                className="font-mono text-3xl leading-none font-bold sm:text-4xl md:text-5xl"
                style={{ color: meta.textColor }}
              >
                {entry.year}
              </span>

              <div
                className="border-l-2 pl-5 sm:pl-8 md:pl-10"
                style={{ borderColor: meta.textColor }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                  <p className="font-display text-lg font-semibold">{entry.role}</p>
                  <span
                    className="inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium text-white"
                    style={{ backgroundColor: meta.badgeColor }}
                  >
                    {entry.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{entry.org}</p>
                {entry.detail && <p className="mt-1.5 max-w-lg text-sm">{entry.detail}</p>}
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
