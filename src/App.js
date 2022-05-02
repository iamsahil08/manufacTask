import "./App.css";
import data from "./data.json";
import { BarChart, ScatterChart } from "./components/Chart";

function App() {
  return (
    <div className="App">
      <BarChart rawData={data} />
      <ScatterChart rawData={data} />
    </div>
  );
}

export default App;
