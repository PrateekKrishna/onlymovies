import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../components/navbar'

function Trending(props) {
    const hod = "./hod.jpg"
    const title = "House of The Dragons"
  return (
    <>
        <Navbar />
        <Box sx={{mb: 10, display: "flex", flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
          Hello trending:
      </Box>
    </>
  )
}

export default Trending