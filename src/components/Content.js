import YoutubeSection from './YoutubeSection'
import InstagramSection from './InstagramSection'
import GithubSection from './GithubSection'
import AboutSection from './AboutSection'

function Content({currentSection}) {
  if (currentSection === 'youtube') {
    return (
      <div>
        <YoutubeSection />
      </div>
    )
  }
  
  else if (currentSection === 'instagram') {
    return (
      <div>
        <InstagramSection />
      </div>
    )
  }
  
  else if (currentSection === 'github') {
    return (
      <div>
        <GithubSection />
      </div>
    )
  }
  
  else if (currentSection === 'about') {
    return (
      <div>
        <AboutSection />
      </div>
    )
  }
  
  else {
    return (
      <div>
        
      </div>
    )
  }
}

export default Content