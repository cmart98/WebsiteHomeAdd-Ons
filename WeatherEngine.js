import React, {useState, useEffect} from 'react';
import WeatherCard from './component';
const WeatherEngine = ({location}) => {

  const[query,setQuery] = useState('Chicago, US');
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState(false);
  const[city,setCity] = useState('');
  const[temp,setTemp]= useState('');
  const[condition,setCondition]= useState('');
  const[country,setCountry]= useState('');

  const getWeather = async (q) => {
      setLoading(true);
      try {
        const apiRes = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=45cb17e847eddc9528d7398d874b952c`
          );
          const resJSON = await apiRes.json();
          setTemp(resJSON.main.temp);
          setCondition(resJSON.weather[0].main);
          setCountry(resJSON.sys.country);
          setCity(resJSON.name)
      
      } catch (error) {
          setError(true)
      }
      setLoading(false);

    };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query)
  };

useEffect(()=>{
  getWeather(location);
}, [location]);

  return (
    <div className="App">
    {!loading && !error ?(
    <div>
    <WeatherCard temp = {temp } condition = {condition} city = {city} country = {country} />
    <form>
        <input
        value = {query}
        onChange={(e)=>setQuery(e.target.value)}
        />
       <button onClick = {e=>handleSearch(e)}>Search</button>
    </form>

        </div>
        ):loading?(
        <div style = {{color: 'black'}}>Loading</div>
        ):!loading && error? (<div>There has been an error!
            <button onClick ={()=>setError(false)}> </button>Reset!</div>):null}

    </div>
  );
};

export default WeatherEngine;
