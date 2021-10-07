import {useState, useEffect} from 'react'
import Content from './Content'
import Button from '@mui/material/Button'

function ContentDisplay() {
  
  const [currentSection, setCurrentSection] = useState('')
  const [fade, setFade] = useState('fade-out')
  
  function transitionTo(section) {
    if (currentSection === section) return
    
    setFade('fade-out')
    setTimeout(() => { setCurrentSection(section) }, 500);
  }
  
  useEffect(() => {
    setFade('fade-in')
  }, [currentSection])
  
  return (
    <div className='ContentDisplay'>
      <p className='navbar'>
        <Button onClick={() => {transitionTo('youtube')}} variant='contained' color='primary'>Youtube</Button>
        <Button onClick={() => {transitionTo('instagram')}} variant='contained' color='primary'>Instagram</Button>
        <Button onClick={() => {transitionTo('github')}} variant='contained' color='primary'>Github</Button>
        <Button onClick={() => {transitionTo('about')}} variant='contained' color='primary'>About</Button>
      </p>
      
      <div className={fade}>
        <Content currentSection={currentSection} />
      </div>
    </div>
  )
  }
  
  export default ContentDisplay