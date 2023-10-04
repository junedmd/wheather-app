import React, { useEffect, useState } from 'react';
import './App.css';
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
      </div>


   </div>
   </>
  );
}

export default App;
