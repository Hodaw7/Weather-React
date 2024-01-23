import { ThreeDots } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";

export default function Main(props) {
  if (props.apiData) {
    let icon = `http://openweathermap.org/img/wn/${props.apiData.weather[0].icon}@2x.png`;
    let timeStamp = props.apiData.dt * 1000;
    return (
      <div className="main">
        <h1>{props.apiData.name}</h1>
        <h2>
          <img src={icon} alt="icon" />
          <span className="temp">{Math.round(props.apiData.main.temp)}</span>
          <span className="degree">
            <a href="/">°C</a> |<a href="/">°F</a>
          </span>
        </h2>
        <h3>
          <FormattedDate unix={timeStamp} />
        </h3>
        <h4>{props.apiData.weather[0].description}</h4>
        <p>
          <span className="elements">
            Feels like:{" "}
            <span className="elements-number">
              {Math.round(props.apiData.main.feels_like)}
            </span>
            °
          </span>
          <span className="elements">
            Humidity:{" "}
            <span className="elements-number">
              {props.apiData.main.humidity}
            </span>
            %
          </span>
          <span className="elements">
            Wind:{" "}
            <span className="elements-number">{props.apiData.wind.speed}</span>{" "}
            km/h
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="Loader">
        <ThreeDots color="#000082" />
      </div>
    );
  }
}
