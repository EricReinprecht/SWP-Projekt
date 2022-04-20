import { Component } from "react";
import "./App.css";
import InputField from "./components/inputfield";
import OutputField from "./components/outputfield";
import OutputValue from "./components/outputValue";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
  }

  getLocation = (value) => {
    let location = {
      id: 1,
      name: value,
    };
    let locations = this.state.locations;
    locations.push(location);

    this.setState({
      locations: locations,
    });
  };

  render() {
    return (
      <div className="App">
        <InputField locationAdded={this.getLocation}/>
        <OutputField/>
      </div>
    );
  }
}

export default App;
