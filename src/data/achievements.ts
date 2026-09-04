export interface Achievement {
  title: string
  result: string
  format: string
  /** problem + solution summary — filled in separately */
  description?: string
  /** key into achievementImages — undefined renders a placeholder */
  image?: string
  /** 'contain' for non-photo assets (e.g. a diagram) that shouldn't get cropped */
  imageFit?: 'cover' | 'contain'
  accent: 'blue' | 'violet' | 'amber'
}

export const achievements: Achievement[] = [
  {
    title: 'TechSprint 2026',
    result: '1st Runner-up + Best Data Insight',
    format: '24-hour offline hackathon',
    description:
      'Built an automated pipeline to catch inventory shrinkage before it becomes a loss — 100% precision, 91.8% recall on restock detection.',
    accent: 'blue',
    image: 'techsprint',
  },
  {
    title: 'SSFUNS 2026',
    result: 'Finalist — SSDS division',
    format: 'Fully online, ongoing',
    description:
      'Forecasted river water levels 8 months out for flood early-warning — a tailored model per station, reaching a leaderboard RMSE of 1.578.',
    accent: 'violet',
    image: 'ssfuns',
    imageFit: 'contain',
  },
]
