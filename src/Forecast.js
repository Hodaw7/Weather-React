import axios from "axios";

export default function Forecast(props) {
  console.log(props);

  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "f5029b784306910c19746e40c14d6cd3";
  let lat = 35.7219;
  let lon = 51.3347;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="row forecast">
      <div className="forecast-days col">
        <img src="/" alt="Forecast icon" />
        <div className="day">Tue</div>
        <div>
          9° <span className="min">4°</span>
        </div>
      </div>
    </div>
  );
}
