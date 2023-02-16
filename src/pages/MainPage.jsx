import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import { Paper } from '@mui/material';
import {getCities} from './../utils/serviceCities'

const MainPage = ({AllWeather, onSetAllWeather}) => {
  const history = useHistory()
  const cities = getCities();

  const onClickHandler = (city,country) => {

    
    //history push permite alterar la URL por programacion
   history.push(`/city/${country}/${city}`)
  }

  return (
    <AppFrame>
      <Paper elevation ={3}>
        <CityList AllWeather={AllWeather} onSetAllWeather={onSetAllWeather} cities={cities} onClickCity={onClickHandler}></CityList>
        </Paper>
    </AppFrame>
  )
}

MainPage.propTypes = {

}

export default MainPage
