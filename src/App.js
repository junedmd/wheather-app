import React, { useEffect, useState } from 'react';
import './App.css';
import Imgwind from "./image/weather.png"
import Imgvisibility from "./image/visibility.png"
import Imghumidity from "./image/humidity.png"
import axios from 'axios';
function App() {

 const [ weatherData ,setWeatherData] =useState({});
 const [city ,setCity] =useState("pune")
    async function loadWhetherData(){
      let response =" "
      try {
        response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f652964084c552e8c0492237a3fabd9c`);
        setWeatherData(response.data);
      }
      catch(error){
        console.log(response.data);
      }
    
  
  
  }

  useEffect(()=>{
    loadWhetherData();
  })

  useEffect(()=>{
    loadWhetherData();
  } ,[city])

  return (
   <>
   <div className='container'>
        <h1 className='h1'> Wheather App: </h1>
      <div className='input-div'>
          <input  placeholder=' Search city' className=' inputbox' type='text' value={city} onChange={(e)=>{
            setCity(e.target.value);
          }}/>
          <h1 className='p'> {weatherData?.name}</h1>
          <h1 className='pa'> {(weatherData?.main?.temp-273).toFixed(2)} °C</h1>

          <div className='div-container'>
              <div className='box'>
                <span className='text1'> Wind</span><br/>
                <img src={Imgwind}  className='img' /><br/>
                <h1 className='text2' > {(weatherData?.wind?.speed)} km/h</h1>
              </div>
              <div className='box'>
              <span className='text1'> Versibility </span><br/>
                <img src={Imgvisibility}  className='img' /><br/>
                    <h1 className='text2'>{(weatherData?.visibility)}Mtr </h1>
              </div>
              <div className='box'>
              <span className='text1'> Humidity </span><br/>
                <img src={Imghumidity} className='img' /><br/>
                 <h1 className='text2'>{(weatherData?.main?.humidity)}°F </h1>
              </div>

          </div>
      </div>


   </div>
   </>
  );
}

export default App;
