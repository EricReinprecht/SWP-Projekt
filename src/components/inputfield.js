import React, { Component } from 'react';
import styles from './inputfield.module.css';


class InputField extends Component{

    constructor(props){
        super(props);
        this.state={
            inputValue:""
        }
        
    }

    handleChange = (event)=>{
        this.setState({
            inputValue: event.target.value
        })
    }

    searchWether = ()=>{
        if(this.state.inputValue == "Reuthe"){
            console.log("hallo")
        }
    }

    render(){
        return(
            <div className={styles.inputfield}>
                <input type='text' value={this.state.inputValue} onChange={this.handleChange}/>
                <button onClick={this.searchWether}>Search</button>
            </div>
        );
    }
}

export default InputField;