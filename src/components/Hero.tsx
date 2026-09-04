import { Mail, FileDown } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Button } from '@/components/ui/button'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import pascalPhoto from '@/assets/pascal.webp'

export function Hero() {
  return (
    <header id="home" className="relative flex min-h-[85vh] items-center">
      <div
        className="glow-blob -top-24 -left-24 size-72 bg-[var(--chart-1)]/25 md:size-96"
        aria-hidden="true"
      />
      <div
        className="glow-blob top-10 right-0 size-64 bg-[var(--chart-2)]/20 md:size-80"
        aria-hidden="true"
      />
      <div
        className="glow-blob bottom-0 left-1/3 size-72 bg-[var(--accent-amber)]/[0.12] md:size-96"
        aria-hidden="true"
      />
      <div
        className="glow-blob top-1/3 right-1/4 size-56 bg-[var(--accent-violet)]/[0.16] md:size-72"
        aria-hidden="true"
      />

      <div className="mx-auto flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-center md:gap-10 md:text-left lg:gap-70">
        <div className="shrink-0">
          <h1 className="reveal font-display text-4xl leading-none font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Pascal Hafidz Fajri
          </h1>
          <p
            className="reveal mt-6 max-w-md text-lg font-light text-muted-foreground md:text-xl"
            style={{ animationDelay: '0.12s' }}
          >
            Building Research and Production Grade AI/ML systems and full-stack products.
          </p>

          <div
            className="reveal mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            style={{ animationDelay: '0.22s' }}
          >
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-11 gap-2 rounded-xl px-5 text-[0.95rem] font-semibold shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: 'var(--badge-blue)', color: '#fff' }}
            >
              <a href="mailto:pascalhafidz2005@gmail.com">
                <Mail className="size-[1.1rem]" /> Email
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-11 gap-2 rounded-xl px-5 text-[0.95rem] font-semibold shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
            >
              <a href="https://github.com/Scallss" target="_blank" rel="noreferrer">
                <SiGithub className="size-[1.05rem]" /> GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-11 gap-2 rounded-xl px-5 text-[0.95rem] font-semibold shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: '#0A66C2', color: '#fff' }}
            >
              <a
                href="https://www.linkedin.com/in/pascal-fajri-9a44b0337/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="size-[1.1rem]" /> LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-11 gap-2 rounded-xl px-5 text-[0.95rem] font-semibold shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: 'var(--badge-amber)', color: '#fff' }}
            >
              <a href="/cv/CV_Pascal_v2.pdf" target="_blank" rel="noreferrer">
                <FileDown className="size-[1.1rem]" /> Resume
              </a>
            </Button>
          </div>
        </div>

        <div
          className="reveal relative mx-auto size-full shrink-0 md:mx-0 md:size-48 lg:size-80"
          style={{ animationDelay: '0.3s' }}
        >
          <div
            className="absolute -right-3 -bottom-3 size-full rounded-lg bg-[var(--badge-blue)]/25 md:-right-4 md:-bottom-4"
            aria-hidden="true"
          />
          <div
            className="absolute -top-3 -left-3 size-full rounded-lg border-2 border-[var(--badge-blue)]/50 md:-top-4 md:-left-4"
            aria-hidden="true"
          />
          <img
            src={pascalPhoto}
            alt="Pascal Hafidz Fajri"
            className="relative aspect-square h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </header>
  )
}
