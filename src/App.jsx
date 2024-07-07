
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Tracklist from './components/Tracklist/Tracklist.jsx';
import Playlist from './components/Playlist/Playlist.jsx';
import { Grid } from '@mui/material';

function App() {
  // Define songData state to hold the list of songs
  const [songData, setSongData] = useState([
    { Title: 'Not Like Us', Artist: 'Kendrick Lamar' },
    { Title: 'Silence', Artist: 'Marshmellow' },
    { Title: 'Dont Start Now', Artist: 'Dua Lipa'}
    // Add more songs as needed
  ]);

  const [playlistSongData, setPlaylistSongData] = useState([
    { Title: 'Not Like Us', Artist: 'Kendrick Lamar' },
    // Add more songs as needed
  ]);

  const [playlistName, setPlaylistName] = useState("Name Your Playlist");

  return (
    <>
       <Playlist playlistName={playlistName}/> 
      <SearchBar />
      <Grid container spacing={2}>
        <Grid item sm={6}>
          {/* Pass songData as props to SearchResults */}
          <SearchResults songs={songData} />
        </Grid>
        <Grid item sm={6}>
          <Tracklist playlistSongs={playlistSongData} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
