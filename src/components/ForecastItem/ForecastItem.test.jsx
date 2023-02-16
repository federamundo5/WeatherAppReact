import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ForecastItem from './ForecastItem' // SUT 



test("ForeCastItem renders", async () => {

    // AAA Arrange Act Assert


    const { findByText } = render (<ForecastItem hour={20} state="snow" temperature={10} weekDay="Lunes" />)

   const weekDay = await findByText(/Lunes/)
   const temperature = await findByText(/10/)

   expect(weekDay).toHaveTextContent("Lunes")
   expect(temperature).toHaveTextContent("10 °")


})
