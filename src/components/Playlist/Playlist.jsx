
import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './Playlist.module.css';
import Button from '@mui/material/Button';

export default function Playlist({playlistName, setPlaylistName, savePlayListToSpotify }){

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  }


  const handleClick = () => {
    savePlayListToSpotify();
  }

  return (
    <>
      <div className={styles.playlistContainer}>
      <TextField
        className={styles.inputField}
        value={playlistName}
        variant="filled" 
        size="small"
        type="search"
        label="Playlist Name"
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleClick}>Save</Button>
      </div>
    </>
  );
};
