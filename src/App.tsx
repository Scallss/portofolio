import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { ExperienceEducation } from '@/components/ExperienceEducation'
import { ProjectsSection } from '@/components/ProjectsSection'
import { AchievementsSection } from '@/components/AchievementsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div id="top" className="px-6 md:px-12 xl:px-20 2xl:px-52">
        <Hero />
        <ExperienceEducation />
        <ProjectsSection />
        <AchievementsSection />
        <SkillsSection />
      </div>
      <Footer />
    </>
  )
}

export default App
