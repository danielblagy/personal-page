import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Link from '@mui/material/Link'

function RepoDisplay({ repo }) {
  
  const repoTitle = <Link href={repo.html_url} color='inherit' underline='hover'>{repo.name}</Link>
  
  return (
    <ListItem>
      <ListItemText primary={repoTitle} secondary={repo.description} />
    </ListItem>
  )
}

export default RepoDisplay