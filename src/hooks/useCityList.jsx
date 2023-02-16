import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {getWeatherUrl} from './../utils/urls'
import getAllWeather  from '../utils/transform/getAllWeather'
import convertUnits from 'convert-units'

const useCityList = (cities, onSetAllWeather) =>{

    console.log("entre?", cities)
   // const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)
    var flag = 0;

    useEffect(() => {
        const  setWeather = async (city, country, countryCode) => {
            const url = getWeatherUrl({city,countryCode});
         
         try {
            const response = await  axios .get(url)
           const allWeatherAux = getAllWeather(response,city,country)
            console.log("allWeather", allWeatherAux)
  
             //setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))
               onSetAllWeather({ ...allWeatherAux})            
         } catch (error) {
            if (error.response) { // Errores que nos responde el server
                const { data, status } = error.response
                setError("Hay un error")
            } else if (error.request) { // Errores que suceden por no llegar al server
                console.log("Server in-accesible o no tengo internet")
                setError("Hay un error")
            } else { // Errores imprevistos
                console.log(error)
            }
         }
          /*  .then(response => {
            }).catch(error => {
                   })
                */
        }

        cities.forEach(({ city, country, countryCode }) => {
            var flag =1;
            setWeather(city, country, countryCode)
        });

        if(flag == 0 )
        setWeather(cities, undefined,undefined)

    }, [cities, onSetAllWeather])

    return {error, setError}
}



export default useCityList