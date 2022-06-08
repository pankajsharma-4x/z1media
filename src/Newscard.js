import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles'

//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE STARTS HERE  **************/
const useStyles = makeStyles(theme => ({
  price:{
    fontWeight:'500',
  },
}));

//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE ENDS HERE  **************/



const Newscard = ({newsData}) => {
const classes = useStyles();
  return (
      <>
       {newsData.map((item) => {
           return(
               <>
               <Card key={item.id} 
               sx={{ 
                 width: {xs:'100%' , md: '45%'},
                 height:  {xs:'40%' , md: '75%'},
                 marginBottom:'20px',
                 flexWrap:'wrap',
                  }}>
    <CardContent>
      <Typography  gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" className={classes.price}>
       $ {item.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {item.savings}
      </Typography>
    </CardContent>
  </Card>
               </>
           )
       })}

      </>
  
  )
}

export default Newscard