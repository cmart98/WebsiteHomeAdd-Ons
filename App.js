import React, {useState, useEffect} from 'react';
import './App.css';
import WeatherEngine from './WeatherEngine'
function App() {
  return <div classNAme ="App">

  <WeatherEngine location = 'Chicago, US'/>
  <WeatherEngine location = 'Paris, FR'/>
  </div>
}

export default App;
