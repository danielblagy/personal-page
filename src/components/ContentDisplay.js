import {useState, useEffect} from 'react'
import Content from './Content'
import Button from '@mui/material/Button'
import {AiFillHeart, AiFillGithub, AiFillBook} from 'react-icons/ai'

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
      <p className='navigation'>
        <Button
          onClick={() => {transitionTo('public')}}
          variant='contained'
          color={currentSection === 'public' ? 'secondary' : 'primary'}
          startIcon={<AiFillHeart />}>Public</Button>
        
        <Button
          onClick={() => {transitionTo('github')}}
          variant='contained'
          color={currentSection === 'github' ? 'secondary' : 'primary'}
          startIcon={<AiFillGithub />}>Github</Button>
          
        <Button
          onClick={() => {transitionTo('about')}}
          variant='contained'
          color={currentSection === 'about' ? 'secondary' : 'primary'}
          startIcon={<AiFillBook />}>About</Button>
      </p>
      
      <div className={fade}>
        <Content currentSection={currentSection} />
      </div>
    </div>
  )
  }
  
  export default ContentDisplay