import logo from './logo.svg';
import './App.css';
import UseState from './Component/UseState/UseState';
import UseReducer from './Component/UseReducer/UseReducer';
import ObjectUseState from './Component/ImmutableState/ObjectUseState';
import ArrayUseState from './Component/ImmutableState/ArrayUseState';
import Parent from './Component/ParentChild/Parent';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      <Parent />
    </div>
  );
}

export default App;
