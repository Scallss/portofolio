import { Section } from '@/components/Section'
import { RingDots } from '@/components/decor/DecorShapes'
import { skills } from '@/data/skills'

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div
        className="glow-blob top-1/2 right-0 size-72 -translate-y-1/2 bg-[var(--chart-5)]/[0.08] md:size-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-6 hidden size-28 -translate-y-1/2 opacity-60 xl:block"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(var(--border) 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />
      <RingDots className="absolute right-8 bottom-2 hidden lg:block" size={56} />

      <ul className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {skills.map(({ name, icon: Icon, color }) => (
          <li key={name} className="flex items-center gap-2.5">
            <Icon size={20} color={color} className="shrink-0" />
            <span className="text-sm">{name}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
