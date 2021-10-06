import {useState} from 'react'

function Navigation() {
  
  const [fadeProp, setFadeProp] = useState({fade: 'fade-out'})
  
  function fadeTest() {
    if (fadeProp.fade === 'fade-in') {
      setFadeProp({fade: 'fade-out'})
    } else {
        setFadeProp({fade: 'fade-in'})
    }
  }
  
  return (
    <div className='Navigation'>
    <p>
      <button onClick={fadeTest}>Toggle Fade</button>
    </p>
    <p className={fadeProp.fade}>
      Text
    </p>
    </div>
  )
  }
  
  export default Navigation