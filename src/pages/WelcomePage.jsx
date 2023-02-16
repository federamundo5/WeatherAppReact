import React from 'react'
import WelcomeScreen from './../components/WelcomeScreen'
import { Grid, Typography, Link } from '@mui/material';
import { IconContext} from 'react-icons'
import { WiDaySunny} from 'react-icons/wi'
import {Link as RouterLink} from 'react-router-dom'

const WelcomePage = props => {
  return (  

    <WelcomeScreen>
      <Grid container direction="column" justifyContent="center" className='full'>
        <div className="highlight">
              <Grid item container xs={12} justifyContent="center" alignItems="center">
                  <IconContext.Provider value={{size:"6em"}}>
                             <WiDaySunny></WiDaySunny>
                  </IconContext.Provider>
              </Grid>
              <Grid item container direction="column" justifyContent="center" alignItems="center">
                <Typography variant="h4" color="inherit">Weather App</Typography>
                <Link color="inherit" component={RouterLink} to="/main" >
                  Ingresar
                </Link>
                </Grid>
        </div>    
      </Grid>
    </WelcomeScreen>
  )
}

WelcomePage.propTypes = {

}

export default WelcomePage
