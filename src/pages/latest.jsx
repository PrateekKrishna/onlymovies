import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../components/navbar'

function Latest(props) {
    const hod = "./hod.jpg"
    const title = "House of The Dragons"
  return (
    <>
        <Navbar />
        <Box sx={{display: "flex", flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
          Hello latest:
      </Box>
    </>
  )
}

export default Latest