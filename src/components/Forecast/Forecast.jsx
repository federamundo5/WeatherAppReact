import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid } from '@mui/material';
import ForecastItem from './../ForecastItem'
import IconState,  {validValues} from './../IconState'

const renderForecastItem = forecast => {
    const {weekDay, hour, state, temperature} = forecast
        return (
            <Grid data-testid="forecast-item-container" item key={`${weekDay}${hour}`}>
                <ForecastItem hour={hour} state={state} temperature={temperature} weekDay={weekDay}></ForecastItem>
            </Grid>
        )
}


const Forecast = ({forecastItemList}) => {
    return(
        <Grid container justifyContent="space-around" alignItems="center" spacing={5}>
        {forecastItemList.map(forecast => renderForecastItem(forecast))}
        </Grid>
    )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired
    })).isRequired
}

export default Forecast