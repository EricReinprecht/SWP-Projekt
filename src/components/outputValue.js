import { Component } from "react";
import styles from "./outputfield.module.css";

class OutputValue extends Component {
  render() {
    return (
      <div>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <div className={styles.image}>
              <img src={this.props.icon} height={80}></img>
            </div>
            <div className={styles.temperature}>{this.props.temp}</div>
            <div className={styles.celsius}> C°</div>
            <div className={styles.list}>
              <ol>{this.props.humidity}% Luftfeuchtigkeit</ol>
              <ol>{this.props.wind} m/s</ol>
              <ol>{this.props.cloudy}% Bewölkt</ol>
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.locationName}>{this.props.name}</div>
            <div className={styles.description}>{this.props.description}</div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default OutputValue;
