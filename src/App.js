import React from "react";
import "./Styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather">
          <form className="weatherForm">
            <input
              className="searchCity"
              type="search"
              placeholder="Enter City"
            />
            <input className="searchButton" type="submit" value="search" />
          </form>
          <div className="row">
            <div className="col-6">
              <h1>New York</h1>
              <ul className="weatherLi">
                <li>
                  Last updated:<span>Saturday 03:57</span>,
                  <span>clear sky</span>
                </li>
                <li>
                  Humidity: <span className="pink">57</span>
                  <span className="pink">%</span>, Wind:
                  <span className="pink">5.6</span>
                  <span className="pink">km/h</span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <div className="temperature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="clear"
                  />
                  <span>11</span>
                </div>
                <span className="unit">
                  <a href="/">°C</a>/
                  <a href="/" className="active">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="weatherForecast" id="forecast"></div>
          <div>
            <a href="https://github.com/Gloria-orji/weather-react">
              opensource on GitHub
            </a>
            and
            <a href="https://incomparable-torte-167543.netlify.app/">
              hosted on Netlify
            </a>
            by Gloria Orji
          </div>
        </div>
      </div>
      <script src="src/app.js"></script>
    </div>
  );
}
