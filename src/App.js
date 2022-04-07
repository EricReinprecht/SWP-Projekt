import './App.css';
import ConfirmButton from './components/confirmButton';
import InputField from './components/inputfield';
import OutputField from './components/outputfield';

function App() {
  return (
    <div className="App">
      <div className="locationInput">
      <InputField/>
      <ConfirmButton/>
      </div>
      <OutputField/>
    </div>
  );
}

export default App;
