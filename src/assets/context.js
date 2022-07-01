import axios from "axios";
import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState("");
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  const fetchWeather = async () => {
    setWaiting(false);
    setLoading(true);
    await axios
      .get(API)
      .then((res) => {
        const data = res.data;
        setWeather(data);
        setIcon(
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
        setLoading(false);
      })
      .catch((err) => {
        setWaiting(true);
        setLoading(false);
      });
    setCity("");
  };

  return (
    <AppContext.Provider
      value={{ waiting, loading, city, setCity, icon, weather, fetchWeather }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
