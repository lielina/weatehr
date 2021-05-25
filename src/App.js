import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./componts/Weather";

export default function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState([]);
  const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5";
  const REACT_APP_API_KEY = "5d77a89532e074efda6cc97cb43c8c35";
  const REACT_APP_ICON_URL = "https://openweathermap.org/img/w";
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then(res => res.json())
        .then(result => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
