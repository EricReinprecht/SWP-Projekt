import React, { Component } from 'react';
import styles from './outputfield.module.css';


class OutputField extends Component{
    render(){
        return(
            loadCoordinates("Reuthe"),
            <div className={styles.outputfield}>
                
            </div>
        );
    }
}

function loadCoordinates(location) {
    fetch("http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=77a92c772fa00a0ce8ac1d27c983fcdd&q=" + location)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for(let i=0; i<1; i++){
            console.log(data.location)
        };
          
        
      })
      .catch(function (err) {
        console.log(err);
      });
  }

export default OutputField;