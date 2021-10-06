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
        <img src={avatarUrl} width='250px' alt='Profile'/>
      </p>
      
      <p>
        Daniel Blagy
      </p>
    </div>
  )
}

export default ProfileDisplay