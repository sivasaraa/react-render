import logo from './logo.svg';
import './App.css';
import UseState from './Component/UseState/UseState';
import UseReducer from './Component/UseReducer/UseReducer';
import ObjectUseState from './Component/ImmutableState/ObjectUseState';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      <ObjectUseState />
    </div>
  );
}

export default App;
