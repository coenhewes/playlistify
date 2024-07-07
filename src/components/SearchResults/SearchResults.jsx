import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function SearchResults({ songs }) {
  // Default prop handling
  if (!songs || songs.length === 0) {
    return <p>No songs available</p>; // or some placeholder message
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
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
              <TableCell><Button variant="outlined">Add</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
