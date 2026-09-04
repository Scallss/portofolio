import { Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

export function Footer() {
  return (
    <footer
      className="relative mt-20 overflow-hidden md:mt-28"
      style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
    >
      <div
        className="glow-blob top-0 left-1/4 size-72 bg-[var(--badge-violet)]/[0.18] md:size-96"
        aria-hidden="true"
      />
      <div
        className="glow-blob right-1/4 bottom-0 size-64 bg-[var(--badge-blue)]/[0.18] md:size-80"
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8 px-6 py-14 sm:flex-row sm:items-end sm:justify-between md:px-12 md:py-16 xl:px-20 2xl:px-52">
        <p className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Pascal Hafidz Fajri
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:pascalhafidz2005@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:border-transparent"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--badge-blue)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <Mail className="size-4" /> pascalhafidz2005@gmail.com
          </a>
          <a
            href="https://github.com/Scallss"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:border-transparent"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--badge-violet)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <SiGithub className="size-4" /> github.com/Scallss
          </a>
        </div>
      </div>
    </footer>
  )
}
