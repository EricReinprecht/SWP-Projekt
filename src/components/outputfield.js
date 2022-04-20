import React, { Component } from "react";

import OutputValue from "./outputValue";

class OutputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherValues: [],
    };
  }

  getAllInformation = () => {
    let widget = [];

    this.props.locations.forEach((location) => {
      widget = [];
      widget.push(location.name);
    });
    let locationAsJSON = JSON.stringify(widget);
    let locationAsString = locationAsJSON.slice(2, -2).toString();
    return locationAsString;
  };

  loadCoordinates = (locationForApi) => {
    let weatherValue = this.state.weatherValues;
    console.log(this.state.weatherValues);
    if (locationForApi) {
      fetch(
        "https://api.openweathermap.org/geo/1.0/direct?limit=2&appid=77a92c772fa00a0ce8ac1d27c983fcdd&q=" +
          locationForApi
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (
            data[0].name.toLowerCase() || data[0].local_names.de.toLowerCase() === locationForApi.toLowerCase() ||
            data.length === 1
          ) {
            data = data[0];
          } else {
            data = data[1];
          }

          fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
              data.lat +
              "&lon=" +
              data.lon +
              "&appid=77a92c772fa00a0ce8ac1d27c983fcdd&lang=de&units=metric"
          )
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              weatherValue.push(data);
            })
            .catch(function (err) {
              console.log(err);
            });
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  getValues() {
    let widgets = [];

    this.state.weatherValues.forEach((temperatur) => {
      widgets = [];
      widgets.push(
        <OutputValue
          name={temperatur.name}
          temp={Math.round(temperatur.main.temp)}
          country={temperatur.sys.country}
          description={temperatur.weather[0].description}
          icon={"http://openweathermap.org/img/w/" + temperatur.weather[0].icon + ".png"}
          humidity={temperatur.main.humidity}
          wind={temperatur.wind.speed}
          cloudy={temperatur.clouds.all}
        />
      );
    });
    return widgets;
  }

  render() {
    return this.loadCoordinates(this.getAllInformation()), this.getValues();
  }
}

export default OutputField;
