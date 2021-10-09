import {useState, useEffect} from 'react'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack';

function GithubSection() {
  
  const [userData, setUserData] = useState(null)
  const [reposData, setReposData] = useState(null)
  
  useEffect(() => {
    fetch('http://api.github.com/users/danielblagy')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setUserData(data)
    });
  }, [])
  
  useEffect(() => {
    if (userData == null) return
    
    fetch(userData.repos_url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setReposData(data)
    });
  }, [userData])
  
  function getProfileDisplay() {
    
    return (
      <>
        <h3>{userData.login}</h3>
        
        <div style={{display: 'inline-block', textAlign: 'left'}}>
          Followers: {userData.followers}<br/>
          Public Repos: {userData.public_repos}
        </div>
        
        <p><Link href={userData.html_url} color='inherit'>{userData.html_url}</Link></p>
        
        <p>
          {reposData == null ? 'Fetching repos data...' : getPopularReposDisplay()}
        </p>
      </>
    )
  }
  
  function getPopularReposDisplay() {
    
    return (
      <>
        popular repos
      </>
    )
  }
  
  return (
    <div className='GithubSection'>
      {userData == null ? 'Fetching profile data...' : getProfileDisplay()}
    </div>
  )
  }
  
  export default GithubSection