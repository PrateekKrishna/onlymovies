import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchField() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 200},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" placeholder='search movies here'  variant="outlined" sx={{backgroundColor: "grey", width: 100}} />
    </Box>
  );
}
