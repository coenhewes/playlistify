
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Tracklist({ playlistSongs }) {
  // Default prop handling
  if (!playlistSongs || playlistSongs.length === 0) {
    return <p>Add some songs to get started!</p>; // or some placeholder message
  }

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Track</TableCell>
            <TableCell>Artist</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playlistSongs.map((song, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {song.Title}
              </TableCell>
              <TableCell>{song.Artist}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="contained">Save Playlist</Button>
  </>
  );
}
