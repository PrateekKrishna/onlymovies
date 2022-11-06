import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button sx={{m: 9}} variant="contained">{props.text}</Button>
    </Stack>
  );
}
