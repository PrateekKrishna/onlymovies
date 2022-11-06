import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SearchField from './searchMovies';

export default function SimplePaper() {
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
        <SearchField sx={{mt: 5}} />
      </Paper>
    </Box>
  );
}