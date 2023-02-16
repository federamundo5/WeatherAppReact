import React from 'react'
import { Grid, LinearProgress } from '@mui/material';
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import useCityPage from './../hooks/useCityPage'
import useCityList from './../hooks/useCityList'
import { useParams } from 'react-router-dom';

const CityPage = ({onSetAllWeather, allWeather}) => {
    const { city, chartData, forecastItemList } = useCityPage()

    console.log("que city entrop"+ city)
    const { country } = useParams(); // Get the 'country' parameter from the URL

    const cities = React.useMemo(() => [city], [city]);
    
  //  console.log("react memo" + city)
     useCityList(cities, onSetAllWeather);
    
    console.log("allWeather", allWeather)
    const weather = allWeather[`${city}-Undefined`] ?? allWeather[`${city}-Undefined`];
        console.log(weather)
    const state = "clouds"
    const temperature = allWeather[`${city}-undefined`]?.temperature ?? 25;
    const humidity = allWeather[`${city}-undefined`]?.humidity ?? 25;
    const wind = allWeather[`${city}-undefined`]?.wind ?? 25;

    return (
        <AppFrame>
            <Grid container
                justify="space-around"
                direction="column"
                spacing={2}>
                <Grid item container 
                    xs={12} 
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12}
                    justify="center">
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetails humidity={humidity} 
                        wind={wind} />
                </Grid>
                <Grid item>
                {     !chartData && !forecastItemList && <LinearProgress></LinearProgress>}               
                 </Grid>
                <Grid item>
                    {
                        chartData && <ForecastChart data={chartData} />
                    }
                </Grid>
                <Grid item>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>        
        </AppFrame>
    )
}

export default CityPage