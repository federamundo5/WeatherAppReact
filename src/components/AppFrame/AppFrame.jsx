import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, AppBar, Toolbar, IconButton, Link } from '@mui/material';
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import {Link as LinkRouter} from 'react-router-dom'


const AppFrame = ({ children }) => {
  return (
    <Grid container justifyContent="center">
      <AppBar position="static">
        <Toolbar> 
            <IconButton color="inherit" aria-label="menu">
                        <Link component={LinkRouter}  to="main" aria-label="menu" color="inherit"> 
                            <IconContext.Provider value={{size: "2em"}}>
                                <WiDaySunny></WiDaySunny>
                            </IconContext.Provider>
                        </Link>
            </IconButton>
            <Typography variant="h6" color="inherit">
                Weather App
            </Typography>
        </Toolbar>
        </AppBar>
        <Grid  item xs={12} sm={10} md={10} sm={11} lg={8}>
          {children}
        </Grid>
    </Grid>
  )
}

AppFrame.propTypes = {
      children:  PropTypes.node
}

export default AppFrame
