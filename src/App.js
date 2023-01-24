import logo from './logo.svg';
import './App.css';
import UseState from './Component/UseState/UseState';
import UseReducer from './Component/UseReducer/UseReducer';
import ObjectUseState from './Component/ImmutableState/ObjectUseState';
import ArrayUseState from './Component/ImmutableState/ArrayUseState';
import Parent from './Component/ParentChild/Parent';
import ParentOne from './Component/Optimized/ParentOne';
import ChildOne from './Component/Optimized/ChildOne';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      <ParentOne>
        <ChildOne />
      </ParentOne>
    </div>
  );
}

export default App;
