import './App.css';
import InputField from './components/inputfield';
import OutputField from './components/outputfield';

function App() {
  return (
    <div className="App">
      <div className="locationInput">
      <InputField/>
      </div>
      <OutputField/>
    </div>
  );
}

export default App;
