import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Newscard from "./Newscard"


const Card = () => {
  return (
    <Container maxWidth="lg" 
    sx={{
    height:'auto',
    display:'flex',
    flexDirection:'column',
    // justifyContent:'center',
    marginTop:{md:'0' , xs:'2rem'}
    }}
    >

    <Box sx={{
      display:'flex' ,
      // justifyContent:'space-around',
      flexWrap:'wrap'
      }}>
      <Newscard  />
    </Box>
    </Container>
  )
}

export default Card