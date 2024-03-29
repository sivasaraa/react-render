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
import ParentThree from './Component/IncorrectOptimization/ParentThree';
import ChildThree from './Component/IncorrectOptimization/ChildThree';
import ParentFour from './Component/IncorrectOptimization/ParentFour';
import ContextParent from './Component/Context/ContextParent';
import { ChildA } from './Component/Context/ContextChildren';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
