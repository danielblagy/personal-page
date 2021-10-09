import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

function RepoDisplay({ repo }) {
  
  return (
    <ListItem>
      <ListItemText primary={repo.name} secondary={repo.description} />
    </ListItem>
  )
}

export default RepoDisplay