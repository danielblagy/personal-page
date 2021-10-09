import {useState, useEffect} from 'react'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import RepoDisplay from './RepoDisplay'

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
        
        <List style={{display: 'inline-block', textAlign: 'left'}}>
          <ListItem>
            <ListItemText primary={userData.followers} secondary='followers' />
          </ListItem>
          
          <ListItem>
            <ListItemText primary={userData.public_repos} secondary='public repositories' />
          </ListItem>
        </List>
        
        <p><Link href={userData.html_url} color='inherit'>{userData.html_url}</Link></p>
        
        {reposData == null ? 'Fetching repos data...' : getPopularReposDisplay()}
      </>
    )
  }
  
  function getPopularReposDisplay() {
    
    return (
      <List style={{display: 'inline-block', textAlign: 'left', flexWrap: 'wrap'}} sx={{maxWidth: '300px'}}>
        {reposData.map((repo, index) => {
          return <RepoDisplay key={index} repo={repo} />
        })}
      </List>
    )
  }
  
  return (
    <div className='GithubSection'>
      {userData == null ? 'Fetching profile data...' : getProfileDisplay()}
    </div>
  )
  }
  
  export default GithubSection