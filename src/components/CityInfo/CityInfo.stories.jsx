import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './CityInfo'
import 'typeface-roboto'

export default {
    title: "CityInfo",
    component: CityInfo
}



export const CityExample = () => <CityInfo city={"Buenos Aires"} country ={"Argentina"}></CityInfo>