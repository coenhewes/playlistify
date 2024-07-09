
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Tracklist({ trackList, setTrackList, savePlayListFromTrackList }) {
  const handleRemoveClick = (track) => {
    const updatedTrackList = trackList.filter(item => item.uri !== track.uri);
    setTrackList(updatedTrackList);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Track</TableCell>
              <TableCell>Artist</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trackList.map((song, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {song.Title}
                </TableCell>
                <TableCell>{song.Artist}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleRemoveClick(song)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={savePlayListFromTrackList}>
        Save Playlist
      </Button>
    </>
  );
}
