import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './SearchBar.module.css';


export default function SearchBar() {
  return (
  <>
    <div className={styles.searchBarContainer}>  
    <TextField 
      id="filled-basic" 
      label="Search For a Track" 
      variant="filled"
      size="small" 
    />
    <button 
      variant="contained" color="primary">
        Search
      </button>
      </div>
  </>
  );
}
