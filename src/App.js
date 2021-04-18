import './App.css';
import Counter from "./components/Counter"
import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaceCounter"
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter"

function App() {
  return (
    <div className="counter">
    
    <Counter></Counter>
    <IncreaseCounter></IncreaseCounter>
    <DecreaseCounter></DecreaseCounter>
    <IncreaseByTwoCounter></IncreaseByTwoCounter>
  
    </div>
  );
}

export default App;
