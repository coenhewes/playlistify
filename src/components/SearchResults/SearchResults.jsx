
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SearchResults({ songs, addToTrackList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleAddClick = (track) => {
    addToTrackList(track);
  };

  const searchSpotify = () => {
    let bearerToken = window.localStorage.getItem("token");
    const headers = { 'Authorization': `Bearer ${bearerToken}` };

    fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, { headers })
      .then(response => response.json())
      .then(data => {
        if (data && data.tracks && data.tracks.items) {
          setSearchResults(data.tracks.items); // Assuming data.tracks.items is the array of tracks
        } else {
          setSearchResults([]); // Set an empty array if no results or invalid response
        }
      })
      .catch(error => {
        console.error('Error fetching Spotify data:', error);
        setSearchResults([]); // Handle error by setting empty array
      });
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div>
        <TextField
          id="filled-search"
          label="Search For a Track"
          variant="filled"
          size="small"
          type="search"
          onChange={handleSearchTerm}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={searchSpotify}
          type="button" // Ensure the button type is specified
        >
          Search
        </Button>
      </div>
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
            {searchResults.map((track, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {track.name} {/* Adjust as per Spotify API response */}
                </TableCell>
                <TableCell>{track.artists[0].name}</TableCell> {/* Assuming single artist */}
                <TableCell>
                  <Button variant="outlined" onClick={() => handleAddClick(track)}>
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
