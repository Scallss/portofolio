export type TrackType = 'research' | 'engineering' | 'org' | 'education'

export interface TimelineEntry {
  year: string
  period: string
  role: string
  org: string
  detail?: string
  track: TrackType
}

export const trackMeta: Record<TrackType, { label: string; textColor: string; badgeColor: string }> = {
  research: { label: 'Research', textColor: 'var(--chart-5)', badgeColor: 'var(--badge-blue)' },
  engineering: { label: 'Engineering', textColor: 'var(--chart-5)', badgeColor: 'var(--badge-blue)' },
  org: { label: 'Organization', textColor: 'var(--chart-5)', badgeColor: 'var(--badge-blue)' },
  education: { label: 'Education', textColor: 'var(--chart-5)', badgeColor: 'var(--badge-blue)' },
}

// Reverse-chronological by start date. Education (2023-Present) sits at the
// bottom, where its start date actually falls, rather than in a separate
// column with a lot of empty space next to a 4-item experience list.
export const timeline: TimelineEntry[] = [
  {
    year: '2026',
    period: 'Feb 2026 — Present',
    role: 'Research Intern',
    org: 'MLCV Lab, Faculty of Computer Science, Universitas Indonesia',
    detail:
      'Helped build PRECIA, a clinical AI platform including the development and maintenance of the ECG digitization pipeline and signal-based mitral valve disease classification model.',
    track: 'research',
  },
  {
    year: '2025',
    period: 'Apr 2025 — Nov 2025',
    role: 'Software Engineering Staff',
    org: 'COMPFEST 17',
    detail: 'Developed the COMPFEST 17 web platform as a full-stack developer.',
    track: 'engineering',
  },
  {
    year: '2025',
    period: 'Feb 2025 — Jun 2025',
    role: 'Undergraduate Teaching Assistant',
    org: 'Programming Foundations 2, Universitas Indonesia',
    detail: 'Object-oriented programming in Java: encapsulation, inheritance, polymorphism, abstraction.',
    track: 'engineering',
  },
  {
    year: '2024',
    period: 'Jun 2024 — Jan 2025',
    role: 'Community Service Staff',
    org: 'BEM Fasilkom UI',
    detail: 'PIC of PEDAS, a fundraising program for the education of faculty staff’s children.',
    track: 'org',
  },
  {
    year: '2023',
    period: '2023 — Present',
    role: 'University of Indonesia',
    org: 'Computer Science (S. Kom)',
    track: 'education',
  },
]
