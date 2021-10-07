import YoutubeSection from './YoutubeSection'
import InstagramSection from './InstagramSection'
import GithubSection from './GithubSection'
import AboutSection from './AboutSection'

function Content({currentSection}) {
  if (currentSection === 'youtube') {
    return <YoutubeSection />
  }
  
  else if (currentSection === 'instagram') {
    return <InstagramSection />
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