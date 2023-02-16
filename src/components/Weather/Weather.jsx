import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material';
import IconState from './../IconState'
import { IconContext } from 'react-icons'
import { Grid,Skeleton } from '@mui/material';


const Weather = ({ temperature, state }) => {
    return (
        <Grid container item
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}>
            <IconContext.Provider value={{ size:'6em'}}>
                {
                    state ? 
                    <IconState state={state} />
                    :
                    <Skeleton variant="circle" height={80} width={80}></Skeleton>
                }
            </IconContext.Provider>
            {
                temperature ? 
                <Typography display="inline" variant="h2">{temperature}</Typography>
                :
                <Skeleton variant="rect" height={80} width={80}></Skeleton>
            }
        </Grid>
    )
}
Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
}

export default Weather