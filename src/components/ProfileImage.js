import unloadedPic from './unloaded.png'

function ProfileImage({avatarUrl}) {
  if (avatarUrl === '') {
    return <img id='profileImg' src={unloadedPic} width='250px' alt='Profile'/>
  }
  else {
    return <img id='profileImg' src={avatarUrl} width='250px' alt='Profile'/>
  }
}

export default ProfileImage