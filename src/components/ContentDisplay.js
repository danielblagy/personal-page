import {useState} from 'react'
import Content from './Content'

function ContentDisplay() {
  
  const [currentSection, setCurrentSection] = useState('')
  
  function switchToYoutubeSection() {
    setCurrentSection('youtube')
  }
  
  return (
    <div className='ContentDisplay'>
      <p>
        <button onClick={switchToYoutubeSection}>Youtube</button>
      </p>
      <Content currentSection={currentSection} />
    </div>
  )
  }
  
  export default ContentDisplay