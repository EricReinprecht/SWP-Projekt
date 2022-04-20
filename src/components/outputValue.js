import  { Component } from "react";
import OutputField from "./outputfield";

import styles from "./outputfield.module.css";

class OutputValue extends Component {

  
    
    render() {
      
      return (
        <div className={styles.value}>{this.props.name}</div>    
      );
    }
  }
  
  export default OutputValue;