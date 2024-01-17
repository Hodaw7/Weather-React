import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <App />
      <span className="credit">
        This project was codded by{" "}
        <a href="mailto:hodabarekati0@gmail.com">Hoda Barekati</a> and is{" "}
        <a
          href="https://github.com/Hodaw7/Weather-React"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </span>
    </div>
  </React.StrictMode>
);

reportWebVitals();
