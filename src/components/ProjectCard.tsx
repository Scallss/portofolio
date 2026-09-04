import { ExternalLink, Lock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ImagePlaceholder } from '@/components/ImagePlaceholder'
import { ImageLightbox } from '@/components/ImageLightbox'
import { MitralResultsChart } from '@/components/charts/MitralResultsChart'
import { projectScreenshots } from '@/data/projectScreenshots'
import type { Project } from '@/data/projects'

const accent = 'var(--badge-blue)'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <div className="mb-4 overflow-hidden rounded-lg">
        {/* Color spine — a solid accent tab along the top edge, like a folder label */}
        <div className="h-1.5" style={{ backgroundColor: accent }} aria-hidden="true" />
        <div className="aspect-video bg-muted/40">
          {project.image === 'mitral-results-chart' ? (
            <div className="flex h-full w-full items-center justify-center p-3">
              <MitralResultsChart />
            </div>
          ) : project.image && projectScreenshots[project.image] ? (
            project.imageFit === 'contain' ? (
              <ImageLightbox
                src={projectScreenshots[project.image]}
                alt={`${project.title} diagram`}
                className="h-full"
              >
                <div className="flex h-full w-full items-center justify-center bg-white p-4">
                  <img
                    src={projectScreenshots[project.image]}
                    alt={`${project.title} diagram`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </ImageLightbox>
            ) : (
              <ImageLightbox
                src={projectScreenshots[project.image]}
                alt={`${project.title} screenshot`}
                className="h-full"
              >
                <img
                  src={projectScreenshots[project.image]}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover object-top"
                />
              </ImageLightbox>
            )
          ) : (
            <ImagePlaceholder label={`${project.title} screenshot`} />
          )}
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        {project.private ? (
          <span
            className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"
            title="Private codebase — description only"
          >
            <Lock className="size-3.5" />
          </span>
        ) : (
          project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            >
              View code <ExternalLink className="size-3.5" />
            </a>
          )
        )}
      </div>

      <p className="mt-1.5 max-w-[60ch] text-sm text-muted-foreground">{project.description}</p>

      <div className="mt-2.5 flex flex-wrap gap-1">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-mono text-[10px] font-normal">
            {tech}
          </Badge>
        ))}
      </div>

    </article>
  )
}
