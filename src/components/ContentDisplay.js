import {useState, useEffect} from 'react'
import Content from './Content'

function ContentDisplay() {
  
  const [currentSection, setCurrentSection] = useState('')
  const [fade, setFade] = useState('fade-out')
  
  function transitionTo(section) {
    setFade('fade-out')
    setTimeout(() => { setCurrentSection(section) }, 1000);
  }
  
  useEffect(() => {
    setFade('fade-in')
  }, [currentSection])
  
  return (
    <div className='ContentDisplay'>
      <p>
        <button onClick={() => {transitionTo('youtube')}}>Youtube</button>
        <button onClick={() => {transitionTo('instagram')}}>Instagram</button>
        <button onClick={() => {transitionTo('github')}}>Github</button>
        <button onClick={() => {transitionTo('about')}}>About</button>
      </p>
      
      <div className={fade}>
        <Content currentSection={currentSection} />
      </div>
    </div>
  )
  }
  
  export default ContentDisplay