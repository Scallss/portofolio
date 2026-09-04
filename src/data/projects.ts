export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  role: string
  /** path under /src/assets, provided later — undefined renders a placeholder */
  image?: string
  /** 'contain' for diagrams/screenshots that shouldn't be cropped — rendered on a white pad */
  imageFit?: 'cover' | 'contain'
  /** set only for projects whose code may be publicly linked */
  repoUrl?: string
  /** research projects are private/unpublished — no "View Code" link, ever */
  private?: boolean
}

export const researchProjects: Project[] = [
  {
    id: 'ecg-digitization',
    title: 'Paper ECG Waveform Digitization',
    description:
      'Paper ECG scans can’t feed an ML model directly. Built an end-to-end pipeline: preprocessing, lead cropping, and calibrated voltage/time reconstruction, with recovery for noisy or clipped traces — output ready for downstream training.',
    stack: ['Python', 'OpenCV'],
    role: 'Solo research, MLCV Lab',
    private: true,
    image: 'ecg-digitization',
    imageFit: 'contain',
  },
  {
    id: 'mitral-classification',
    title: 'Improving Mitral Valve Disease Classification: a Signal-Based Deep Learning Approach',
    description:
      'Screening mitral valve disease from digitized 12-lead ECG signals — a cheaper alternative to echocardiography. A hierarchical control-vs-disease-then-MR-vs-MS cascade, ensembled across architectures, reached macro F1 0.6354 / AUC 0.8566.',
    stack: ['Python', 'PyTorch', 'scikit-learn'],
    role: 'Solo research, MLCV Lab',
    private: true,
    image: 'mitral-results-chart',
  },
]

export const engineeringProjects: Project[] = [
  {
    id: 'precia',
    title: 'PRECIA (Precision & Intelligent Analytics for Medicine)',
    description:
      'A clinical AI platform for cardiology screening built around ECG digitization. Built the mitral classification microservice end-to-end, plus the cross-cutting "AI Registry" feature spanning the Django backend and Next.js frontend — turning the research above into something clinicians use.',
    stack: ['FastAPI', 'Django', 'Next.js', 'MLflow'],
    role: 'Primary author (mitral service) · Feature owner (AI Registry, BE+FE)',
    private: true,
    image: 'precia-login',
  },
  {
    id: 'compfest-17',
    title: 'COMPFEST 17',
    description:
      'A large-scale event platform spanning Academy, Xcelerate, Main Event, and a Virtual Playground rewards system. Built the Academy student dashboard, its points-history API, and the walk-in interview registration flow.',
    stack: ['React Router', 'NestJS', 'PostgreSQL'],
    role: 'Software Engineering Staff · ~20-person team',
    repoUrl: 'https://github.com/COMPFEST/furnace',
    image: 'compfest-homepage',
  },
  {
    id: 'vessel',
    title: 'Vessel',
    description:
      'A hybrid Web2/Web3 trade-finance platform: invoices tokenized as NFTs, funding pools live on-chain, investors still transact in IDR. Built the investor funding flow and admin KYC-verification dashboard.',
    stack: ['Next.js', 'TypeScript'],
    role: 'Contributor, 3-person team',
    repoUrl: 'https://github.com/MaulRai/vessel',
    image: 'vessel-homepage',
  },
  {
    id: 'vigilnet',
    title: 'VigilNet',
    description:
      'A real-time event safety and SOS platform. Designed a BLE peer-to-peer crowd-density feature (native Android plugin + TypeScript bridge), and replaced a placeholder map with a live Leaflet heatmap.',
    stack: ['React', 'TypeScript', 'Fastify'],
    role: 'Contributor, 2-person team',
    repoUrl: 'https://github.com/VigilNet/mobile',
    image: 'vigilnet-homepage',
  },
]
