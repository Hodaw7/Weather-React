export default function Main() {
  return (
    <div className="main">
      <h1>Tehran</h1>
      <h2>
        <img src="" alt="icon" id="icon" />
        <span className="temp" id="temp"></span>
        <span className="degree">
          <a href="/" id="celsius">
            °C
          </a>{" "}
          |
          <a href="/" id="fahrenheit">
            °F
          </a>
        </span>
      </h2>
      <h3 id="date" aria-hidden="true"></h3>
      <h4 id="description" aria-hidden="true"></h4>
      <p>
        <span className="elements">
          Feels like:
          <span className="elements-number" id="feels"></span>°
        </span>
        <span className="elements">
          Humidity:
          <span className="elements-number" id="humidity"></span>%
        </span>
        <span className="elements">
          Wind: <span className="elements-number" id="wind"></span> km/h
        </span>
      </p>
    </div>
  );
}
