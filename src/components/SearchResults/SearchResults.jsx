
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function SearchResults({ songs, addToTrackList }) {
  const handleAddClick = (track) => {
    addToTrackList(track);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300, width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Track</TableCell>
            <TableCell>Artist</TableCell>
            <TableCell>Add Track</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((song, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {song.Title}
              </TableCell>
              <TableCell>{song.Artist}</TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => handleAddClick(song)}>
                  Add
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
