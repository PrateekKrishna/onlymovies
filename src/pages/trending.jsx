import React from 'react'
import ResponsiveAppBar from '../components/navbar'
import MultiActionAreaCard from '../components/movieCard'
import { Box } from '@mui/material'

function Trending(props) {
    const hod = "./hod.jpg"
    const title = "House of The Dragons"
  return (
    <>
        <ResponsiveAppBar />
        <Box sx={{display: "flex", flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        <MultiActionAreaCard pic = {hod} title = {title}/>
        <MultiActionAreaCard pic = {hod} title = {title}/>
        <MultiActionAreaCard pic = {hod} title = {title}/>
        <MultiActionAreaCard pic = {hod} title = {title}/>
        <MultiActionAreaCard pic = {hod} title = {title}/>
        <MultiActionAreaCard pic = {hod} title = {title}/>
        <MultiActionAreaCard pic = {hod} title = {title}/>
        <MultiActionAreaCard pic = {hod} title = {title}/>
        <MultiActionAreaCard pic = {hod} title = {title}/>
        <MultiActionAreaCard pic = {hod} title = {title}/>
        <MultiActionAreaCard pic = {hod} title = {title}/>
        <MultiActionAreaCard pic = {hod} title = {title}/>
      </Box>
    </>
  )
}

export default Trending