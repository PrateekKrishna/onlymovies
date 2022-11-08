import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SearchField from './searchMovies';
import { Button } from '@mui/material';

export default function SimplePaper() {
  function handleChange(e){
    console.log(e.target.value);
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mt: 3,
          width: "100%",
          height: 150,
          backgroundImage: `url(./background.jpg)`
        },
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} sx={{display: 'flex', justifyContent: "center"}}>
      </Paper>
    </Box>
  );
}
