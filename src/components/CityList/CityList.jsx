import React, {useState, useEffect} from 'react'
import PropTypes, { array } from 'prop-types'
import CityInfo from './../CityInfo/'
import Weather from './../Weather/'
import { Grid, List, ListItem, Alert } from '@mui/material';
import useCityList from './../../hooks/useCityList'




//renderCityAndCountry se va a conventir en una funcion que retorna otra función
// li: es un item (según tag html, tiene el role "listitem")
// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry
    // const { temperature, state } = weather

    return (
        <ListItem
            button
            key={city} 
            onClick={() =>  eventOnClickCity(city, country)} >
            <Grid container 
                justify="center"
                alignItems="center"
            >
                <Grid item
                    md={9}
                    xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={3}
                    xs={12}>
                    <Weather 
                        temperature={weather && weather.temperature} 
                        state={weather && weather.state} /> 
                </Grid>
            </Grid>
        </ListItem>
    )
}

// cities: es un array, y en cada item tiene que tener la ciudad, pero además el country
// ul: tag html para listas no ordenadas
const CityList = ({ cities, onClickCity, onSetAllWeather, allWeather }) => {

    const {error, setError} =  useCityList(cities, onSetAllWeather)
    //console.log("AllWeatherData", allWeather)
   
    //const weather = { temperature: 10, state: "sunny" }

    return (
        <div>
            {
             error && <Alert onClose={()  => setError(null)} severity="error">{error}</Alert> 
            }

                <List>
                    { allWeather 
                         ? 
                        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                            allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
                            :
                            "vacio"
                    }
                </List>
        </div>

    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList