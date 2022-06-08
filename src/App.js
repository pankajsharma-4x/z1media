import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import Header from './Header'

//************   THEME STARTS HERE  ***********************//

const theme = createTheme({
  palette: {
    primary: {
      main: '#fffff'
    },

    secondary: {
      main: "#ffa500"
    },
    info:{
      main: "rgb(231 93 93 / 87%)"
    },
    success:{
    main:'#00bcd4'
    }
  },
});

//************   THEME ENDS HERE  ***********************//

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Header />
    </ThemeProvider>
  )
}

export default App