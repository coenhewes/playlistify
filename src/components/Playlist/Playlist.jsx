import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Playlist({playlistName}){
  return (
    <>
      <TextField variant="outlined" value={playlistName}/>
      <Button type="submit">Save</Button>
    </>
  );
};
