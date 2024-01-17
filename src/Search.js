import React, { useState } from "react";
import axios from "axios";
import Main from "./Main";

export default function Search() {
  const [city, setCity] = useState(null);
  const [data, setData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    getData(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getData(city) {
    const apiKey = "6f578534f7bda58a70b66bd674c4d531";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function getWeather(response) {
    setData(response.data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          autoComplete="off"
          autoFocus="on"
          onChange={updateCity}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
        <button type="button" className="btn btn-outline-info">
          Current location
        </button>
      </form>
      <Main apiData={data} />
    </div>
  );
}
