import {
  SiPython,
  SiPytorch,
  SiOpencv,
  SiMlflow,
  SiScikitlearn,
  SiTypescript,
  SiReact,
  SiNestjs,
  SiDjango,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiKubernetes,
} from '@icons-pack/react-simple-icons'
import { Cloud, type LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'

export interface Skill {
  name: string
  icon: ComponentType<{ size?: number; className?: string; title?: string }> | LucideIcon
  /** brand hex color from simple-icons, used at low opacity for the icon tint */
  color?: string
}

// Ordered deliberately: AI/ML first, then software engineering — no visual
// divider between the two groups, the order itself carries the signal.
export const skills: Skill[] = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
  { name: 'MLflow', icon: SiMlflow, color: '#0194E2' },
  { name: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React / Next.js', icon: SiReact, color: '#61DAFB' },
  { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'AWS', icon: Cloud, color: '#FF9900' },
]
