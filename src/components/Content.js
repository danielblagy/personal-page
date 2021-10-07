import YoutubeSection from './YoutubeSection'

function Content({currentSection}) {
  if (currentSection === 'youtube') {
    return (
      <div className='fade-in'>
        <YoutubeSection />
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