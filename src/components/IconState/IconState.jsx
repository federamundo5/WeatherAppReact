
import React from 'react'
import PropTypes from 'prop-types'

import { WiCloud,
    WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiDayCloudyGusts,
    WiThunderstorm } from 'react-icons/wi'

    
const validValues = [
    "clouds",
    "clear",
    "rain",
    "drizzle",
    "cloudy",
    "thunderstorm",
    "dust",
    "snow"
]
const stateByName = {
    clouds: WiCloud,
    clear: WiDaySunny,
    cloudy: WiCloud,
    rain: WiRain,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm,
    dust: WiDayCloudyGusts,
    snow:  WiSnow
}




const IconState = ({state}) => {
    const StateByName = stateByName[state]

    return (<StateByName />)
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}
export default IconState