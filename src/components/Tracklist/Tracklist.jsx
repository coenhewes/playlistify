import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Tracklist({ trackList, setTrackList, playlistId, saveTracksToPlaylist }) {
  const handleRemoveClick = (track) => {
    const updatedTrackList = trackList.filter(item => item.uri !== track.uri);
    setTrackList(updatedTrackList);
  };

  return (
    <>
      <div>
      {playlistId ? 
<div>      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Track</TableCell>
              <TableCell>Artist</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trackList.map((track, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {track.name} {/* Update to match your track object property */}
                </TableCell>
                <TableCell>{track.artists[0].name} {/* Update to match your artist object property */}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleRemoveClick(track)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={saveTracksToPlaylist} >
        Save Playlist
      </Button> </div>

      : <p>Start by naming your playlist</p>}
    </div>
    </>
  );
}

