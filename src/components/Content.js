import YoutubeSection from './YoutubeSection'
import InstagramSection from './InstagramSection'
import GithubSection from './GithubSection'
import AboutSection from './AboutSection'

function Content({currentSection}) {
  if (currentSection === 'youtube') {
    return (
      <div className='fade-in'>
        <YoutubeSection />
      </div>
    )
  }
  
  else if (currentSection === 'instagram') {
    return (
      <div className='fade-in'>
        <InstagramSection />
      </div>
    )
  }
  
  else if (currentSection === 'github') {
    return (
      <div className='fade-in'>
        <GithubSection />
      </div>
    )
  }
  
  else if (currentSection === 'about') {
    return (
      <div className='fade-in'>
        <AboutSection />
      </div>
    )
  }
  
  else {
    return (
      <div className='fade-out'>
        
      </div>
    )
  }
}

export default Content