import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  title: string
  /** Overrides the default gradient <h2> entirely — for sections that need an
   * interactive/custom heading (e.g. Projects' clickable title-toggle). */
  titleSlot?: ReactNode
  children: ReactNode
  className?: string
}

export function Section({ id, title, titleSlot, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('relative scroll-mt-20 py-16 first:pt-0 md:py-20', className)}>
      {titleSlot ?? (
        <h2 className="mb-12 text-center font-display text-4xl font-bold tracking-tight md:mb-16 md:text-6xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
