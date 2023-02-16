import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Forecast from './Forecast' // SUT 


const forecastItemList = [
	{ hour: 18, state:"clear", temperature:17, weekDay:"Jueves" },
	{ hour: 6, state:"clouds", temperature:18, weekDay:"Viernes" },
	{ hour: 12, state:"snow", temperature:18, weekDay:"Viernes" },
	{ hour: 15, state:"rain", temperature:19, weekDay:"Viernes" },
	{ hour: 6, state:"thunderstorm", temperature:17, weekDay:"Sábado" },
	{ hour: 12, state:"drizzle", temperature:17, weekDay:"Sábado" }, 
]


test("Forecast renders", async () => {

    // AAA Arrange Act Assert


    const { findAllByTestId } = render (<Forecast forecastItemList={forecastItemList}  />)

    const forecastItem =  await findAllByTestId("forecast-item-container")

    expect(forecastItem).toHaveLength(6)


})
