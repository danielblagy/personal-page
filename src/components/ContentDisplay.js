import {useState} from 'react'
import Content from './Content'

function ContentDisplay() {
  
  const [currentSection, setCurrentSection] = useState('')
  
  function switchToYoutubeSection() {
    setCurrentSection('youtube')
  }
  
  function switchToInstagramSection() {
    setCurrentSection('instagram')
  }
  
  function switchToGithubSection() {
    setCurrentSection('github')
  }
  
  function switchToAboutSection() {
    setCurrentSection('about')
  }
  
  return (
    <div className='ContentDisplay'>
      <p>
        <button onClick={switchToYoutubeSection}>Youtube</button>
        <button onClick={switchToInstagramSection}>Instagram</button>
        <button onClick={switchToGithubSection}>Github</button>
        <button onClick={switchToAboutSection}>About</button>
      </p>
      
      <Content currentSection={currentSection} />
    </div>
  )
  }
  
  export default ContentDisplay