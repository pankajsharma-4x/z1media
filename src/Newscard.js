import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  padding:'10px',
}));

const Newscard = () => {
  return (

    <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      <Grid item xs={12} md={6}>
        <Item     
        sx={{
        backgroundColor: '#2196f3',
        borderRadius:'12px'
       }}
    >

    <Typography  gutterBottom variant="h5" component="div" >
      Total Income
    </Typography>
      <Typography variant="body2" color="text.secondary" 
      sx={{fontSize:'25px' ,fontWeight:'600'}}
      >
       $ 579,000
      </Typography>
      <Typography variant="body2" color="text.secondary"
       sx={{
         fontSize:'16px',
         fontWeight:'500',
         }}
      >
       Saved 25%
      </Typography>
        </Item>

      </Grid>
      <Grid item xs={12} md={6}>
        <Item
                sx={{
        backgroundColor: '#90caf9',
        borderRadius:'12px'
       }}
        >

        <Typography  gutterBottom variant="h5" component="div">
        Total Expenses
      </Typography>
      <Typography variant="body2" color="text.secondary" 
      sx={{fontSize:'25px' ,fontWeight:'600'}}
      >
       $ 659,000
      </Typography>
      <Typography variant="body2" color="text.secondary"
       sx={{
         fontSize:'16px',
         fontWeight:'500',
         }}
      >
       Saved 15%
      </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} md={6}>
        <Item
                sx={{
        backgroundColor: '#b39ddb',
        borderRadius:'12px'
       }}
        >
        <Typography  gutterBottom variant="h5" component="div">
        Cash On Hand
      </Typography>
      <Typography variant="body2" color="text.secondary" 
      sx={{fontSize:'25px' ,fontWeight:'600'}}
      >
       $ 329,000
      </Typography>
      <Typography variant="body2" color="text.secondary"
       sx={{
         fontSize:'16px',
         fontWeight:'500',
         }}
      >
       Saved 35%
      </Typography>
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item
                sx={{
        backgroundColor: '#81c784',
        borderRadius:'12px'
       }}
        >
        <Typography  gutterBottom variant="h5" component="div">
        Net Profit Margin
      </Typography>
      <Typography variant="body2" color="text.secondary" 
      sx={{fontSize:'25px' ,fontWeight:'600'}}
      >
       $ 965,000
      </Typography>
      <Typography variant="body2" color="text.secondary"
       sx={{
         fontSize:'16px',
         fontWeight:'500',
         }}
      >
       Saved 45%
      </Typography>
        </Item>
      </Grid>
    </Grid>
  </Box>

  
    
  )
}

export default Newscard