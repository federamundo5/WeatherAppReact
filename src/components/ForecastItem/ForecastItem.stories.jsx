import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastItem",
    component: ForecastItem
}

export const LunesSoleada = () => <ForecastItem hour={10} state="clear"
                                    temperature={10} weekDay="Lunes" />

