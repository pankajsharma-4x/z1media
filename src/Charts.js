import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Chart from "./images/chart1.png"
import Chart2 from "./images/chart2.png"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
}));


const Charts = () => {
  return (
    <Container maxWidth="lg" 
     sx={{
    marginTop:'2rem'
    }}
    >
    <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      <Grid item xs={12} md={6}>
        <Item >

      <img src={Chart} alt='chart1 pic' width="100%"  height='auto' />
        </Item>

      </Grid>
      <Grid item xs={12} md={6}>
        <Item>
        <img src={Chart2} alt='chart2 pic' width="100%"  height='auto' />
        </Item>
      </Grid>

    
    </Grid>
  </Box>
  </Container>
  )
}

export default Charts