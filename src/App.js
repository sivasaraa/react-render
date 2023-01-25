import logo from './logo.svg';
import './App.css';
import UseState from './Component/UseState/UseState';
import UseReducer from './Component/UseReducer/UseReducer';
import ObjectUseState from './Component/ImmutableState/ObjectUseState';
import ArrayUseState from './Component/ImmutableState/ArrayUseState';
import Parent from './Component/ParentChild/Parent';
import ParentOne from './Component/Optimized/ParentOne';
import ChildOne from './Component/Optimized/ChildOne';
import GrandParent from './Component/Optimized/GrandParent';
import ParentTwo from './Component/Optimized/ParentTwo';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      {/* <GrandParent /> */}
      <ParentTwo />
    </div>
  );
}

export default App;
