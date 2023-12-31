import React from "react";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
