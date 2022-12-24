import React from "react";
import "./Styles.css";

export default function App(props) {
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
              <h1>new york</h1>
              <ul className="weatherLi">
                <li>
                  Last updated: ,<span>{props.data.description}</span>
                </li>
                <li>
                  Humidity: <span className="pink">{props.data.humidity}</span>
                  <span className="pink">%</span>, Wind:
                  <span className="pink">{props.data.wind}</span>
                  <span className="pink">km/h</span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <div className="temperature"></div>
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
    </div>
  );
}
