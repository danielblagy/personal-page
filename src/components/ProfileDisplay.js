import {useState, useEffect} from 'react'

function ProfileDisplay() {
  const [avatarUrl, setAvatarUrl] = useState('')
  
  useEffect(() => {
    fetch('http://api.github.com/users/danielblagy')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setAvatarUrl(data.avatar_url)
    });
  }, [])
  
  return (
    <div className='ProfileDisplay'>
      <p>
        <img id='profileImg' src={avatarUrl} width='250px' alt='Profile'/>
      </p>
      
      <h2>
        Daniel Blagy
      </h2>
    </div>
  )
}

export default ProfileDisplay