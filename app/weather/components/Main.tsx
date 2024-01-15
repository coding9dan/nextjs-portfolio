"use client";

import React, { useEffect, useState } from "react";
import InitLoading from "./InitLoading";
import Location from "./Location";
import Temperature from "./Temperature";

const API_KEY = "91bde6c831f9289840a9f9b3991f67e2";

interface IData {
  isLoading: boolean;
  tempUnit: string;
  temperature: number;
  description: string;
  cityName: string;
  weatherIcon: string;
  altText?: string;
  feelsLike: number;
  humidity: number;
  tempMax: number;
  tempMin: number;
  sunrise: number;
  sunset: number;
  wind: number;
  deg: number;
}

const Main = () => {
  const [state, setState] = useState<IData>({
    isLoading: true,
    tempUnit: "",
    temperature: 0,
    description: "",
    cityName: "",
    weatherIcon: "",
    altText: "",
    feelsLike: 0,
    humidity: 0,
    tempMax: 0,
    tempMin: 0,
    sunrise: 0,
    sunset: 0,
    wind: 0,
    deg: 0,
  });

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=imperial`;

        fetch(apiUrl)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setState((prev) => ({
              ...prev,
              isLoading: false,
              tempUnit: "F",
              temperature: Math.floor(data.main.temp),
              cityName: data.name,
              description:
                data.weather[0].description.charAt(0).toUpperCase() +
                data.weather[0].description.slice(1),
              weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
              feelsLike: Math.floor(data.main.feels_like),
              humidity: data.main.humidity,
              tempMax: Math.floor(data.main.temp_max),
              tempMin: Math.floor(data.main.temp_min),
              sunrise: data.sys.sunrise,
              sunset: data.sys.sunset,
              wind: data.wind.speed,
              deg: data.wind.deg,
            }));
          });
      });
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="main-body flex justify-center items-center h-[80vh]">
      {state.isLoading ? (
        <InitLoading isLoading={true} />
      ) : (
        <>
          <Location
            cityName={state.cityName}
            weatherIcon={state.weatherIcon}
            altText={state.description}
          />
          <Temperature
            temperature={state.temperature}
            description={state.description}
            feelsLike={state.feelsLike}
            humidity={state.humidity}
            tempMax={state.tempMax}
            tempMin={state.tempMin}
            sunrise={state.sunrise}
            sunset={state.sunset}
            wind={state.wind}
            deg={state.deg}
          />
        </>
      )}
    </div>
  );
};

export default Main;
