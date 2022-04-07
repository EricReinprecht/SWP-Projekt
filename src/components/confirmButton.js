import React, { Component } from 'react';
import styles from './confirmButton.module.css';


class ConfirmButton extends Component{
    render(){
        return(
            <div className={styles.buttonDiv} >
                <button className={styles.button}>SEARCH</button>
            </div>
        );
    }
}

export default ConfirmButton;