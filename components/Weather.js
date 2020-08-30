import React, { useState, useEffect }  from 'react'
import { Text,ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    useEffect(()=>{
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if(props.zipCode){
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=eea8acf37ea1d91aa6dcaf545cffd5db`)
            .then((response)=>response.json())
            .then((json)=>{
                const main = json.weather[0].main
                const description = json.weather[0].description
                const temp = json.main.temp
                
                var imgSouce
                if(main == "Clouds"){
                    imgSouce = require('../image/Clouds.png')
                }
                else if(main == "Rain"){
                    imgSouce = require('../image/Rain.png')
                }
                else{
                    imgSouce = require('../image/1.jpg')
                }
                setForecastInfo({
                    main:main,
                    description:description,
                    temp:temp,
                    img: imgSouce});}
            )
            .catch((error)=>{
                console.warn(error);
            });
        }
    },[props.zipCode])
       
  return (
        <ImageBackground source={require('../43-2.jpg')} style={styles.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    zipTxt: {
        fontSize: 30,
        margin: 10,
    },
    backdrop: {
        flexDirection: 'column',
      
        width: '100%',
        height: '100%'
    },
})