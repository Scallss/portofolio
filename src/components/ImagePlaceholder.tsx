import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  label: string
  className?: string
}

/** Stands in for an asset Pascal will provide later (hero photo, project
 * screenshot, achievement photo). Deliberately plain — a real image should
 * make this component's design invisible the moment it's swapped in. */
export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-border bg-muted/40 text-muted-foreground',
        className,
      )}
    >
      <ImageIcon className="size-6" strokeWidth={1.5} />
      <span className="font-mono text-[11px]">{label}</span>
    </div>
  )
}
