import Button from '@mui/material/Button'
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'

function PublicSection() {
  
  function goToWebsite(link) {
    window.location.href = link
  }
  
  return (
    <div className='PublicSection'>
      <h3>Youtube</h3>
      <p>
        I make videos on the things I'm passionate and curious about.
      </p>
      <Button
        onClick={() => {goToWebsite('https://www.youtube.com/channel/UCI_FXyNaHvWN5Bu3ma4EVRw/')}}
        variant='contained'
        color='primary'
        startIcon={<AiFillYoutube />}
        >
          Go to the channel
      </Button>
      
      <h3>Intagram</h3>
      <p>
        This is the best way to contact me.
      </p>
      <Button
        onClick={() => {goToWebsite('https://www.instagram.com/danielblagy/')}}
        variant='contained'
        color='primary'
        startIcon={<AiFillInstagram />}
        >
          Go to the profile
      </Button>
    </div>
  )
  }
  
  export default PublicSection