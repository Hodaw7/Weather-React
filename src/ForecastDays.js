export default function ForecastDays(props) {
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div>
      <img src={icon} alt="Forecast icon" />
      <div className="day">{days[day]}</div>
      <div>
        {Math.round(props.data.temp.max)}°{" "}
        <span className="min">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
