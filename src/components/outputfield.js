import React, { Component } from "react";
import styles from "./outputfield.module.css";

class OutputField extends Component {
  getAllTodos() {
    let widget = [];

    this.props.locations.forEach((location) => {
      widget = [];
      widget.push(location.name);
    });
    let locationAsJSON = JSON.stringify(widget);
    let locationAsString = locationAsJSON.slice(2, -2).toString();
    return locationAsString;
  }
  loadCoordinates(locationForApi) {
    if (locationForApi) {
      fetch(
        "http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=77a92c772fa00a0ce8ac1d27c983fcdd&q=" +
          locationForApi
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          data.forEach((locationForApi) => {
            fetch(
              "https://api.openweathermap.org/data/2.5/weather?lat=" +
                locationForApi.lat +
                "&lon=" +
                locationForApi.lon +
                "&appid=77a92c772fa00a0ce8ac1d27c983fcdd&lang=de&units=metric"
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                let html = "";
                html += "min Temperatur: " + data.main.temp_min + "</li>";
                document.getElementById("outputfield").innerHTML = html;
              })
              .catch(function (err) {
                console.log(err);
              });
          });
        })
        .catch(function (err) {
          console.log(err);
        });
      }
  }

  render() {
    return (
      this.loadCoordinates(this.getAllTodos()),
      (<div id="outputfield" className={styles.outputfield}></div>)
    );
  }
}

export default OutputField;
