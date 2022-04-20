import React, { Component } from "react";
import styles from "./outputfield.module.css";

import OutputValue from "./outputValue";

class OutputField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temperatur: [],
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
    
    let temperatur = this.state.temperatur

    if (locationForApi, temperatur) {
      fetch(
        "https://api.openweathermap.org/geo/1.0/direct?limit=2&appid=77a92c772fa00a0ce8ac1d27c983fcdd&q=" +
          locationForApi
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if(data[0].name.toLowerCase() === locationForApi.toLowerCase() || data.length === 1){
            data = data[0];
          }else{
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
                 temperatur.push(data.main.temp);
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

  getValues(){
    let widgets = [];

    

    this.state.temperatur.forEach(temperatur =>{
      widgets.push(<OutputValue name={temperatur}/>)
    });
    return widgets;
}

  render() {
    return (
      this.loadCoordinates(this.getAllInformation()),
      <div>
        {this.getValues()}
      </div>
    );
  }
}

export default OutputField;