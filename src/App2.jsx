
import React, { useState } from 'react';
import './App.css';
import AccountDetails from './components/AccountDetails/AccountDetails.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Tracklist from './components/Tracklist/Tracklist.jsx';
import Playlist from './components/Playlist/Playlist.jsx';
import LoginButton from './components/spotify/LoginButton.jsx';
import { Grid } from '@mui/material';
import styles from './App.module.css'; // Import CSS module

function App() {
  const [songData, setSongData] = useState([]);

  const [playlistName, setPlaylistName] = useState("");
  const [trackList, setTrackList] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  //sending data to Account Details
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT;
  const DETAILS_ENDPOINT = `https://api.spotify.com/v1/users/${userId}/playlists`;


  const addToTrackList = (track) => {
    if (!trackList.some(item => item.uri === track.uri)) {
      setTrackList([...trackList, track]);
    }
  };

  const savePlayListFromTrackList = () => {
    let bearerToken = window.localStorage.getItem("token");
    const headers = { 'Authorization': `Bearer ${bearerToken}`};
    const body = {
    "name": "",
    "description": "",
    "public": false

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
  }
};


  return (
    <div className={styles.appContainer}>
      <AccountDetails avatar={avatar} setAvatar={setAvatar} userName={userName} setUserName={setUserName} userId={userId} setUserId={setUserId} />
      
      <h1>Playlistify</h1>
      <LoginButton/>
      <Grid container spacing={3} className={styles.gridContainer}>
        <Grid item xs={12} sm={6}>
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
