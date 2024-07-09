
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Tracklist from './components/Tracklist/Tracklist.jsx';
import Playlist from './components/Playlist/Playlist.jsx';
import LoginButton from './components/spotify/LoginButton.jsx';
import { Grid } from '@mui/material';
import styles from './App.module.css'; // Import CSS module

function App() {
  const [songData, setSongData] = useState([
    { Title: 'Neon Star', Artist: 'Morgan Wallen', uri: 'track/1GiwvmI57OTGcKGNigZFJb'},
    { Title: 'Silence', Artist: 'Marshmello', uri: 'track/7vGuf3Y35N4wmASOKLUVVU' },
    { Title: 'Not Like Us', Artist: 'Kendrick Lamar', uri: 'track/6AI3ezQ4o3HUoP6Dhudph3' }
    // Add more songs as needed
  ]);

  const [playlistName, setPlaylistName] = useState("");
  const [trackList, setTrackList] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const addToTrackList = (track) => {
    if (!trackList.some(item => item.uri === track.uri)) {
      setTrackList([...trackList, track]);
    }
  };

  const savePlayListFromTrackList = () => {
    // Check if trackList is already in playlists
    if (!playlists.some(list => JSON.stringify(list.tracks) === JSON.stringify(trackList))) {
      const newPlaylist = {
        playlistName: playlistName || "Unnamed Playlist", // Default name if playlistName is empty
        tracks: [...trackList]
      };
      setPlaylists([...playlists, newPlaylist]);
      setTrackList([]); // Clear trackList after saving
      setPlaylistName(""); // Clear playlistName after saving
    } else {
      alert('Playlist already exists.');
    }
  };

  return (
    <div className={styles.appContainer}>
      <LoginButton/>
      <Grid container spacing={3} className={styles.gridContainer}>
        <Grid item xs={12} sm={6}>
          <SearchBar />
          <SearchResults songs={songData} addToTrackList={addToTrackList}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={styles.playlistWrapper}>
            <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} />
            <Tracklist trackList={trackList} setTrackList={setTrackList} savePlayListFromTrackList={savePlayListFromTrackList} />
          </div>
        </Grid>
      </Grid>
      <div>
        {playlists.map((playlist, index) => (
          <div key={index}>
            <h3>{playlist.playlistName}</h3>
            {playlist.tracks.map((track, idx) => (
              <p key={idx}>{track.Title}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
