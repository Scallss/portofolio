import { Section } from '@/components/Section'
import { ImagePlaceholder } from '@/components/ImagePlaceholder'
import { ImageLightbox } from '@/components/ImageLightbox'
import { DashedCircle } from '@/components/decor/DecorShapes'
import { achievements, type Achievement } from '@/data/achievements'
import { achievementImages } from '@/data/achievementImages'

const accentVars: Record<Achievement['accent'], { fill: string; outline: string; text: string }> = {
  blue: { fill: 'var(--badge-blue)', outline: 'var(--badge-blue)', text: 'var(--badge-blue)' },
  violet: { fill: 'var(--badge-blue)', outline: 'var(--badge-blue)', text: 'var(--badge-blue)' },
  amber: { fill: 'var(--badge-blue)', outline: 'var(--badge-blue)', text: 'var(--badge-blue)' },
}

export function AchievementsSection() {
  return (
    <Section id="achievements" title="Achievements">
      <div
        className="glow-blob top-0 left-0 size-72 bg-[var(--chart-1)]/[0.18] md:size-96"
        aria-hidden="true"
      />
      <DashedCircle
        className="absolute top-6 right-4 hidden lg:block xl:right-10"
        color="var(--chart-5)"
        size={72}
      />

      <div className="relative mt-8 grid grid-cols-1 gap-16 sm:grid-cols-2 md:mt-25">
        {achievements.map((item, i) => {
          const accent = accentVars[item.accent]
          const tilt = i % 2 === 0 ? '-rotate-3' : 'rotate-3'
          return (
            <div key={item.title} className="flex flex-col items-center gap-6 text-center">
              {/* Polaroid-style photo, same layered-offset motif as the hero photo */}
              <div className={`relative h-72 w-full max-w-md shrink-0 ${tilt}`}>
                <div
                  className="absolute -right-3 -bottom-3 h-full w-full rounded-md"
                  style={{ backgroundColor: `${accent.fill}40` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-3 -left-3 h-full w-full rounded-md border-2"
                  style={{ borderColor: `${accent.outline}66` }}
                  aria-hidden="true"
                />
                <div className="relative h-full w-full rounded-md border-4 border-white bg-white p-0 shadow-lg">
                  <div className="h-full w-full overflow-hidden rounded-[2px]">
                    {item.image && achievementImages[item.image] ? (
                      <ImageLightbox src={achievementImages[item.image]} alt={item.title} className="h-full">
                        <img
                          src={achievementImages[item.image]}
                          alt={item.title}
                          className={
                            item.imageFit === 'contain'
                              ? 'h-full w-full object-contain'
                              : 'h-full w-full object-cover'
                          }
                        />
                      </ImageLightbox>
                    ) : (
                      <ImagePlaceholder label="certificate" />
                    )}
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <p className="text-xl font-semibold">{item.title}</p>
                <p
                  className="mt-1 font-display text-3xl leading-[1.05] font-bold text-balance md:text-4xl"
                  style={{ color: accent.text }}
                >
                  {item.result}
                </p>
                {item.description && (
                  <p className="mx-auto mt-3 max-w-md text-lg leading-snug text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
