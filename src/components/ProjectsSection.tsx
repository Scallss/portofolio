import { useState } from 'react'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { DashedCircle, RingDots } from '@/components/decor/DecorShapes'
import { researchProjects, engineeringProjects } from '@/data/projects'
import { cn } from '@/lib/utils'

type Tab = 'engineering' | 'research'

function TitleWord({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="group inline-flex flex-col items-stretch outline-none"
    >
      <span
        className={cn(
          'font-display font-bold text-foreground transition-all duration-300 ease-out',
          active
            ? 'scale-100 text-4xl opacity-100 md:text-6xl'
            : 'scale-90 text-2xl opacity-35 group-hover:opacity-60 md:text-4xl',
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          'mt-1.5 h-1 w-full origin-center rounded-full bg-foreground transition-transform duration-300 ease-out',
          active ? 'scale-x-100' : 'scale-x-0',
        )}
        aria-hidden="true"
      />
    </button>
  )
}

export function ProjectsSection() {
  const [tab, setTab] = useState<Tab>('engineering')
  const projects = tab === 'engineering' ? engineeringProjects : researchProjects

  return (
    <Section
      id="projects"
      title="Projects"
      titleSlot={
        <h2 className="mb-12 flex items-baseline justify-center gap-6 md:mb-16 md:gap-10">
          <TitleWord label="Projects" active={tab === 'engineering'} onClick={() => setTab('engineering')} />
          <TitleWord label="Research" active={tab === 'research'} onClick={() => setTab('research')} />
        </h2>
      }
    >
      <div
        className="glow-blob top-10 right-0 size-72 bg-[var(--chart-2)]/[0.12] md:size-96"
        aria-hidden="true"
      />
      <div
        className="glow-blob bottom-0 left-0 size-64 bg-[var(--accent-violet)]/[0.1] md:size-80"
        aria-hidden="true"
      />
      <DashedCircle className="absolute top-4 left-4 hidden lg:block xl:left-12" color="var(--chart-5)" size={64} />
      <RingDots className="absolute bottom-10 right-4 hidden lg:block xl:right-14" size={48} />

      <div key={tab} className="reveal grid grid-cols-1 gap-x-8 gap-y-10 px-40 sm:grid-cols-2 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
