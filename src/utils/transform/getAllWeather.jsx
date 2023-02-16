
import React from 'react'

import convertUnits from 'convert-units'


const getAllWeather = (response, city,country) => {

const { data } = response
const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
const state = data.weather[0].main.toLowerCase()
const humidity = data.main.humidity
const wind = data.wind.speed
const propName = `${city}-${country}` 
const propValue = { temperature, state, humidity,wind }     
console.log("temprature"+ temperature, humidity,)
    return ({ [propName]: propValue })             
}

export default getAllWeather