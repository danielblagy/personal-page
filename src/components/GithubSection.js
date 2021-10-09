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
        <h3><Link href={userData.html_url} color='inherit'>{userData.html_url}</Link></h3>
        
        <List style={{display: 'inline-block', textAlign: 'left'}}>
          <ListItem>
            <ListItemText primary={userData.followers} secondary='followers' />
          </ListItem>
          
          <ListItem>
            <ListItemText primary={userData.public_repos} secondary='public repositories' />
          </ListItem>
        </List>
        
        <br/>
                
        {reposData == null ? 'Fetching repos data...' : getPopularReposDisplay()}
      </>
    )
  }
  
  function getPopularReposDisplay() {
    
    let popularRepos = [...reposData]
    
    popularRepos.sort((a, b) => {
      const aPopularity = a.stargazers_count + a.forks_count
      const bPopularity = b.stargazers_count + b.forks_count
      
      if (aPopularity < bPopularity) return 1
      if (aPopularity > bPopularity) return -1
      return 0
    })
    
    popularRepos = popularRepos.slice(0, 5)
    
    return (
      <List style={{display: 'inline-block', textAlign: 'left', flexWrap: 'wrap'}} sx={{maxWidth: '360px'}}>
        {popularRepos.map((repo, index) => {
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