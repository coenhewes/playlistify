import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Tracklist from './components/Tracklist/Tracklist.jsx';
import {Grid} from '@mui/material';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SearchBar />
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <SearchResults/>
        </Grid>
          <Grid item sm={6}>
            <Tracklist/>
        </Grid>
        </Grid>
    </>
  )
}

export default App
