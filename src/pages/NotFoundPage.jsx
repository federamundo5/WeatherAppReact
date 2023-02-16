import React from 'react'
import WelcomeScreen from './../components/WelcomeScreen'
import { Grid, Typography, Link } from '@mui/material';
import { IconContext} from 'react-icons'
import { WiRain} from 'react-icons/wi'
import {Link as RouterLink} from 'react-router-dom'


const NotFoundPage = () => {
  return (
    <Grid container direction="column" justifyContent="center" className='full'>
        <div className="highlight">
              <Grid item container xs={12} justifyContent="center" alignItems="center">
                  <IconContext.Provider value={{size:"6em"}}>
                             <WiRain></WiRain>
                  </IconContext.Provider>
              </Grid>
              <Grid item container direction="column" justifyContent="center" alignItems="center">
                <Typography variant="h4" color="inherit">404 | La pagina no existe</Typography>
                <Link color="inherit" component={RouterLink} to="/main" >
                  Ingresar
                </Link>
                </Grid>
        </div>    
      </Grid>
  )
}

export default NotFoundPage
