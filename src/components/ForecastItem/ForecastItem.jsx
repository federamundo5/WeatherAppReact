import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid } from '@mui/material';
import IconState,  {validValues} from './../IconState'

import { IconContext } from 'react-icons'


const ForecastItem = ({weekDay, hour, state, temperature}) => {
  return (
      <Grid container 
      direction ="column" justify="center" alignItems="center">
          <Grid item>
                <Typography>{weekDay}</Typography>
          </Grid>
          <Grid item>
          <Typography>{hour}</Typography>

              </Grid>
                <Grid item>
                <IconContext.Provider value={{size: '2em'}}>
                <IconState state={state}/>

                   </IconContext.Provider>
                </Grid>
                    <Grid item>
                    <Typography>{temperature} °</Typography>
                    </Grid>
      </Grid>
  )
}


ForecastItem.propTypes = {
 weekDay: PropTypes.string.isRequired,
 hour: PropTypes.number.isRequired,
 state: PropTypes.string.isRequired,
 temperature: PropTypes.number.isRequired
}

export default ForecastItem