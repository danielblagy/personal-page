import {useState, useEffect} from 'react'
import ProfileImage from './ProfileImage'

function ProfileDisplay() {
  const [avatarUrl, setAvatarUrl] = useState('')
  
  useEffect(() => {
    fetch('http://api.github.com/users/danielblagy')
    .then(response => response.json())
    .then(data => {
      setAvatarUrl(data.avatar_url)
    });
  }, [])
  
  return (
    <div className='ProfileDisplay'>
      <ProfileImage avatarUrl={avatarUrl} />
      <h2>Daniel Blagy</h2>
    </div>
  )
}

export default ProfileDisplay