import React, { Component } from 'react';
import styles from './inputfield.module.css';


class InputField extends Component{
    render(){
        return(
            <div className={styles.inputfield}>
                <input type="text" id="input"></input>
            </div>
        );
    }
}

export default InputField;