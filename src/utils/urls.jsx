    
    
    
    
    const appid = "f99bbd9e4959b513e9bd0d7f7356b38d"


    export const getWeatherUrl =  ({city,countryCode}) => {

    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`;
    }
         

    export const getForecastUrl =  ({city,countryCode}) => {

        return `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`;
        }
             