
import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './Playlist.module.css';

export default function Playlist({playlistName, setPlaylistName}){

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
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
      </div>
    </>
  );
};
