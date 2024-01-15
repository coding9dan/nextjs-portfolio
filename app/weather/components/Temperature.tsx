import moment from "moment";
import React from "react";

interface IData {
  temperature: number;
  description: string;
  feelsLike: number;
  humidity: number;
  tempMax: number;
  tempMin: number;
  sunrise: number;
  sunset: number;
  wind: number;
  deg: number;
}

const getCardinalDirection = (angle: number) => {
  const directions = [
    "↑ N",
    "↗ NE",
    "→ E",
    "↘ SE",
    "↓ S",
    "↙ SW",
    "← W",
    "↖ NW",
  ];

  return directions[Math.round(angle / 45) % 8];
};

const Temperature: React.FC<IData> = ({
  temperature,
  description,
  feelsLike,
  humidity,
  tempMax,
  tempMin,
  sunrise,
  sunset,
  wind,
  deg,
}) => {
  return (
    <div className="flex justify-center flex-col mt-[170px]">
      <p className="text-lg">
        <span>
          {temperature}&#176;F | {Math.round((temperature - 32) * (5 / 9))}
          &#176;C ({description})
        </span>
      </p>
      <p className="text-sm">
        Feels like: {feelsLike}&#176;F |{" "}
        {Math.round((feelsLike - 32) * (5 / 9))}
        &#176;C
      </p>
      <p className="text-sm">Humidity: {humidity}%</p>
      <p className="text-sm">
        Max: {tempMax}&#176;F | {Math.round((tempMax - 32) * (5 / 9))}&#176;C
      </p>
      <p className="text-sm">
        Min: {tempMin}&#176;F | {Math.round((tempMin - 32) * (5 / 9))}&#176;C
      </p>
      <p className="text-sm">
        Sunrise: {new Date(sunrise * 1000).toLocaleTimeString("en-IN")}
      </p>
      <p className="text-sm">
        Sunset: {new Date(sunset * 1000).toLocaleTimeString("en-IN")}
      </p>
      <p className="text-sm">
        Wind: {wind} mph {getCardinalDirection(deg)}
      </p>
      <p className="text-sm">Day: {moment().format("dddd")}</p>
      <p className="text-sm">Date: {moment().format("LL")}</p>
    </div>
  );
};

export default Temperature;
