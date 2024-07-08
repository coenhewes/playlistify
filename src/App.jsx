
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Tracklist from './components/Tracklist/Tracklist.jsx';
import Playlist from './components/Playlist/Playlist.jsx';
import { Grid } from '@mui/material';
import styles from './App.module.css'; // Import CSS module

function App() {
  const [songData, setSongData] = useState([
    { Title: 'Not Like Us', Artist: 'Kendrick Lamar' },
    { Title: 'Silence', Artist: 'Marshmellow' },
    { Title: 'Don\'t Start Now', Artist: 'Dua Lipa' }
    // Add more songs as needed
  ]);

  const [playlistName, setPlaylistName] = useState("");
  const [trackList, setTrackList] = useState([]);

  
const addToTrackList = (track) => {
  if (!trackList.some(item => item.Title === track.Title && item.Artist === track.Artist)) {
    setTrackList([...trackList, track]);
  }
};


const removeFromTrackList = (trackToRemove) => {
  // Filter out the track that matches the criteria (e.g., Title and Artist)
  const updatedTrackList = trackList.filter(track => !(track.Title === trackToRemove.Title && track.Artist === trackToRemove.Artist));
  
  // Update the state with the filtered trackList
  setTrackList(updatedTrackList);
};

  return (
    <div className={styles.appContainer}>
      <Grid container spacing={2} className={styles.gridContainer}>
        <Grid item xs={12} sm={6}>
          <SearchBar />
          <SearchResults songs={songData} addToTrackList={addToTrackList}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={styles.playlistWrapper}>
            <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} />
            <Tracklist trackList={trackList} removeFromTrackList={removeFromTrackList} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
