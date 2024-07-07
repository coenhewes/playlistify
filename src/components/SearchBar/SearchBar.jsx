import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './SearchBar.module.css';


export default function SearchBar() {
  return (
  <>
    <div className={styles.searchBarContainer}>  
    <TextField 
      id="filled-search" 
      label="Search For a Track" 
      variant="filled"
      size="small"
      type="search"
      className={styles.textField}
    />
    <button 
      variant="contained" 
      color="primary"
      className={styles.button}
    >
        Search
      </button>
    </div>
  </>
  );
}
