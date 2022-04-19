import React, { Component } from "react";
import styles from "./inputfield.module.css";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  getLocation = () => {
    this.props.locationAdded(this.state.inputValue);
  };
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.getLocation();
    }
  };

  render() {
    return (
      <div className={styles.input}>
        <input className={styles.inputfield}
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder={"Enter Location"}
        />
        <button className={styles.searchButton}  onClick={this.getLocation}>SEARCH</button>
      </div>
    );
  }
}

export default InputField;
