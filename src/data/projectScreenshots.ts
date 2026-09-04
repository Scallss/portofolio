import preciaLogin from '@/assets/projects/precia-login.webp'
import compfestHomepage from '@/assets/projects/compfest-homepage.webp'
import vesselHomepage from '@/assets/projects/vessel-homepage.webp'
import vigilnetHomepage from '@/assets/projects/vigilnet-homepage.webp'
import ecgDigitization from '@/assets/ecg_digitization.webp'

/** Real screenshots, keyed by the string used in a project's `image` field.
 * Add an entry here whenever a real asset lands in src/assets/projects/. */
export const projectScreenshots: Record<string, string> = {
  'precia-login': preciaLogin,
  'compfest-homepage': compfestHomepage,
  'vessel-homepage': vesselHomepage,
  'vigilnet-homepage': vigilnetHomepage,
  'ecg-digitization': ecgDigitization,
}
