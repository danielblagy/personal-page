import ProfileDisplay from './components/ProfileDisplay'
import ContentDisplay from './components/ContentDisplay'

import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#628079'
      },
      
      secondary: {
        main: '#254c4c'
      },
    },
  })
  
  return (
  <div className='App'>
    <ThemeProvider theme={theme}>
      <ProfileDisplay />
      <ContentDisplay />
    </ThemeProvider>
  </div>
  );
}

export default App

// nice color #628079