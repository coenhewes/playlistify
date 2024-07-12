import React, { useState } from 'react';
import './App.css';
import AccountDetails from './components/AccountDetails/AccountDetails.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Tracklist from './components/Tracklist/Tracklist.jsx';
import Playlist from './components/Playlist/Playlist.jsx';
import LoginButton from './components/spotify/LoginButton.jsx';
import { Grid } from '@mui/material';
import styles from './App.module.css'; 
import Logo from '../public/logo.png';  // Import CSS module

function App() {
  const [songData, setSongData] = useState([]);

  const [playlistName, setPlaylistName] = useState("");
  const [trackList, setTrackList] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [createdPlaylist, setCreatedPlaylist] = useState("");
  const [playlistId, setPlaylistId] = useState("");
  //sending data to Account Details
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(""); 
  
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT;
  let bearerToken = window.localStorage.getItem("token");
  const bodyDeets = {
      "name": playlistName,
      "description": "Playlist from playlistify",
      "public": false
  };

const trackDeets = {
    "uris": [
        "string"
    ],
    "position": 0
};


  const optionsPlaylist = {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(bodyDeets)
    };

  const optionsTracklist = {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(trackDeets)
    };
  
  const addToTrackList = (track) => {
    if (!trackList.some(item => item.uri === track.uri)) {
      setTrackList([...trackList, track]);
    }
  };


  const savePlayListToSpotify = async () => {
      const newPlaylist = {
        playlistName: playlistName || "Unnamed Playlist", // Default name if playlistName is empty
        tracks: [...trackList]
      };
      setPlaylists([...playlists, newPlaylist]);
      setTrackList([]); // Clear trackList after saving
      setPlaylistName(""); // Clear playlistName after saving
    try {  

    const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, optionsPlaylist);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const playlistData = await response.json();
      setPlaylistId(playlistData.id); 
    } catch (error) {
      console.error('Error fetching playlist:', error);
    }
  };

  const saveTracksToPlaylist = () =>{
    let trackUris = [];
    for (let i = 0; i < trackList.length; i++){
      trackUris.push(trackList[i].uri);
    };
    fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${trackUris}`, optionsTracklist);
  };


  return (
    <>
      <img src={Logo}/>
      
    <div className={styles.appContainer}>
      <AccountDetails avatar={avatar} setAvatar={setAvatar} userName={userName} setUserName={setUserName} userId={userId} setUserId={setUserId} />
      
      <LoginButton/>
      <Grid container spacing={3} className={styles.gridContainer}>
        <Grid item xs={12} sm={6}>
          <SearchResults songs={songData} addToTrackList={addToTrackList}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={styles.playlistWrapper}>
            <Playlist savePlayListToSpotify={savePlayListToSpotify} playlistName={playlistName} setPlaylistName={setPlaylistName} />
            <Tracklist playlistId={playlistId} trackList={trackList} setTrackList={setTrackList} saveTracksToPlaylist={saveTracksToPlaylist} />
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
  </>);
}

export default App;

