import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import  News from './news.js'
import Newscard from "./Newscard"


const Card = () => {
  const [newsData , setNewsData] = React.useState(News);
  return (
    <Container maxWidth="lg" 
    sx={{height:'60vh',
    display:'flex',
    flexDirection:'column',
    // justifyContent:'center',
    marginTop:{md:'0' , xs:'2rem'}
    }}
    >

    <Box sx={{
      display:'flex' ,
      justifyContent:'space-around',
      flexWrap:'wrap'
      }}>
      <Newscard newsData = {newsData} />
    </Box>
    </Container>
  )
}

export default Card