import type { ReactNode } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

interface ImageLightboxProps {
  src: string
  alt: string
  children: ReactNode
  className?: string
}

/** Wraps an image-frame trigger; clicking it opens the same image large in a modal. */
export function ImageLightbox({ src, alt, children, className }: ImageLightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Expand ${alt}`}
          className={cn('block w-full cursor-zoom-in text-left', className)}
        >
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="border-none bg-transparent p-0 shadow-none sm:max-w-[90vw]" showCloseButton>
        <img src={src} alt={alt} className="max-h-[90vh] w-full rounded-lg object-contain" />
      </DialogContent>
    </Dialog>
  )
}
