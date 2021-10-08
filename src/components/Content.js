import PublicSection from './PublicSection'
import GithubSection from './GithubSection'
import AboutSection from './AboutSection'

function Content({currentSection}) {
  if (currentSection === 'public') {
    return <PublicSection />
  }
  
  else if (currentSection === 'github') {
    return <GithubSection />
  }
  
  else if (currentSection === 'about') {
    return <AboutSection />
  }
  
  else {
    return null
  }
}

export default Content